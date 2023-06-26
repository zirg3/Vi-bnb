import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/NavBar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToastifyProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'

export const metadata = {
  title: 'Vi BnB',
  description: 'Travel with Vi',
}
const font = Nunito({ subsets: ['latin', 'cyrillic'] })

export default async function RootLayout({ children } : {children: React.ReactNode}) {

  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <RentModal />
        <LoginModal />
        <Navbar currentUser={currentUser}/>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
