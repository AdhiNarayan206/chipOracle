"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const CallToAction = () => {
  const [flavour, setFlavour] = useState("");
  const [weight, setWeight] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flavour || !weight) {
      toast.error("Please fill out both flavour and weight!");
      return;
    }

    setIsLoading(true);

    // Simulate a delay for the backend call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate a "backend" response. Let's make it fun.
    const chipCount = Math.floor(Math.random() * 50) + 5; // Random number between 5 and 54

    setPrediction(chipCount);
    setIsLoading(false);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section id="predict" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Predict. Discover. Share.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Find out how many chips are likely in your pack—powered by AI. Share results with friends and see whose snack is packed fuller
          </p>
          <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="flavour">Flavour</Label>
                <Input
                  id="flavour"
                  type="text"
                  placeholder="e.g., Salt & Vinegar"
                  value={flavour}
                  onChange={(e) => setFlavour(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="weight">Weight (grams)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 150"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-8 h-12 text-base w-full sm:w-auto"
              disabled={isLoading}
            >
              {isLoading ? "Predicting..." : "Predict Now"}
            </Button>
          </form>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-primary">
              Your Chip Oracle Result
            </DialogTitle>
            <DialogDescription>
              The AI has spoken! Here's the (totally serious) chip count for
              your pack.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-sm text-gray-500">
              For your {weight}g pack of {flavour} chips...
            </p>
            <p className="text-7xl font-bold my-4">{prediction}</p>
            <p className="text-lg text-gray-600">chips inside!</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};