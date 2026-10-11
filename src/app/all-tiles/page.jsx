import SearchTiles from "@/components/SearchTiles";
import React from "react";

const AllTiles = async () => {
  const res = await fetch(
    "https://home-tiles-dukan-fvxj.vercel.app/data.json"
  );

  const tiles = await res.json();

  console.log(tiles);

  return (
    <div className="my-10">
      <SearchTiles tiles={tiles} />
    </div>
  );
};

export default AllTiles;