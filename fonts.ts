import {
  Aboreto,
  Geist,
  Geist_Mono,
  Noto_Serif_Display,
} from "next/font/google";

export const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  display: "swap",
  subsets: ["latin"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
