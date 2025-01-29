import { Inter, Lora,  Geist, Geist_Mono  } from 'next/font/google'

const inter = Inter()
const lora = Lora()
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], });

export { inter, lora, geistSans, geistMono }