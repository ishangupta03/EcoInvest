import Head from "next/head";
import React, { useState } from "react";
import DiabloAccordion from "../components/diabloAccordion";
import { accordionData } from "./api/FAQdata";

function Faq() {
  const [data] = useState(accordionData);
  return (
    <>
      <Head>
        <title>
          FAQs | EcoVibe
        </title>
        <meta name="description" content="FAQs of Team Green Campus Chapters" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />
      </Head>
      <section className="flex flex-col items-center md:mb-10">
      
          <h1 className="text-primary_green-0 font-[Montserrat Alternates] text-4xl ml-5 mr-5 md:text-5xl text-center font-bold mb-5">
            Frequently Asked Questions (FAQs)
          </h1>
        
        <div className="md:gap-1 w-11/12 flex wrap justify-center flex-col md:flex-row mb-10">
        <h1 className=" font-[Montserrat Alternates] text-3xl ml-5 mt-20 mr-5 md:text-5xl text-center font-bold mb-5">
            COMING SOON !
          </h1>
        </div>
      </section>
    </>
  );
}

export default Faq;
