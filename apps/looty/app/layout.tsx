import Navbar from './components/navbar/layout';
import EthWalletWrapper from './connections/EthWalletWrapper';
// import WalletWrapper from './connections/WalletWrapper';
import './global.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Welcome to looty',
  description: 'Generated by create-nx-workspace',
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
    <html lang="en" className={adlamFont.className} style={{
      fontFamily: openSans.style.fontFamily,
    }}>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap" rel="stylesheet" /> */}
      {/* <WalletWrapper> */}
      <EthWalletWrapper>
        <body>
          <Navbar />
          {children}
        </body>
      </EthWalletWrapper>
      {/* </WalletWrapper> */}
    </html>
  );
}
