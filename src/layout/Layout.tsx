import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
