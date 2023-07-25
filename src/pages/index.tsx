import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextAnimation from "@/components/TextAnimation";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { data } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const size = useWindowSize();
  return (
    <>
      <Head>
        <title>Porto.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="top" className={`font-Poppins min-h- text-slate-50 bg-slate-900`}>
        <Navbar />
        <div className=" mx-auto bg-fixed -mt-16 bg-slate-900">
          <div className="px-4  mx-auto container">
            <TextAnimation />
            <div className="">
              {/* <Image alt="" src={'/IMG_1770.JPG'} width={500} height={500} /> */}
            </div>
          </div>
          <div id="porto" className="bg-slate-900  min-h-screen">
            <h2 className="text-4xl text-center pt-28">My Project</h2>
            <div className="relative flex justify-center mx-4 ">
              <div id="slider" className=" w-full overflow-x-scroll  flex  py-4 scroll-smooth">
                {data.map((value, index) => (

              <Card title={value.title} class="mx-4 first:ml-0 first:pl-0  last:mr-0 last:pl-0" key={index} image={value.image}>
                <p className="">
                  {value.desc}
                </p>
              </Card>
                ))}
              
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
