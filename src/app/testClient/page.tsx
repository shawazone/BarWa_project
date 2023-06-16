"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"




export default  function Home() {

  const { data: session, status } = useSession({
    required: true,
  });

  if(status === "loading") {
    return <></>
  }

  return (
    <div className="flex h-screen items-center justify-center">
    

    <button className="bg-red-700" onClick={() => signOut()}>Sign out</button>
    </div>
  );
}