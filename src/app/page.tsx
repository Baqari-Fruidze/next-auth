"use client";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";

export default function Home() {
  // const session = await getServerSession(options); ///// server side
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div>
      <h1>loged in</h1>
      <p>name:{session?.user?.name}</p>
      <img src={session?.user?.image} alt="" />
    </div>
  );
}
