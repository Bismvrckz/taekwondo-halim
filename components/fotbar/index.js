import Image from "next/image";
import React from "react";

function Fotbar() {
  return (
    <div className="flex flex-col-reverse mt-[5vh] w-[100%]">
      <div className="w-[100%] flex flex-col items-center px-[1vw]">
        <p className="text-[1.6rem] font-[700] text-cyan-500 leading-[2rem]">
          TAEKWONDO KABOET HALIM
        </p>
        <p className="text-[5rem] font-[700] text-black leading-[3.5rem]">
          FOTO BARENG
        </p>
        <p>
          Foto kenaikan Sabuk 9 Januari 2022 bersama Dojang Taman Jati Makmur,
          SMA ANGKASA 2, dan Privat Latihan
        </p>
      </div>
      <div className="w-[100%]">
        <Image
          src={"/fotbar-1.jpeg"}
          width={8}
          height={4}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default Fotbar;
