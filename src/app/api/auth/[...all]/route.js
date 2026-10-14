import { AuthConfigurationError, getAuth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

function createHandler(method) {
  return async (request) => {
    try {
      return await toNextJsHandler(getAuth())[method](request);
    } catch (error) {
      if (error instanceof AuthConfigurationError) {
        const message =
          "Authentication is not configured yet. Add MONGODB_URI and BETTER_AUTH_SECRET to .env.local and restart the app.";

        if (method === "GET") {
          return Response.json({ user: null, session: null, error: message }, { status: 200 });
        }

        return Response.json({ error: message }, { status: 503 });
      }

      throw error;
    }
  };
}

export const GET = createHandler("GET");
export const POST = createHandler("POST");