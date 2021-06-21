import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext,
} from "next/document"

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render() {
      return (
         <Html>
            <Head>
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <script
                  async
                  dangerouslySetInnerHTML={{
                     __html: `try{const e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=window.localStorage.getItem("theme");t?"system"===t?e&&document.documentElement.classList.add("dark"):"dark"===t&&document.documentElement.classList.add("dark"):(window.localStorage.setItem("theme","system"),e&&document.documentElement.classList.add("dark"))}catch(e){}`,
                  }}
               />
               {/* <script
                  // async
                  dangerouslySetInnerHTML={{
                     __html: `
                  try {
                     const darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
                     const saved = window.localStorage.getItem("theme");
                     // console.log(darkmode);
                     // console.log(saved);

                     if (!saved) {
                        window.localStorage.setItem("theme", "system");
                        if (darkmode) {
                           document.documentElement.classList.add("dark");
                        }
                     } else {
                        if (saved === "system") {
                           if (darkmode) {
                              document.documentElement.classList.add("dark");
                           }
                        } else if (saved === "dark") {
                           document.documentElement.classList.add("dark");
                        }
                     }
                  } catch (e) {}
               `,
                  }}
               /> */}
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
