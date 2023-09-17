"use client";

import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useCallback } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  


  

  const login = async () => {

    const signInResponse = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl:"/",
      redirect: false
    })

    if (signInResponse && !signInResponse.error) {
        router.push("/")
    }
    else {
      console.log("Error: ", signInResponse)
      setError("Email or Password is incorrect.")
    }
  };



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
                onChange={(e: any) => setEmail(e.target.value)}
                label="Email"
                id="email"
                type="email"
                value={email}
              />
              <Input
                onChange={(e: any) => setPassword(e.target.value)}
                label="Password"
                id="password"
                type="password"
                value={password}
              />
            </div>
            {error !== "" && (
              <h1 className="text-red-600 pt-3">{error}</h1>
            )}
            <button
              onClick={login}
              className="bg-red-600 font-semibold py-3 mt-8 rounded-md text-white w-full"
            >
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
