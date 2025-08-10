import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
# Allow requests from your frontend origin
CORS(app, resources={r"/predict": {"origins": "*"}})

# Get the absolute path to the directory where this script is located
script_dir = os.path.dirname(__file__)

# Load the trained model and encoders using absolute paths
try:
    with open(os.path.join(script_dir, 'chip_predictor_model.pkl'), 'rb') as model_file:
        model = pickle.load(model_file)
    with open(os.path.join(script_dir, 'flavor_encoder.pkl'), 'rb') as encoder_file:
        flavor_encoder = pickle.load(encoder_file)
except FileNotFoundError as e:
    print(f"Error loading model/encoder files: {e}")
    print("Please ensure 'chip_predictor_model.pkl' and 'flavor_encoder.pkl' are in the 'backend' directory.")
    model = None
    flavor_encoder = None

@app.route('/predict', methods=['POST'])
def predict():
    if not model or not flavor_encoder:
        return jsonify({'error': 'Model or encoder not loaded. Check server logs.'}), 500

    try:
        data = request.get_json(force=True)
        flavor = data['flavor']
        # The key from the frontend is 'weight'
        weight = float(data['weight'])

        # Encode the flavor
        flavor_encoded = flavor_encoder.transform([flavor])[0]

        # Prepare the feature vector for prediction
        features = np.array([[flavor_encoded, weight]])

        # Make prediction
        prediction = model.predict(features)
        predicted_chips = int(round(prediction[0]))

        return jsonify({'predicted_chips': predicted_chips})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)