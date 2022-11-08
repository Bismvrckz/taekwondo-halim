import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className="w-[100%] h-[10vh] flex items-center justify-center fixed text-white">
      <Tabs
        className="z-[3]"
        size={"lg"}
        variant={"soft-rounded"}
        colorScheme="linkedin"
      >
        <TabList>
          <Tab textColor={"white"}>Home</Tab>
          <Tab textColor={"white"}>Album</Tab>
          <Tab textColor={"white"}>Sejarah</Tab>
          <Tab textColor={"white"}>Prestasi</Tab>
          <Tab textColor={"white"}>Dojang</Tab>
          <Tab textColor={"white"}>Contact</Tab>
          <Tab color={"blue.200"}>
            <a href="https://forms.gle/icccaiyrs9FYRVgH7" target={"_blank"}>
              Join yuk
            </a>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default Navbar;
