"use client";
import { main } from "framer-motion/client";
import { useParams } from "next/navigation";

const UserProfile = () => {
  const params = useParams();

  return (
    <main className="w-full min-h-screen bg-neutral-950">
      <div className="min-h-screen flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-generalRegular text-white">Profile</h1>
        <hr />
        <p className="font-generalRegular text-3xl space-x-1">
          <span className="text-white">Profile Page</span>
          <span className="bg-orange-500 p-2 rounded font-generalSemiBold text-black">
            {params.id}
          </span>
        </p>
      </div>
    </main>
  );
};

export default UserProfile;
