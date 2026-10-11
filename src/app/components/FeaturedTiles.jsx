import TilesCard from "@/components/TilesCard";
import React from "react";

const FeaturedTiles = async () => {
  const res = await fetch(
    "https://home-tiles-dukan-fvxj.vercel.app/data.json"
  );

  const tiles = await res.json();
  const topTiles = tiles.slice(0, 4);

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Featured Tiles
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
            Explore our handpicked collection of premium and stylish tiles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topTiles.map((product) => (
            <TilesCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedTiles;