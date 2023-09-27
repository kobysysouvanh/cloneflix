"use client";

import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import axios from "axios"
import Image from "next/image";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        password
      })

      router.push("/login")
    } catch (error) {
      console.log(error)
      setError("Email is taken.")
    }
  }, [email, password, router])

  return (
    <div className="relative h-full w-full bg-[url('/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-8 py-4">
        <Image src="/logo.png" alt="logo" height={100} width={180} className="object-contain" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 md:w-2/5 md:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">Sign Up</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Email"
                id="email"
                onChange={(event: any) => setEmail(event.target.value)}
                type="email"
                value={email}
              />
              {error && (
                <h1 className="text-red-600">Email is taken.</h1>
              )}
              <Input
                label="Password"
                id="password"
                onChange={(event: any) => setPassword(event.target.value)}
                type="password"
                value={password}
              />
            </div>
            <button 
            onClick={register}
            className="bg-red-600 font-semibold py-3 mt-8 rounded-md text-white w-full">
              Create Account
            </button>
            <div className="flex mt-12">
              <p className="text-zinc-500 ">Already have an account?</p>
              <p
                className="text-white pl-1 cursor-pointer hover:underline"
                onClick={() => router.push("/login")}
              >
                Login
              </p>
              <p className="text-zinc-500 ">.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
