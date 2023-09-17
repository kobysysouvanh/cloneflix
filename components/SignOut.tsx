"use client"

import React from 'react'
import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <button className='bg-blue-400'
    onClick={() => signOut()}
    >Logout</button>
  )
}

export default SignOut