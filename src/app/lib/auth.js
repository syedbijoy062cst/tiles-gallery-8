import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const runtimeCache = globalThis;

export class AuthConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthConfigurationError";
  }
}

export function getAuth() {
  const mongoUri = process.env.MONGODB_URI;
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!mongoUri) {
    throw new AuthConfigurationError(
      "Authentication is not configured: MONGODB_URI is missing."
    );
  }

  if (!secret || secret.length < 32) {
    throw new AuthConfigurationError(
      "Authentication is not configured: BETTER_AUTH_SECRET must be at least 32 characters."
    );
  }

  if (!runtimeCache.tilesGalleryAuth) {
    const client =
      runtimeCache.tilesGalleryMongoClient ||
      new MongoClient(mongoUri, { maxPoolSize: 10 });
    runtimeCache.tilesGalleryMongoClient = client;

    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (Boolean(googleClientId) !== Boolean(googleClientSecret)) {
      throw new AuthConfigurationError(
        "Authentication is not configured: set both GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET, or leave both unset."
      );
    }

    runtimeCache.tilesGalleryAuth = betterAuth({
      baseURL: process.env.BETTER_AUTH_URL,
      secret,
      database: mongodbAdapter(client.db("tiles-gallery"), { client }),
      emailAndPassword: {
        enabled: true,
      },
      socialProviders: googleClientId
        ? {
            google: {
              clientId: googleClientId,
              clientSecret: googleClientSecret,
              prompt: "select_account",
            },
          }
        : {},
      account: {
        accountLinking: {
          enabled: true,
          trustedProviders: ["google"],
        },
      },
    });
  }

  return runtimeCache.tilesGalleryAuth;
}