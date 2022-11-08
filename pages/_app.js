import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Taekwondo Kaboet Halim</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Taekwondo Halim" />
        <link rel="icon" href="/taekwondo-logo.jpeg" />
      </Head>
      <div className="font-[poppins]">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
