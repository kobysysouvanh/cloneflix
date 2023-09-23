"use client"

import { Toaster } from "react-hot-toast"

export default function ToasterProvider () {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: "#27272b",
                    color: "white"
                }
            }}
        />
    )
}