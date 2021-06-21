import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "public/global.css"

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
}

export default MyApp
