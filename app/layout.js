import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const codeFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "DevCanvas | Practical frontend notes",
    template: "%s | DevCanvas",
  },
  description:
    "A responsive publishing dashboard for discovering and managing practical frontend articles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var r=document.documentElement;var t=localStorage.getItem('devcanvas-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}r.dataset.theme=t;r.style.colorScheme=t;r.dataset.demoSession=sessionStorage.getItem('devcanvas-demo-session')==='active'?'active':'inactive'}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${codeFont.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
