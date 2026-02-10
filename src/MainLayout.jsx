import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout() {
  let location = useLocation();

  let height =  location.pathname == '/home' || location.pathname == '/about' ? "804" : location.pathname == '/' || location.pathname == '/register' || location.pathname == '/forget-password' || location.pathname == '/add-code' || location.pathname == '/reset-password'? "338" : '120';

  return (
    <div className="w-full bg-[#F5F5F5]">
      <Header vh={height} />
      <Outlet />
      <Footer />
    </div>
  );
}
