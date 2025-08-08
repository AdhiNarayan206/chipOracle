import { Square, Circle, Triangle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="text-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-600">
          Upload a packet, get trolled.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Count Your Lays.
        </h2>
        <div className="mt-12 mx-auto max-w-3xl h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="flex items-center gap-8 text-gray-300">
            <Square size={64} strokeWidth={1} />
            <Circle size={64} strokeWidth={1} />
            <Triangle size={64} strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
};