import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="flex gap-8 bg-orange-300">
        <Link href={"api/auth/signin"}>sign in</Link>
        <Link href={"/"}> home</Link>
        <Link href={"api/auth/signout"}> sigh out</Link>
        <Link href={"/about"}> about</Link>
      </nav>
    </div>
  );
}
