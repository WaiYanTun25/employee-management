import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const option: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        Credentials({
           name: "Credentials",
           credentials: {
               username: { label: "Username", type: "text", placeholder: "UserName" },
               password: {  label: "Password", type: "password" }
           },
           authorize: async (credentials) => {
               const user = { id: "1", name: "Dave", password: "nextauth" };
           
               if (credentials?.username === user.name && credentials?.password === user.password) {
                   return user;
               } else {
                   return null;
               }
           }
        }),
    ],
}