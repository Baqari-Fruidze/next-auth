// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
import { Iuser } from "./user";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Iuser;
  }
}
