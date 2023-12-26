import Footer from './components/ui/footer';
// import EthWalletWrapper from './connections/EthWalletWrapper';
// import WalletWrapper from './connections/WalletWrapper';
import './global.css';
import { Navbar } from './components/ui/navbar';
import localFont from 'next/font/local';
// import Provider from './contexts/clientProvider';
// import { SessionProvider } from "next-auth/react"


import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata = {
  title: 'Welcome to looty.fi',
  description: 'Mint your own Looty NFTs. Open the box and get rewarded.',
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
      <head>
        <meta property="og:image" content="https://ik.imagekit.io/nqz2h82e3/Homepage%201.png?updatedAt=1703452393465" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap" rel="stylesheet" /> */}
      {/* <WalletWrapper> */}
      {/* <EthWalletWrapper> */}
      <body className='relative flex flex-col h-full'>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id=
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
        ) : null}
        <Navbar />
        {children}
        <Footer />
        {/* </Provider> */}
        {/* </SessionProvider> */}
      </body>
      {/* </EthWalletWrapper> */}
      {/* </WalletWrapper> */}
    </html>
  );
}
