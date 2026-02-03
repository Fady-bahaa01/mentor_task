import { GrCart } from "react-icons/gr";
import RatingStars from "./RatingStars";
import photo from "../../assets/81ZLwAwD-ML 4.png";

export default function SwiperCard() {
  return (
    <div className="w-[424px] h-[294px] bg-[#3B2F4A] flex justify-center items-center ">
      <div className="w-[392px] h-[262px] flex gap-6">
        <img src={photo} alt="" className="w-[176px] h-full" />
        <div className="w-[192px] h-full">
          <h2 className="font-open font-bold text-[16px] text-white">
            Rich Dad And Poor Dad
          </h2>
          <p className="font-open font-normal text-[14px] text-white/50 mt-1">
            Author: <span className="text-white">Robert T. Kiyosanki</span>
          </p>
          <div className="w-full h-[36px] mt-4">
            <div className="w-full h-[16px] flex items-center gap-2">
              <RatingStars />
              <p className="font-open w-[73px] font-semibold text-[12px] text-white/50">
                {"(180 Review)"}
              </p>
            </div>
            <p className="font-open  font-normal text-[14px] text-white/50 mt-1">
              Rate: <span className="text-white">4.2</span>{" "}
            </p>
          </div>
          <div className="w-full h-[79px] mt-[17px] flex flex-col gap-4">
            <div className="w-[121px] h-[30px] flex items-center gap-2">
              <p className="font-open font-semibold text-[14px] text-white/30">
                $45.00
              </p>
              <p className="font-open font-semibold text-[22px] text-white">
                $30.00
              </p>
            </div>
            <div className="w-full h-[33px]">
              <div className="w-full h-[9px] bg-white/10 rounded-[20px]">
                <div className="w-[143px] h-full rounded-[20px] bg-[#EAA451]"></div>
              </div>
              <p className="font-open font-normal text-[12px] text-white/50 mt-2">
                4 books left
              </p>
            </div>
          </div>
          <div className="w-full h-[48px] flex justify-end mt-6">
            <div className="w-[53px] h-full rounded-lg flex justify-center items-center bg-[#D9176C]">
              <GrCart size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
