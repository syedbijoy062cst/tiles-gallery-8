"use client";

import { Avatar, Card } from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import React from "react";
import { UpdateUserModal } from "@/app/components/UpdateUserModel";

const ProfilePage = () => {
  const userData = authClient.useSession();

  const user = userData.data?.user;

  console.log(user);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-xl border p-6 sm:p-8">
        
        {/* Profile Image */}
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

          {/* User Name */}
          <h2 className="mt-4 break-words text-center text-xl font-bold sm:text-2xl">
            {user?.name}
          </h2>

          {/* Email */}
          <p className="mt-1 max-w-full break-all text-center text-sm text-gray-500 sm:text-base">
            {user?.email}
          </p>

          {/* Update Button / Modal */}
          <div className="mt-6 w-full sm:w-auto">
            <UpdateUserModal />
          </div>
        </div>

      </Card>
    </div>
  );
};

export default ProfilePage; 