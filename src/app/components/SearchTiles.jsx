"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import TilesCard from "./TilesCard";

const SearchTiles = ({ tiles }) => {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="mx-auto mb-10 max-w-3xl px-4">
        <Input
          type="text"
          label="Search Tiles"
          placeholder="Search tiles by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="lg"
          variant="bordered"
          radius="lg"
          isClearable
          onClear={() => setSearch("")}
        />
      </div>

      {/* Tiles */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTiles.map((product) => (
          <TilesCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* No Result */}
      {filteredTiles.length === 0 && (
        <p className="py-10 text-center text-xl text-gray-500">
          No tiles found.
        </p>
      )}
    </div>
  );
};

export default SearchTiles;