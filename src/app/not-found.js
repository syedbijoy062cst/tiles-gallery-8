
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br mt-5 from-slate-50 via-white to-blue-50 px-6">
      <div className="text-center max-w-xl">

        {/* 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none tracking-tight text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-7">
          Oops! The page you are looking for doesn&apos;t exist or
          may have been moved to another location.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Small Text */}
        <p className="mt-8 text-sm text-gray-400">
          Don&apos;t worry, you can always go back home.
        </p>
      </div>
    </div>
  );
}
