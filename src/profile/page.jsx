"use client";

import { Avatar, Card } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UpdateUserModal } from "@/app/components/UpdateUserModel";

const ProfilePage = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  useEffect(() => {
    if (!userData.isPending && !user) {
      router.replace("/auth/login");
    }
  }, [userData.isPending, user, router]);

  if (userData.isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-sm text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (userData.error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <Card className="w-full max-w-lg border border-red-100 bg-red-50 p-6 text-center text-red-700">
          Authentication is not configured yet. Add your MongoDB connection string and auth secret to .env.local, then restart the app.
        </Card>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-xl border border-pink-100 bg-white p-6 shadow-lg shadow-pink-100/40 sm:p-8">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
            <Avatar.Image
              alt={user?.name || "User"}
              referrerPolicy="no-referrer"
              src={user?.image}
            />

            <Avatar.Fallback>
              {user?.name?.[0]?.toUpperCase()}
            </Avatar.Fallback>
          </Avatar>

          <h2 className="mt-4 break-words text-center text-xl font-bold text-slate-900 sm:text-2xl">
            {user?.name || "User"}
          </h2>

          <p className="mt-1 max-w-full break-all text-center text-sm text-gray-500 sm:text-base">
            {user?.email || "No email available"}
          </p>

          <div className="mt-5 grid w-full gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-slate-800">Account</p>
              <p>{user?.emailVerified ? "Verified" : "Pending verification"}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Status</p>
              <p>Active</p>
            </div>
          </div>

          <div className="mt-6 w-full sm:w-auto">
            <UpdateUserModal />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;