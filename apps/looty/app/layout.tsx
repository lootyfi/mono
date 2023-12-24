import Footer from './components/ui/footer';
// import EthWalletWrapper from './connections/EthWalletWrapper';
// import WalletWrapper from './connections/WalletWrapper';
import './global.css';
import { Navbar } from './components/ui/navbar';
import localFont from 'next/font/local';

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
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${adlamFont.className} scroll-smooth`} style={{
      fontFamily: openSans.style.fontFamily,
    }}>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta name="twitter:image" content="<generated>" />
      <meta name="twitter:image:type" content="<generated>" />
      <meta name="twitter:image:width" content="<generated>" />
      <meta name="twitter:image:height" content="<generated>" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap" rel="stylesheet" /> */}
      {/* <WalletWrapper> */}
      {/* <EthWalletWrapper> */}
      <body className='relative flex flex-col h-full'>
        <Navbar />
        {children}
        <Footer />
      </body>
      {/* </EthWalletWrapper> */}
      {/* </WalletWrapper> */}
    </html>
  );
}
