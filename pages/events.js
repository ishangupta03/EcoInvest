import Head from "next/head";
import { InstagramEmbed } from 'react-social-media-embed';
function info() {
  return (
    <div>
      <Head>
        <title>
        Events
        </title>
        <meta name="description" content="Past Events - TGCC" />
        <link
          rel="icon"
          href="./TG_Logo_White.png"
        />
      </Head>
      <div className="container transition-colors mx-auto mt-8 mb-0 md:mb-12 p-2 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="items-center justify-center">
          <div className="text-center text-2xl">
            <p className="text-[#2B4257] text-4xl center font_heading font-bold mb-10">
              Past Events
            </p>
          </div>
        </div>

          
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-4 justify-items-center">
              <InstagramEmbed url="https://www.instagram.com/p/C3-wyKHMIAe" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/C2sYJALhxTw" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/C2koaUKIWql" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/C1MggLiPP9-" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/C1B6HxIPR-9" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/CzOTE4qPCiz" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/CyP-2GmMOQq" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/CyzlSuAoKjI" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/CtOnIAmo5sG" width={328} className="mx-auto"/>
              <InstagramEmbed url="https://www.instagram.com/p/CtJhY0fPbXN" width={328} className="mx-auto"/>
            </div>

          </div>
       
        </div>
  );
}

export default info;
