"use client";

import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-8 py-4">
          <img src="/logo.png" alt="logo" className="h-14" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 md:w-2/5 md:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Email"
                id="email"
                onChange={(event: any) => setEmail(event.target.value)}
                type="email"
                value={email}
              />
              <Input
                label="Password"
                id="password"
                onChange={(event: any) => setPassword(event.target.value)}
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 font-semibold py-3 mt-8 rounded-md text-white w-full">
              Sign In
            </button>
            <div className="flex mt-12">
              <p className="text-zinc-500 ">New to Cloneflix?</p>
              <p
                className="text-white pl-1 cursor-pointer hover:underline"
                onClick={() => router.push("/signup")}
              >
                Sign up now
              </p>
              <p className="text-zinc-500 ">.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
