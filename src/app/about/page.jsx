import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        About Tiles Gallery
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
        Tiles Gallery brings together tile designs for different rooms and
        styles. Browse the collection to compare materials, dimensions,
        availability, and listed prices.
      </p>
      <Link
        href="/all-tiles"
        className="mt-8 inline-flex rounded-md bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
      >
        Browse tiles
      </Link>
    </main>
  );
}