"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const CallToAction = () => {
  const [flavour, setFlavour] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flavour || !weight) {
      toast.error("Please fill out both flavour and weight!");
      return;
    }
    // For now, we'll just show a success message.
    toast.success(`Submitted: ${flavour} flavour, ${weight}g`);
    console.log({ flavour, weight });
  };

  return (
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
              />
            </div>
          </div>
          <Button type="submit" size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto">
            Predict Now
          </Button>
        </form>
      </div>
    </section>
  );
};