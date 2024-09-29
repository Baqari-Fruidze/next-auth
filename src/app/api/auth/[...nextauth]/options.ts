import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        console.log("hello");
        const user = {
          id: "1",
          name: "baqari",
          password: "baqari1234",
          email: "baqari@gmail.com",
          age: 32,
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-In",
  },
};
