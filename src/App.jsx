import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./MainLayout";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/RegisterPage ";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <div className="w-full h-dvh bg-[#F5F5F5]">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="home" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
