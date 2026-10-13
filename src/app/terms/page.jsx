export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-gray-600">
        <p>
          Tiles Gallery provides an online catalogue for browsing tile
          products. Product descriptions, dimensions, prices, and availability
          are provided for reference and may change.
        </p>
        <p>
          You are responsible for keeping your account credentials secure and
          using the site lawfully. Do not attempt to disrupt the service or
          access another person&apos;s account.
        </p>
        <p>
          For questions about these terms or a listed product, contact
          <a
            href="mailto:support@tilesgallery.com"
            className="ml-1 font-semibold text-pink-600 hover:text-pink-700"
          >
            support@tilesgallery.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}