"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import toast from "react-hot-toast";
import { div } from "framer-motion/client";

const Sign = () => {
  const navigate = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login successfull", response.data);
      toast.success("Login successfull");
      navigate.push("/Profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="form">
        <h1 className="font-generalSemiBold text-center text-3xl mb-10 text-white">
          {isLoading ? "Logging in..." : "Login"}
        </h1>
        <div className="flex flex-col gap-4">
          <div className="form-input flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-generalMedium text-white tracking-wider text-sm"
            >
              Email
            </label>
            <input
              id="email"
              value={user.email}
              type="text"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              className="border border-[rgba(255,255,255,0.2)] text-white font-generalRegular rounded-md px-2 py-2 w-80"
            />
          </div>

          <div className="form-input flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="font-generalMedium text-white tracking-wider text-sm"
            >
              Password
            </label>
            <input
              id="password"
              value={user.password}
              type="text"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              className="border border-[rgba(255,255,255,0.2)] text-white font-generalRegular rounded-md px-2 py-2 w-80"
            />
          </div>
        </div>

        <div className="btn flex">
          <button
            disabled={buttonDisabled || isLoading}
            onClick={onLogin}
            className={`inline-flex items-center gap-2 px-5 py-2 ml-auto mt-5 rounded-lg font-generalMedium text-black bg-slate-300 transition-all duration-200 hover:scale-105 active:scale-95 ${
              buttonDisabled || isLoading
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer hover:bg-slate-400"
            }`}
          >
            Login
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                <span className="font-generalMedium"> Logining up...</span>
              </>
            ) : (
              <div>Login</div>
            )}
          </button>
        </div>

        <div className="inline-flex">
          <div
            className="font-generalLight flex items-center justify-center gap-1 text-sm tracking-wider text-white cursor-pointer"
            onClick={() => navigate.push("/Signup")}
          >
            <span className="">
              <MoveLeft size={16} />
            </span>{" "}
            <span>Visit login page</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sign;
