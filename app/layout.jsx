import '@styles/globals.css'

import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Provider from '@components/Provider';

export const metadata = {
    title: "RC Marketplace App",
    description: "Connecting buyers and sellers of businesses and websites"
}

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
        <body className="m-0 p-0">
            <Provider>
                <div className="main bg-indigo-950">
                    {/* <div className="gradient"/> */}
                </div>
                
                <main className="app">
                    <Nav />
                    {children}
                    
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout