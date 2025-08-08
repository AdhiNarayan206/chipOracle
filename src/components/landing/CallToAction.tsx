import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section id="upload" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Upload. Predict. Laugh.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Share your chip count, challenge friends, and see who gets roasted the hardest.
        </p>
        <div className="mt-8">
          <Button size="lg" className="rounded-full bg-black text-white hover:bg-gray-800 px-8 h-12 text-base">
            Upload Now
          </Button>
        </div>
      </div>
    </section>
  );
};