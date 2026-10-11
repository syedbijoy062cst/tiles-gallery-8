import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f8f5f0]">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:grid lg:grid-cols-2">

        {/* Image */}
        <div className="relative order-1 h-[230px] w-full sm:h-[320px] md:h-[400px] lg:order-2 lg:h-[600px]">
          <Image
            src="/banner.png"
            alt="Premium tile collection"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="order-2 flex w-full items-center px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:order-1 lg:px-12 lg:py-20">
          <div className="w-full">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-pink-600 sm:text-sm sm:tracking-[3px]">
              Premium Tiles Collection
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Your{" "}
              <span className="text-pink-600">
                Perfect Aesthetic
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base md:text-lg">
              Transform your space with our premium collection of tiles.
              From modern minimalism to timeless classics, find the perfect
              tile for your dream space.
            </p>

            <Link
              href="/all-tiles"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-pink-700 sm:mt-8 sm:px-7 sm:py-3.5 sm:text-base"
            >
              Browse Now
              <span className="text-lg">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;