import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="w-[100vw] h-[500vh] bg-white flex flex-col relative">
      <div className="z-[3]">
        <Navbar />
      </div>
      <div className="w-[100%] h-[10vh] blur-x z-[2] fixed bg-gray-700 opacity-[.5]" />
      <div className="flex w-[100%] mt-[10vh]">
        <div className="w-[40%]">
          <Image
            src={"/taekwondo-logo.jpeg"}
            width={1}
            height={1}
            layout="responsive"
          />
        </div>
        <div className="w-[60%] flex flex-col justify-center pl-[3vw]">
          <p className="text-[4rem] font-[700] text-cyan-500">Profile</p>
          <p className="text-[3rem] font-[700]">
            Taekwondo Kaboet Halim <br /> Berasal Dari Jakarta Timur <br />
            Tepatnya Di Halim Perdana Kusuma
          </p>
          <p>Pusat latihan kaboet halim</p>
          <Button colorScheme={"linkedin"} className="w-[40%]" size={"lg"}>
            Pelajari lebih lanjut
          </Button>
        </div>
      </div>
      <div className="flex w-[100%]">
        <div className="w-[20%] flex flex-col pt-[10vh]">
          <p className="text-[3rem] font-[700] text-cyan-500 leading-[4rem]">
            TAEKWONDO KABOET HALIM
          </p>
          <p className="text-[5em] font-[700] text-black leading-[4rem] my-[3vh]">
            FOTO BARENG
          </p>
          <p>
            Foto kenaikan Sabuk 9 Januari 2022 bersama Dojang Taman Jati Makmur,
            SMA ANGKASA 2, dan Privat Latihan
          </p>
        </div>
        <div className="w-[80%]">
          <Image
            src={"/fotbar-1.jpeg"}
            width={8}
            height={4}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
