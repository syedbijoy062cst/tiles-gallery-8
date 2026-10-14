import { NextResponse } from "next/server";
import { AuthConfigurationError, getAuth } from "./app/lib/auth";

export async function proxy(request) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    if (error instanceof AuthConfigurationError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    throw error;
  }
}

export const config = {
  matcher: ["/profile", "/all-tiles/:path"],
};
