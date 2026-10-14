import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ product }) => {
  return (
    <div className="card w-full min-w-0 bg-base-100 p-3 shadow-xl sm:p-4">

      {/* Image */}
      <figure className="w-full overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
          className="h-52 w-full rounded-xl object-cover sm:h-56 md:h-60 lg:h-56"
        />
      </figure>

      {/* Content */}
      <div className="card-body px-1 py-4 sm:px-2">

        {/* Title + Material */}
        <div className="flex flex-wrap items-start gap-2">
          <h2 className="min-w-0 flex-1 break-words text-lg font-bold sm:text-xl">
            {product.title}
          </h2>

          <div className="badge badge-secondary shrink-0 px-2 py-1 text-xs sm:text-sm">
            {product.material}
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500 sm:text-base">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="badge badge-outline px-3 py-2 font-bold">
            Price: ${product.price}
          </div>

          <Link
            href={`/all-tiles/${product.id}`}
            className="inline-flex w-full items-center justify-center rounded-2xl border border-pink-600 bg-pink-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-pink-700 sm:w-auto"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default TilesCard;