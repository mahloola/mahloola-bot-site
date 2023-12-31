"use client"; // make this a client component so I'm able to use React hooks
import Image from "next/image";
import styles from "./page.module.css";
import ShoppingCart from "./components/shoppingCart";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Statistics from "./components/statistics";
// Ctrl+Alt+F to format
// Ctrl+/ to add comment
// TODO: Get a new mouse

export default function Home() {
  return (
    <>
      <PayPalScriptProvider options={{ clientId: "test" }}>
        {/* Landing Page Section */}
        <section className="bg-white dark:bg-zinc-950 min-h-screen flex flex-col justify-center font-light">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-6 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center items-center">
            <div className="lg:col-span-7 text-center lg:text-left lg:pl-16">
              <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Your next card could be <strong>mrekk.</strong>
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                A Discord bot for claiming and trading osu! player cards.
              </p>
              <a
                href="https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D674498529489846272%26permissions%3D8%26scope%3Dbot"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Invite Bot
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://discord.com/invite/DGdzyapHkW"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Discord Server
              </a>
              <br />
              
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:block mx-auto">
              <Image
                src="/images/cards.png"
                width={1000}
                height={1000}
                alt="Cards"
              />
            </div>
          </div>
          <Statistics />
        </section>

        {/* SVG WAVES */}
        <svg
          className="bg-transparent absolute bottom-0 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(24 24 27)"
            fillOpacity="1"
            d="M0,64L48,101.3C96,139,192,213,288,234.7C384,256,480,224,576,229.3C672,235,768,277,864,298.7C960,320,1056,320,1152,314.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="bg-transparent absolute pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(24 24 27)"
            fillOpacity="1"
            d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,58.7C672,75,768,85,864,106.7C960,128,1056,160,1152,149.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Commands */}
        <section className="bg-white dark:bg-zinc-950 min-h-screen flex justify-center relative">
          <div className="absolute flex justify-between flex-col h-full w-full">
            {/* SVG WAVES 2 */}
            <svg
              className="bg-transparent pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="rgb(24 24 27)"
                fillOpacity="1"
                d="M0,32L80,26.7C160,21,320,11,480,26.7C640,43,800,85,960,90.7C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
            <svg
              className="bg-transparent pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="rgb(24 24 27)"
                fillOpacity="1"
                d="M0,192L60,208C120,224,240,256,360,261.3C480,267,600,245,720,245.3C840,245,960,267,1080,245.3C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center items-center font-light">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:block mx-auto">
              <Image
                src="/images/mahloolabot.gif"
                width={1000}
                height={1000}
                alt="Demo Gif"
                className="mr-4 rounded-xl"
              />
            </div>
            <div className="lg:col-span-7 text-center lg:text-left lg:pl-16">
              <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Commands
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Try them out yourself, or contribute through GitHub.
            </p>
              <a
                href="https://github.com/mahloola/mahloola-bot"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Code Source
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <svg
          className="bg-transparent absolute pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(24 24 27)"
            fillOpacity="1"
            d="M0,32L80,26.7C160,21,320,11,480,26.7C640,43,800,85,960,90.7C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <ShoppingCart />
      </PayPalScriptProvider>
    </>
  );
}
