import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Fotbar from "../components/fotbar";
import Homepage from "../components/homepage";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-[100vw] h-[500vh] bg-white flex flex-col relative">
      <div className="hidden z-[3]">
        <Navbar />
      </div>
      <div className="w-[100%] h-[10vh] z-[2] fixed bg-gray-700 opacity-[.5]" />
      <Homepage />
      <Fotbar />
    </div>
  );
}
