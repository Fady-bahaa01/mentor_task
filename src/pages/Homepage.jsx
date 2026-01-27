import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const nav = useNavigate();

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      nav("login");
    }
  }, []);
  return (
    <div>
      <p className="text-black">Home page </p>
    </div>
  );
}
