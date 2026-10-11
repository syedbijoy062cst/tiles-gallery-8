"use client";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      console.log({ data, error });

      if (error) {
        setErrorMessage(
          error.message || "Invalid email or password."
        );
        toast.error(error.message || "Invalid email or password.");
        return;
      }

      toast.success("Login successful! Welcome back 🎉");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Login failed. Please check your email and password."
      );

      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setErrorMessage("");
      setGoogleLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Google sign in failed. Please try again."
      );

      toast.error("Google sign in failed. Please try again.");

      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-xl border px-4 py-8 sm:px-8 sm:py-10">

        {/* Title */}
        <h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Log In
        </h1>

        {/* Form */}
        <Form
          className="mx-auto flex w-full max-w-md flex-col gap-4"
          onSubmit={onSubmit}
        >

          {/* Error Message */}
          {errorMessage && (
            <div className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value
                )
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Must be at least 8 characters
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button
              className="w-full bg-pink-500 text-white sm:w-auto"
              type="submit"
              isDisabled={loading}
            >
              {loading ? "Logging in..." : "Submit"}
            </Button>

            <Button
              className="w-full text-pink-500 sm:w-auto"
              type="reset"
              variant="secondary"
              onPress={() => setErrorMessage("")}
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Register */}
        <p className="mt-6 text-center text-sm font-semibold sm:text-base">
          Don’t Have An Account?{" "}
          <Link
            href="/auth/register"
            className="font-bold text-pink-500 hover:underline"
          >
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />

          <span className="text-sm font-semibold text-gray-500">
            or
          </span>

          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Google */}
        <div className="mx-auto w-full max-w-md">
          <Button
            onPress={handleGoogleSignIn}
            variant="outline"
            className="w-full"
            isDisabled={googleLoading}
          >
            <BsGoogle />

            {googleLoading
              ? "Connecting..."
              : "Sign in with Google"}
          </Button>
        </div>
      </Card>
    </div>
  );
}