"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import "@/styles/profile.css"

export default function ProfilePage() {
  const { data: session, status } = useSession();

  // Show loader while checking session
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If not authenticated, redirect to login page
  if (status === "unauthenticated") {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <div className="card p-4" style={{ maxWidth: "400px" }}>
        <img
          src={session?.user?.image || "/default-profile.png"}
          alt="Profile"
          className="rounded-circle mb-3"
          width={100}
          height={100}
        />
        <h3>{session?.user?.name}</h3>
        <p>{session?.user?.email}</p>
        <div className="d-flex justify-content-between mt-3">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
