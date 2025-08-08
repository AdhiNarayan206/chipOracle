export const Hero = () => {
  return (
    <section className="text-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-600">
          Upload a packet, get trolled.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-primary">
          Count Your Chips.
        </h2>
        <div className="mt-12 mx-auto max-w-3xl h-auto bg-secondary rounded-2xl flex items-center justify-center overflow-hidden">
          <img src="/hero-image.jpg" alt="Lays Chip Counter" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};