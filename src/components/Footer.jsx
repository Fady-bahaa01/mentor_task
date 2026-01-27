import { PiBookBookmark } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full h-92.5 bg-[#3B2F4A] flex justify-center items-center">
      <div className="container  mx-15">
        <div className="parent w-full flex justify-between">
          <div className="w-full flex gap-10">
            <div className="flex items-center gap-3">
              <PiBookBookmark className="w-8 h-8" />
              <p className="font-open font-normal text-[16px] text-white">
                Bookshop
              </p>
            </div>
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
          <div className="w-45.5 flex gap-6">
            <MdFacebook className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <AiFillYoutube className="w-6 h-6" />
            <FaXTwitter className="w-6 h-6" />
          </div>
        </div>
        <div className="w-full h-px bg-white/20 mt-4"></div>
        <div className="w-full h-7.25 flex justify-between mt-4">
          <div className="w-[384px] mb-2">
            <p className="font-open font-normal text-[14px] text-white">
              {"<Developed By> EraaSoft <All Copy Rights Reserved @2024"}
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <FaEarthAmericas className="w-6 h-6" />
            <details className="dropdown ">
              <summary className="btn m-1 bg-transparent rounded-lg w-32 border border-white/30 font-open text-white/50 gap-9.75">
                English <span className="text-[20px]">{">"}</span>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a>Arabic</a>
                </li>
                <li>
                  <a>French</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
