import { Link } from "react-router-dom";
import photo from "../assets/5176119115_f157862569_o1.png";
import { PiBookBookmark } from "react-icons/pi";

export default function Header() {
  return (
    <div
      className="w-full h-84.5"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
        backgroundPosition: `center`,
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
                <Link className="font-open font-semibold text-[18px] text-white hover:text-[#EAA451]">
                  Home
                </Link>
                <Link className="font-open font-semibold text-[18px] text-white hover:text-[#EAA451]">
                  Books
                </Link>
                <Link className="font-open font-semibold text-[18px] text-white hover:text-[#EAA451]">
                  About us
                </Link>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
