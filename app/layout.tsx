import Header  from "@/components/header";
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({  subsets: ['latin'] })

export const metadata = {
  title: 'Salomé Gallego A | Personal Portfolio ',
  description: 'Salomé is a Full-Stack developer with +4 years of experience.',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className='bg-lime-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full
        blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-yellow-100 absolute top-[-1rem] -z-10 left-[-35 rem] h-[31.25rem] w-[50rem] rounded-full
        blur-[10rem] sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <LanguageProvider>
          <ActiveSectionContextProvider> 
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
