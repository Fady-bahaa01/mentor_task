import { Mic, Search } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OurPowerPoints from "../components/Cards/OurPowerPoints";
import slide from "../assets/Slider.png";
import Recomented from "../components/Cards/Recomented";
import timer from "../assets/Group 1000003321.png";

import RatingStars from "../components/Cards/RatingStars";
import { GrCart } from "react-icons/gr";
import SwiperCard from "../components/Cards/SwiperCard";
import Swiper from "../components/Cards/Swiper";

export default function Homepage() {
  const nav = useNavigate();

  // useEffect(() => {
  //   let token =
  //     localStorage.getItem("token") || sessionStorage.getItem("token");
  // }, []);
  return (
    <div className="w-full h-full relative">
      {/* Search Box */}
      <div className="w-full max-w-[536px] absolute top-[-436px] left-[50%] transform -translate-x-1/2 md:top-[-400px] md:left-1/2 lg:top-[-436px] -lg:left-[452px]">
        <div className="flex items-center rounded-full border border-gray-300 overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="px-3 text-gray-400 hover:text-gray-600">
            <Mic size={20} />
          </button>
          <button className="bg-pink-600 h-full px-4 py-3 text-white hover:bg-pink-700">
            <Search size={22} />
          </button>
        </div>
      </div>

      {/* Our Power Points */}
      <div className="w-full lg:h-[407px] flex justify-center items-center md:h-[689px] h-[890px]">
        <OurPowerPoints />
      </div>

      <div className="w-full bg-[#3B2F4A] flex justify-center items-center py-10 md:py-16">
        <div className="w-full max-w-[516px] flex flex-col items-center gap-6 px-4 md:px-0">
          <div className="w-full flex flex-col items-center gap-2">
            <h2 className="font-open font-bold text-[26px] text-white text-center">
              Best Seller
            </h2>
            <p className="font-open font-normal text-[16px] text-white/50 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>

          <div className="w-full h-[260px] sm:h-[200px] xs:h-[150px]">
            <img
              src={slide}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <button className="w-[180px] h-[48px] rounded-lg bg-[#D9176C] flex items-center justify-center font-open font-semibold text-[18px] text-white hover:bg-pink-700 mt-4">
            Shop now
          </button>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="w-full flex justify-center items-center py-10">
        <div className="w-full max-w-[1320px] px-4">
          <h2 className="font-open font-bold text-[26px] text-[#222222] text-center md:text-left">
            Recommended For You
          </h2>
          <Recomented />
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="w-full border-t border-[#222222]/20 flex flex-col gap-16 items-center justify-center px-4 py-10 md:gap-20">
        <div className="w-full max-w-[1260px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="w-full md:w-[516px]">
            <h2 className="font-open font-bold text-[26px] text-[#222222]">
              Flash Sale
            </h2>
            <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <img
            src={timer}
            alt=""
            className="w-36 h-36 md:w-36 md:h-36 object-contain"
          />
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full max-w-[1016px]">
            <Swiper />
          </div>
        </div>
      </div>
    </div>
  );
}
