import { PiBookBookmark } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3B2F4A] text-white">
      <div className="max-w-[1320px] mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <PiBookBookmark className="w-8 h-8" />
              <p className="font-open text-[16px]">Bookshop</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 sm:gap-10">
              <Link
                to="/home"
                className="font-open font-semibold text-[16px] lg:text-[18px] hover:text-[#EAA451]"
              >
                Home
              </Link>
              <Link
                to="/book"
                className="font-open font-semibold text-[16px] lg:text-[18px] hover:text-[#EAA451]"
              >
                Books
              </Link>
              <Link
                to="/about"
                className="font-open font-semibold text-[16px] lg:text-[18px] hover:text-[#EAA451]"
              >
                About us
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <MdFacebook className="w-6 h-6 cursor-pointer hover:text-[#EAA451]" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#EAA451]" />
            <AiFillYoutube className="w-6 h-6 cursor-pointer hover:text-[#EAA451]" />
            <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-[#EAA451]" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-open text-[14px] text-center md:text-left">
            © 2024 EraaSoft - All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            <FaEarthAmericas className="w-6 h-6" />

            <select className="bg-transparent border border-white/30 text-white/70 px-3 py-1 rounded-md focus:outline-none">
              <option className="text-black">English</option>
              <option className="text-black">Arabic</option>
              <option className="text-black">French</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
