"use client";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { error } from "console";

const UserProfile = () => {
  const params = useParams();
  const router = useRouter();

  const LogOut = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/Login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <section className="relative w-full min-h-[100vh] flex items-center flex-col bg-neutral-950 space-y-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2 mt-10">
        {/* <h1 className="text-xl font-generalRegular text-white">Profile</h1> */}
        <hr />
        <p className="font-generalRegular text-3xl space-x-1">
          <span className="text-white">Profile Page</span>
          <span className="bg-orange-500 p-2 rounded font-generalSemiBold text-black">
            {params.id}
          </span>
        </p>
      </div>

      <div className="relative w-80 rounded-md flex items-center justify-center profile overflow-hidden">
        <img src="/vr.png" className="w-80 object-cover" alt="" />
        <ProgressiveBlur
          direction="bottom"
          blurLayers={1.5}
          blurIntensity={20}
          className="absolute inset-0"
        />
        <div className="absolute bottom-10 left-0 p-2">
          <h2 className="font-gilRegular text-white text-xl">_xo.manish.rya</h2>
          <p className="mt-2 text-justify font-generalExtraLight text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas
            voluptatibus dignissimos iusto.
          </p>
        </div>
        <button className="absolute right-0 bottom-1 m-1.5 flex items-center justify-center px-2 py-1 bg-slate-200 rounded-sm">
          <Plus className="text-black mt-0.5" size={12} />
          <span className="text-black text-[0.65rem] font-gilMedium">
            Watch
          </span>
        </button>
      </div>
      <div className="absolute right-5 top-5 log-out">
        <button
          onClick={LogOut}
          className="bg-slate-200 cursor-pointer font-gilMedium text-sm px-2 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
