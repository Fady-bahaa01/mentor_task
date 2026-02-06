import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout() {
  let location = useLocation();

  let height = !location.pathname == "/" ? "804" : "338";

  return (
    <div className="w-full bg-[#F5F5F5]">
      <Header vh={height} />
      <Outlet />
      <Footer />
    </div>
  );
}
