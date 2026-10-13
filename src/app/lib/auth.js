import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error(
    "Missing MONGODB_URI. Add your MongoDB connection string to .env.local and restart the Next.js server."
  );
}

const client = new MongoClient(mongoUri);
const db = client.db("tiles-gallery");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),

   emailAndPassword: { 
    enabled: true, 
  },

  socialProviders : {
    google : {
          clientId: process.env.GOOGLE_CLIENT_ID ,
          clientSecret:  process.env.GOOGLE_CLIENT_SECRET,
          prompt: "select_account",
    }
  },
    account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },


});