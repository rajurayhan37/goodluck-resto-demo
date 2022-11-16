import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <div className="font-poppins bg-[#FFF5EC]">
      <header className="px-3 lg:px-16 shadow-md fixed w-full top-0 backdrop-blur-xl z-[100]">
        <Navigation />
      </header>
      <main className="px-2 pt-16">{children}</main>
      <footer className="mt-8 px-16">
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
