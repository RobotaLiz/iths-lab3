import './globals.css';
import Header from './components/Header';
import { CartProvider } from './context/CartProvider';

export const metadata = {
  title: 'Webbshop',
  description: 'En enkel webbshop',
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}