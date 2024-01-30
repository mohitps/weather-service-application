// components
import Menu from "../components/Menu.js";
import Footer from "../components/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;