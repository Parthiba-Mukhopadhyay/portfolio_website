import './globals.css'
import { Ubuntu } from 'next/font/google'
const font = Ubuntu({ weight: ["300", "400", "500", "700"], subsets:['latin'] })


export const metadata = {
  title: 'Parthiba-portfolio',
  description: 'all that you need to know',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body> 
        
        <main className={font.className} >
        

        {children}
          
        </main>
      </body>
    </html>
  )
}
