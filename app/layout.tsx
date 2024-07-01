
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/app/Footer'

export default function RootLayout({
  children,
}:{children:any} ) {
  return (
    <html lang="en">
      <body>
      
      <Navbar/>
        {children}
      
      </body>
    </html>
  )
}
