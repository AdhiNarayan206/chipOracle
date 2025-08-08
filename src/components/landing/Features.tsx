import { Triangle } from "lucide-react";
import snapUploadImg from "/snap-upload.jpg";
import aiChipCountImg from "/ai-chip-count.jpeg";

const features = [
  {
    icon: <img src={snapUploadImg} alt="Snap and Upload" className="w-full h-full object-cover rounded-2xl" />,
    title: "Snap & Upload",
    description: "Take a photo of your chips packet, and upload it in seconds.",
  },
  {
    icon: <img src={aiChipCountImg} alt="AI Chip Count" className="w-full h-full object-cover rounded-2xl" />,
    title: "AI Chip Count",
    description: "See how many chips you actually got (or didn't).",
  },
  {
    icon: <Triangle size={48} strokeWidth={1} className="text-gray-400" />,
    title: "Get Trolled.",
    description: "Our bot roasts your count—whether you're lucky or chip-less.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-500 max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};