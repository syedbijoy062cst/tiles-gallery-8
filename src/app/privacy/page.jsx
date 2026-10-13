export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-gray-600">
        <p>
          Tiles Gallery uses account information to provide sign-in, profile,
          and account-management features. This may include your name, email
          address, and optional profile image.
        </p>
        <p>
          If you choose Google sign-in, Google provides the account details
          needed to authenticate you. Account records are managed by the
          application&apos;s authentication service and database.
        </p>
        <p>
          For questions about your account information, contact
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