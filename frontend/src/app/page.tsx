import Image from "next/image";
import Message from "../components/message";
import NavBar from "@/components/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Message></Message>
      </div>
  );
}
