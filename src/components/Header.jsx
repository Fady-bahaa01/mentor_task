import { Link, useLocation } from "react-router-dom";
import photo from "../assets/books.png";
import { PiBookBookmark } from "react-icons/pi";
import photo2 from "../assets/blackedOne.png";
import { FaRegHeart } from "react-icons/fa";
import prof from "../assets/Group 8.png";
import { useAuthStore } from "..";
import { useEffect } from "react";

export default function Header({ vh }) {
  const location = useLocation();
  const { authorized } = useAuthStore((state) => state.authorized);
  const { checkAuth } = useAuthStore((state) => state.checkAuth);

  const img =
    location.pathname == "/"
      ? photo
      : location.pathname == "/about"
        ? photo2
        : photo;

  useEffect(() => {
    () => checkAuth();
  }, [checkAuth]);

  return (
    <div
      className="w-full h-84.5"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        height: `${vh}px`,
      }}
    >
      <div className="w-full h-23 bg-white/20 flex justify-center items-center ">
        <div className="container max-w-290">
          <div className="parent w-full flex justify-between">
            <div className="w-full h-8 flex gap-6">
              <div className="flex items-center gap-3">
                <PiBookBookmark className="w-8 h-8" />
                <p className="font-open font-normal text-[16px] text-white">
                  Bookshop
                </p>
              </div>
              <div className="w-px h-7.5 bg-white/30  "></div>

              <div className="flex justify-center items-center gap-10">
                <Link
                  to={"/home"}
                  className="font-open font-semibold text-[18px] text-white hover:text-[#EAA451]"
                >
                  Home
                </Link>
                <Link
                  to={"/book"}
                  className="font-open font-semibold text-[18px] text-white hover:text-[#EAA451]"
                >
                  Books
                </Link>
                <Link
                  to={"/about"}
                  className="font-open font-semibold text-[18px] text-white hover:text-[#EAA451]"
                >
                  About us
                </Link>
              </div>
            </div>
            {authorized ? (
              <div className="w-[310px] h-10 flex gap-6">
                <FaRegHeart size={32} />
                <GrCart size={32} />
                <div className="w-[198px] h-full flex gap-2.5">
                  <img
                    src={prof}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="grow h-full">
                  <p className="font-open font-semibold text-[16px] text-white">
                    John Smith
                  </p>
                  <p className="font-open font-light text-[14px] text-white/50 mt-1">
                    Johnsmith@gmail.com
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-45.5 flex gap-3">
                <Link
                  to={"./"}
                  className="w-19.75 h-11 flex justify-center items-center rounded-lg bg-[#D9176C] font-open font-semibold text-[16px] text-white "
                >
                  Log in
                </Link>
                <Link
                  to={"/register"}
                  className="w-19.75 h-11 flex justify-center items-center rounded-lg bg-white font-open font-semibold text-[16px] text-[#D9176C] "
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
