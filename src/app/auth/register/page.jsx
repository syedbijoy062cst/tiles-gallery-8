"use client";

import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";

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

import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        image,
        password,
        email,
      });

      console.log({ data, error });

      if (error) {
        const message =
          error.message || "Registration failed. Please try again.";

        setErrorMessage(message);
        toast.error(message);
        return;
      }

      toast.success("Registration successful! 🎉");

      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    } catch (error) {
      console.error(error);

      setErrorMessage("Something went wrong. Please try again.");
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setErrorMessage("");
      setGoogleLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage("Google sign up failed. Please try again.");
      toast.error("Google sign up failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-xl border px-4 py-8 sm:px-8 sm:py-10">
        
        {/* Title */}
        <h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Register
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

          {/* Name */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField isRequired name="image" type="text" className="w-full">
            <Label>Image URL</Label>
            <Input placeholder="Enter image URL" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
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

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
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
              {loading ? "Creating Account..." : "Submit"}
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

          {/* Login Link */}
          <div className="w-full pt-2">
            <p className="text-center text-sm font-semibold sm:text-base">
              You are already registered?{" "}
              <Link
                href="/auth/login"
                className="font-bold text-pink-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </Form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-sm font-semibold text-gray-500">or</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Google */}
        <div className="mx-auto w-full max-w-md">
          <Button
            onPress={handleGoogleSignUp}
            variant="outline"
            className="w-full"
            isDisabled={googleLoading}
          >
            <BsGoogle />

            {googleLoading
              ? "Connecting..."
              : "Sign up with Google"}
          </Button>
        </div>
      </Card>
    </div>
  );
}