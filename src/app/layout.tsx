import { ReactNode } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <body>
      <Header />
      <div className="page-container">
      <Navbar/>
      <main>{children}</main>
      <Footer />
      </div>
      </body>
    </html>
  );
};

export default Layout;
