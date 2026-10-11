const Marquee = () => {
  const items = [
    "New Arrivals: Ceramic Blue Tile",
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community",
    "Premium Quality Tiles",
    "Fast & Safe Delivery",
  ];

  return (
    <section className="mt-5 w-full overflow-hidden bg-pink-600 py-3 sm:mt-6 sm:py-4">
      <div className="flex w-max animate-marquee">

        {/* First Set */}
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center"
            >
              <span
                className="
                  mx-3
                  whitespace-nowrap
                  text-[11px]
                  font-semibold
                  tracking-wide
                  text-white
                  sm:mx-5
                  sm:text-sm
                  md:mx-7
                  md:text-base
                "
              >
                {item}
              </span>

              <span className="shrink-0 text-sm text-white/70 sm:text-lg md:text-xl">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate Set */}
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex shrink-0 items-center"
            >
              <span
                className="
                  mx-3
                  whitespace-nowrap
                  text-[11px]
                  font-semibold
                  tracking-wide
                  text-white
                  sm:mx-5
                  sm:text-sm
                  md:mx-7
                  md:text-base
                "
              >
                {item}
              </span>

              <span className="shrink-0 text-sm text-white/70 sm:text-lg md:text-xl">
                ✦
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Marquee;