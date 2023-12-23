import Footer from './components/ui/footer';
// import EthWalletWrapper from './connections/EthWalletWrapper';
// import WalletWrapper from './connections/WalletWrapper';
import './global.css';
import { Navbar } from './components/ui/navbar';
import localFont from 'next/font/local';



export const metadata = {
  title: 'Welcome to looty',
  description: 'Mint your looty now!',
  image: 'https://ik.imagekit.io/nqz2h82e3/Group%20266.png?updatedAt=1702045973913',
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
