"use client";

import { authClient } from "@/app/lib/auth-client";
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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";

export default function SignIn() {
  const router = useRouter();
  const session = authClient.useSession();

  useEffect(() => {
    if (session.data?.user) {
      router.replace("/profile");
    }
  }, [router, session.data?.user]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      const message = "Please enter both email and password.";
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: "/profile",
      });

      if (error) {
        const message = error.message || "Invalid email or password.";
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      toast.success("Login successful! Redirecting to your profile...");
      router.push("/profile");
    } catch {
      const message = "Login failed. Please check your email and password.";
      setErrorMessage(message);
      toast.error(message);
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
        callbackURL: "/profile",
      });
    } catch {
      const message = "Google sign in failed. Please try again.";
      setErrorMessage(message);
      toast.error(message);
      setGoogleLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ email: "", password: "" });
    setErrorMessage("");
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 px-4 py-8 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-xl border border-pink-100 bg-white/90 px-4 py-8 shadow-xl shadow-pink-100/40 backdrop-blur-sm sm:px-8 sm:py-10">
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Welcome back
          </p>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Log In</h1>
        </div>

        <Form
          className="mx-auto flex w-full max-w-md flex-col gap-4"
          onSubmit={onSubmit}
        >
          {errorMessage && (
            <div className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          <TextField
            isRequired
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(event) => updateField("password", event.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-pink-600 hover:underline"
                aria-pressed={showPassword}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <Description>Must be at least 8 characters</Description>
            <FieldError />
          </TextField>

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
              type="button"
              variant="secondary"
              onPress={handleReset}
            >
              Reset
            </Button>
          </div>
        </Form>

        <p className="mt-6 text-center text-sm font-semibold text-slate-600 sm:text-base">
          Don’t Have An Account?{" "}
          <Link href="/auth/register" className="font-bold text-pink-500 hover:underline">
            Register
          </Link>
        </p>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-sm font-semibold text-gray-500">or</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <div className="mx-auto w-full max-w-md">
          <Button
            onPress={handleGoogleSignIn}
            variant="outline"
            className="w-full"
            isDisabled={googleLoading}
          >
            <BsGoogle />
            {googleLoading ? "Connecting..." : "Sign in with Google"}
          </Button>
        </div>
      </Card>
    </div>
  );
}