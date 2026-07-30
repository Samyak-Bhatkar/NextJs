import { Gloock } from 'next/font/google';
import "./globals.css";

import Main from '@/components/Main';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const gloock = Gloock({

  subsets: ["latin"],
  weight: '400',
  display:'swap'
});



export  const metadata = {
  title: "Chitrapat - Underrated Movie Discovery Platform",
  description: "We help you to find the best movie tailoured to your taste that are avialable on youtube for free. We search movie for you so you don't need to do that.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className={`${gloock.className}  h-screen antialiased  flex flex-col `}>
        <Header/>
      <Main >{children}</Main>
      <Footer/>

      </body>
    </html>
  );
}
