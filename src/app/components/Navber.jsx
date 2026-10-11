"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navber = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = (path) =>
    `rounded-lg px-3 py-2 transition-all duration-200 ${
      pathname === path
        ? "bg-pink-500 text-white shadow-sm"
        : "text-gray-700 hover:bg-pink-50 hover:text-pink-500"
    }`;

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Tiles Gallery logo"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />

            <h3 className="text-base font-black sm:text-lg">
              Tiles Gallery
            </h3>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 text-sm font-semibold md:flex">
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-tiles"
              className={navLinkClass("/all-tiles")}
            >
              All Tiles
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={navLinkClass("/profile")}
            >
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop User */}
        <div className="hidden items-center gap-3 md:flex">
          {!user ? (
            <Link
              href="/auth/login"
              className={navLinkClass("/auth/login")}
            >
              Log In
            </Link>
          ) : (
            <>
              <Avatar className="h-9 w-9">
                <Avatar.Image
                  alt={user?.name || "User"}
                  referrerPolicy="no-referrer"
                  src={user?.image}
                />

                <Avatar.Fallback>
                  {user?.name?.[0]?.toUpperCase()}
                </Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleLogOut}
                variant="danger"
                className="rounded-lg"
              >
                Log Out
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-xl text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2">

            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className={navLinkClass("/")}
            >
              Home
            </Link>

            {/* All Tiles */}
            <Link
              href="/all-tiles"
              onClick={closeMenu}
              className={navLinkClass("/all-tiles")}
            >
              All Tiles
            </Link>

            {/* Profile */}
            <Link
              href="/profile"
              onClick={closeMenu}
              className={navLinkClass("/profile")}
            >
              My Profile
            </Link>

            {/* Login */}
            {!user && (
              <Link
                href="/auth/login"
                onClick={closeMenu}
                className={navLinkClass("/auth/login")}
              >
                Log In
              </Link>
            )}

            {/* User info */}
            {user && (
              <div className="mt-2 flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar className="h-9 w-9 shrink-0">
                    <Avatar.Image
                      alt={user?.name || "User"}
                      referrerPolicy="no-referrer"
                      src={user?.image}
                    />

                    <Avatar.Fallback>
                      {user?.name?.[0]?.toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar>

                  <span className="truncate text-sm font-semibold text-gray-700">
                    {user?.name}
                  </span>
                </div>

                <Button
                  onClick={handleLogOut}
                  variant="danger"
                  className="shrink-0 rounded-lg"
                >
                  Log Out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navber;