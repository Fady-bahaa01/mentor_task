import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
