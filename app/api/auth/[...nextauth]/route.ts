import prismadb from "@/lib/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { compare } from "bcrypt"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server"


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {label: "email", type:"text"},
        password: {label: "password", type:"password"},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required.")
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.hashedPassword || null) {
          throw new NextResponse("Email does not exist", { status: 400 })
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword)

        if (!isCorrectPassword) {
          throw new NextResponse("Password incorrect.", { status: 400 })
        }

        return user
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
