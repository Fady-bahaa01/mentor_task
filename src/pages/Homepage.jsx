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
      <div className="w-full max-w-[536px] absolute -top-[436px] left-[452px]">
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

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[407px] flex justify-center items-center">
        <OurPowerPoints />
      </div>

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[795px] bg-[#3B2F4A] flex justify-center items-center">
        <div className="w-full h-[555px] flex flex-col items-center gap-20">
          <div className="w-[516px] h-[87px] flex flex-col items-center gap-2">
            <h2 className="font-open font-bold text-[26px] text-white">
              Best Seller
            </h2>
            <p className="font-open font-normal text-[16px] text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="w-full h-[260px] ">
            <img src={slide} alt="" className="w-full" />
          </div>
          <button className="w-[180px] h-[48px] rounded-lg bg-[#D9176C] flex items-center justify-center font-open font-semibold text-[18px] text-white">
            Shop now
          </button>
        </div>
      </div>

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[659px] flex justify-center items-center">
        <div className="w-[1320px] h-[419px]">
          <h2 className="font-open font-bold text-[26px] text-[#222222]">
            Recomended For You
          </h2>
          {/*------------------------------------------------------------------*/}
          <Recomented />
          {/*------------------------------------------------------------------*/}
        </div>
      </div>

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[706px] border border-t border-[#222222]/20 flex flex-col gap-[72px] items-center justify-center pl-15 pr-30 py-30">
        <div className="w-[1260px] h-[95px] flex justify-between">
          <div className="w-[516px] h-full">
            <h2 className="font-open font-bold text-[26px] text-[#222222]">
              Flash Sale
            </h2>
            <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <img src={timer} alt="" className="w-36.25 h-36.25" />
        </div>
        <div className="w-full h-[299px] flex justify-center items-center">
          <div className="w-[1016px] h-full ">
            <Swiper />
          </div>
        </div>
      </div>
    </div>
  );
}
