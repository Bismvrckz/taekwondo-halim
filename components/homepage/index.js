import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Homepage() {
  return (
    <div className="flex flex-col w-[100%] mt-[10vh]">
      <div className="w-[100%]">
        <Image
          src={"/taekwondo-logo.jpeg"}
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
      <div className="w-[100%] flex flex-col justify-center px-[3vw]">
        <p className="text-[1.5rem] font-[700] text-cyan-500">Profile</p>
        <p className="text-[1.5rem] font-[700]">
          Taekwondo Kaboet Halim <br /> Berasal Dari Jakarta Timur <br />
          Tepatnya Di Halim Perdana Kusuma
        </p>
        <p>Pusat latihan kaboet halim</p>
        <Button colorScheme={"linkedin"} className="w-[100%]" size={"lg"}>
          Pelajari lebih lanjut
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
