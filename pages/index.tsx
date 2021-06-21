import { SunIcon, MoonIcon } from "@heroicons/react/outline"
import React, { useEffect, useLayoutEffect, useState } from "react"
import Script from "next/script"
import Head from "next/head"

export default function Home() {
   const [darkmode, setDarkmode] = useState<boolean>(false)
   const [theme, setTheme] =
      useState<"system" | "dark" | "light" | undefined>(undefined)

   useEffect(() => {
      const dark = document.documentElement.classList.item(0) === "dark"
      const them = window.localStorage.getItem("theme") as
         | "system"
         | "dark"
         | "light"
      setDarkmode(dark)
      setTheme(them)
      console.log("Darkmode:", dark)
      console.log("Theme:", them)
   }, [])

   function toggleTheme() {
      if (darkmode) {
         document.documentElement.classList.remove("dark")
         window.localStorage.setItem("theme", "light")
         setDarkmode(false)
         setTheme("light")
      } else {
         document.documentElement.classList.add("dark")
         window.localStorage.setItem("theme", "dark")
         setDarkmode(true)
         setTheme("dark")
      }
   }

   return (
      <>
         <Head>
            <title>Jonathan Ekberg</title>
            <meta
               name="description"
               content="The official website of Jonathan Ekberg."
            />
            <meta
               name="keywords"
               content="jonathan ekberg, jonathan ekberg website, jonathan website, ekberg website, website"
            />
         </Head>
         <main className="grid w-full min-h-screen place-items-center">
            <button
               onClick={toggleTheme}
               className="fixed top-0 right-0 z-50 p-4 focus:outline-none"
            >
               {darkmode ? (
                  <SunIcon className="w-10 h-10 dark:text-gray-200" />
               ) : (
                  <MoonIcon className="w-10 h-10 dark:text-gray-200" />
               )}
            </button>
            <h1 id="name" className="font-black select-none">
               Jonathan Ekberg
               <style jsx>{`
                  #name {
                     font-size: 10vw;
                     background: -webkit-linear-gradient(
                        ${darkmode
                           ? "rgb(255, 255, 255), rgb(160, 160, 160)"
                           : "rgb(96, 96, 96), rgb(0, 0, 0)"}
                     );
                     -webkit-background-clip: text;
                     -webkit-text-fill-color: transparent;
                  }
               `}</style>
            </h1>
         </main>
      </>
   )
}

{
   /* 0deg,
rgb(255, 0, 0),
rgb(255, 255, 0),
rgb(0, 255, 0),
rgb(0, 255, 255),
rgb(0, 0, 255),
rgb(255, 0, 255) */
}
