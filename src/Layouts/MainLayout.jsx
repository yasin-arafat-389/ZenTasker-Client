import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
