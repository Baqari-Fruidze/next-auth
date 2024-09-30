import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

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
  callbacks: {
    async jwt({ token, user, profile, trigger, session }) {
      if (trigger === "update") {
        token.name = session.name;
      }
      if (profile) {
        return { ...token, ...profile };
      } else {
        return { ...token, ...user };
      }
    },

    async session({ token, session }) {
      session.user = token as {
        id: number;
        name: string;
        password: string;
        email: string;
        age: number;
      };
      return session;
    },
  },
  pages: {
    signIn: "/sign-In",
  },
};
