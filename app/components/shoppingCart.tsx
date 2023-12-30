"use client"; // make this a client component so I'm able to use React hooks
import Image from "next/image";
import styles from "../page.module.css";
import React from "react";
import Subscribe from "./subscribe";
// Ctrl+Alt+F to format
// Ctrl+/ to add comment
// TODO: Get a new mouse

export default function ShoppingCart() {
  const [box1Counter, setBox1Counter] = React.useState(0);
  const [box2Counter, setBox2Counter] = React.useState(0);

  function decrementBox1() {
    box1Counter > 0 ? setBox1Counter(box1Counter - 1) : 0;
  }
  function incrementBox1() {
    setBox1Counter(box1Counter + 1);
  }
  function decrementBox2() {
    box2Counter > 0 ? setBox2Counter(box2Counter - 1) : 0;
  }
  function incrementBox2() {
    setBox2Counter(box2Counter + 1);
  }
  return (
    <>
      {/* Shopping Cart Section */}
      <section className="pt-16 bg-white dark:bg-zinc-950 min-h-screen flex justify-center">
        <div className="bg-white dark:bg-zinc-950 w-full py-8">
          <div className="container mx-auto px-4">
            <h1
              className={`max-w-2xl mb-12 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ${styles.slogan}`}
            >
              Donate
            </h1>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                For $1.99 a month
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                • 12 rolls instead of 10 per hour<br/>
                • Add 3 new users to the database per week<br/>
                • Pin up to 15 players instead of 10
              </p>
            </div>
            <Subscribe />
            {/* <div className="flex flex-col md:flex-row gap-4 relative">
              <div className="md:w-3/4">
                <div className="bg-zinc-300 dark:bg-zinc-900 rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <tbody>                       */}
            {/* Lootbox (30 Cards) */}
            {/* <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <Image
                              width={100}
                              height={100}
                              className="h-32 w-48 mr-10"
                              src="/images/cards.png"
                              alt="cards"
                            />
                            <span className="text-xl">Lootbox (30 Cards)</span>
                          </div>
                        </td>

                        <td className="py-4">$9.99</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={decrementBox1}
                              className="border rounded-md py-2 px-4 mr-2"
                            >
                              -
                            </button>
                            <span className="text-center w-8">
                              {box1Counter}
                            </span>
                            <button
                              onClick={incrementBox1}
                              className="border rounded-md py-2 px-4 ml-2"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-center w-16">
                          ${Math.round(box1Counter * 999) / 100}
                        </td>
                      </tr>
                      <hr className="text-center mt-8 mb-8" /> */}
            {/* Lootbox (100 Cards) */}
            {/* <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <Image
                              width={100}
                              height={100}
                              className="h-32 w-48 mr-10"
                              src="/images/cards.png"
                              alt="cards"
                            />
                            <span className="text-xl">Lootbox (100 Cards)</span>
                          </div>
                        </td>

                        <td className="py-4">$19.99</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={decrementBox2}
                              className="border rounded-md py-2 px-4 mr-2"
                            >
                              -
                            </button>
                            <span className="text-center w-8">
                              {box2Counter}
                            </span>
                            <button
                              onClick={incrementBox2}
                              className="border rounded-md py-2 px-4 ml-2"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-center w-16">
                          ${Math.round(box2Counter * 1999) / 100}
                        </td>
                      </tr> */}
            {/* </tbody>
                  </table>
                </div>
              </div>
              <div className="md:w-1/4 relative">
                <div className="bg-zinc-300 dark:bg-zinc-900 rounded-lg shadow-md p-6">
                  <h1 className="text-lg font-semibold mb-4">Summary</h1>
                  <div className="flex justify-between mb-2">
                    <span>{box1Counter * 30 + box2Counter * 100} cards</span>
                    <span>
                      $
                      {Math.round(box1Counter * 999 + box2Counter * 1999) / 100}
                    </span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      $
                      {Math.round(
                          box1Counter * 999 +
                          box2Counter * 1999
                      ) / 100}
                    </span>
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
