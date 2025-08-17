"use client";
import "../styles/message.css"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Message(){
  const {data:session}=useSession();
 let Name=session?.user?.name;
 if(Name){}else{Name="Gang"}
 
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center text-center">
      
      <h1 className="display-4 fw-bold">
        
        
        Hello {Name||"Gang"}
        
      </h1><h1>
        The future of restaurant is here
      </h1>
      <p className="lead mt-3">
        Why use <span className="brand-text">Daily Dine</span>?
      </p>
    </section>
  );


}