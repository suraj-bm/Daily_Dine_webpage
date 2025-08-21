"use client";
import Image from "next/image";
import Message from "../components/message";
import NavBar from "@/components/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from "@/components/features";
import { useState } from "react";


export default function Home() {
  const [activeTab,SetActiveTab]=useState("message");
  return (
    <div>
      <NavBar onTabChange={SetActiveTab}></NavBar>
      {activeTab==="message"&&<Message></Message>}
      {activeTab==="features"&&<Features></Features>}
      
      
      </div>
  );
}
