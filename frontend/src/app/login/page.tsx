"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Redirect } from "next";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setEngine } from "crypto";

export default function LoginPage() {
  const { data: session,status } = useSession();
  const router=useRouter();
  useEffect(()=>{
    if(status=="authenticated"){
      router.push("/");
    }
  },[session,router]);
  if(status === "loading" || status === "authenticated"){
    return null;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      
          <h1 className="mb-4">Welcome to Daily Dine</h1>
          
          <button
            className="btn btn-danger px-4 py-2"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
    </div>
    
  );
}
