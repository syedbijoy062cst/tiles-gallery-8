import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";

const TilesDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://home-tiles-dukan-fvxj.vercel.app/data.json"
  );

  const tiles = await res.json();

  const tile = tiles.find((t) => t.id == id);

  if (!tile) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <h2 className="text-xl font-bold text-gray-500">
          Tile not found
        </h2>
      </div>
    );
  }

  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-base-100 shadow-lg md:flex-row">

        <div className="relative h-[280px] w-full sm:h-[350px] md:h-[450px] md:w-1/2">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

      
        <div className="flex w-full flex-col justify-center p-5 sm:p-7 md:w-1/2 md:p-8 lg:p-10">

          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {tile.title}
          </h1>

          
          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            {tile.description}
          </p>

        
          <div className="mt-5 space-y-3 text-sm sm:text-base">

            <p>
              <span className="font-semibold">Dimensions:</span>{" "}
              {tile.dimensions}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Category:</span>

              <Button
                size="sm"
                variant="secondary"
                className="text-pink-500"
              >
                {tile.category}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Material:</span>

              <Button
                size="sm"
                className="bg-pink-500 text-white"
                variant="primary"
              >
                {tile.material}
              </Button>
            </div>

          </div>

   
          <div className="mt-6 border-t border-gray-200 pt-5">
            <p className="text-lg sm:text-xl">
              <span className="font-bold">Price:</span>{" "}
              <span className="font-semibold text-pink-600">
                ${tile.price}
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TilesDetails;