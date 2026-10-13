export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
        For questions about the tile collection or your account, contact our
        support team.
      </p>
      <address className="mt-8 space-y-3 text-sm not-italic leading-6 text-gray-700 sm:text-base">
        <p>Sylhet, Bangladesh</p>
        <p>+880 1XXX-XXXXXX</p>
        <p>
          <a
            href="mailto:support@tilesgallery.com"
            className="font-semibold text-pink-600 hover:text-pink-700"
          >
            support@tilesgallery.com
          </a>
        </p>
      </address>
    </main>
  );
}