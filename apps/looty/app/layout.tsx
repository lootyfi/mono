import Footer from './components/ui/footer';
// import EthWalletWrapper from './connections/EthWalletWrapper';
// import WalletWrapper from './connections/WalletWrapper';
import './global.css';
import { Navbar } from './components/ui/navbar';
import localFont from 'next/font/local';
// import Provider from './contexts/clientProvider';
// import { SessionProvider } from "next-auth/react"



export const metadata = {
  title: 'Welcome to looty',
  description: 'Mint your looty now!',
  image: '/images/looty.png',
};

const adlamFont = localFont({
  src: [
    {
      path: '../public/fonts/ADLaMDisplay-Regular.ttf',
      weight: '400',
    },
  ],
});

const openSans = localFont({
  src: [
    {
      path: '../public/fonts/OpenSans-VariableFont_wdth,wght.ttf',
      weight: '400',
    },
  ],
});

export default function RootLayout({
  children,
  // session,
}: {
  children: React.ReactNode;
  // session: any;
}) {

  return (
    <html lang="en" className={`${adlamFont.className} scroll-smooth`} style={{
      fontFamily: openSans.style.fontFamily,
    }}>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap" rel="stylesheet" /> */}
      {/* <WalletWrapper> */}
      {/* <EthWalletWrapper> */}
      <body className='relative flex flex-col h-full w-full'>
        {/* <Provider session={session}> */}
        <div className='min-h-screen'>
          <Navbar />
          {children}
        </div>
        <Footer />
        {/* </Provider> */}
        {/* </SessionProvider> */}
      </body>
      {/* </EthWalletWrapper> */}
      {/* </WalletWrapper> */}
    </html>
  );
}
