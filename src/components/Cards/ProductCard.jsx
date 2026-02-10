import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import RatingStars from "./RatingStars";
import photo from "../../assets/81ZLwAwD-ML 4.png";

export default function ProductCard() {
  return (
    <div className="w-full h-[255px] flex gap-[40px]">
      <div className="w-[176px] h-full">
        <img src={photo} alt="" className="w-full h-full" />
      </div>
      <div className="w-[668px] h-full">
        <div className="w-full h-[121px] flex gap-[35px]">
          <div className="w-[424px] h-full">
            <h2 className="font-open font-bold text-[18px] text-[#222222]">
              Rich Dad And Poor Dad
            </h2>

            <p className="h-[76px] font-open font-normal text-[14px] text-[#222222]/50 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
            </p>
          </div>
          <div className="w-[198px] h-[35px] bg-white rounded-lg border border-[#EBC305] flex justify-center items-center">
            <p className="font-open font-normal text-[14px] text-[#EBC305]">
              25% Discount code: Ne212
            </p>
          </div>
        </div>

        <div className="w-full h-[110px] mt-6">
          <div className="w-full h-[50px] flex justify-between">
            <div className="w-[177px] h-full">
              <div className="w-full flex items-center gap-2">
                <RatingStars />
                <p className="font-open font-semibold text-[12px] text-[#222222]/50">
                  {"(210 Review)"}
                </p>
              </div>
              <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-2">
                Rate: <span className="text-[#222222]">4.2</span>{" "}
              </p>
            </div>
            <h3 className="font-open font-semibold text-[26px] text-[#222222]">
              $40.00
            </h3>
          </div>
          <div className="w-full h-12 flex justify-between mt-4">
            <div className="w-[198px] h-[42px]">
              <div className="w-full flex justify-between">
                <p className="font-open font-normal text-[14px] text-[#222222]/50">
                  Author
                </p>
                <p className="font-open font-normal text-[14px] text-[#222222]/50">
                  Year
                </p>
              </div>
              <div className="w-full flex justify-between mt-1">
                <p className="font-open font-normal text-[14px] text-[#222222]">
                  Robert T. Kiyosaki
                </p>
                <p className="font-open font-normal text-[14px] text-[#222222]">
                  1997
                </p>
              </div>
            </div>
            <div className="w-[244px] h-12 flex gap-[16px]">
              <button className="w-[180px] h-full rounded-lg bg-[#D9176C] font-open font-semibold text-[16px] flex justify-center items-center gap-2.5">
                Add To Cart <GrCart />
              </button>
              <div className="w-12 h-12 rounded-lg border border-[#D9176C] flex justify-center items-center">
                <GoHeart size={20} className="text-[#D9176C]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
