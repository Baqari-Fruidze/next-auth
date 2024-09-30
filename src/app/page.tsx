// "use client";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(options); ///// server side
  // const { data: session } = useSession();
  console.log(session?.user);
  return (
    <div>
      <h1>loged in</h1>
      <p>name:{session?.user?.name}</p>
      <p>{session?.user.email}</p>
      {/* <Image src={session?.user?.image || ""} alt="" width={100} height={100} /> */}
    </div>
  );
}
