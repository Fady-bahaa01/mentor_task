import { GrCart } from "react-icons/gr";
import RatingStars from "./RatingStars";
import { GoHeart } from "react-icons/go";
import photo from "../../assets/81ZLwAwD-ML 4.png";
import photo2 from "../../assets/81ZLwAwD-ML 4 (1).png";

export default function Recomented() {
  return (
    <div className="w-full h-[344px] mt-10 flex  gap-6">
      <div className="w-[648px] h-full bg-white flex justify-center items-center ">
        <div className="w-[568px] h-[264px] flex gap-[39px]">
          <div className="w-[176px] h-full">
            <img src={photo} alt="" className="w-full h-full" />
          </div>
          <div className="w-[353px] h-full">
            <h2 className="font-open font-bold text-[18px] text-[#222222]">
              Rich Dad And Poor Dad
            </h2>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 mt-1">
              Author:{" "}
              <span className="text-[#222222]">Robert T. Kiyosanki</span>{" "}
            </p>
            <p className="h-[76px] font-open font-normal text-[14px] text-[#222222]/50 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
            </p>
            <div className="w-full h-[107px] mt-6">
              <div className="w-full h-[43px] flex justify-between">
                <div className="w-[177px] h-full">
                  <div className="w-full flex items-center gap-2">
                    <RatingStars />
                    <p className="font-open font-semibold text-[12px] text-[#222222]/50">
                      {"(180 Review)"}
                    </p>
                  </div>
                  <p className="font-open font-normal text-[14px] text-[#222222]/50 mt-2">
                    Rate: <span className="text-[#222222]">4.2</span>{" "}
                  </p>
                </div>
                <h3 className="font-open font-semibold text-[26px] text-[#222222]">
                  $30.00
                </h3>
              </div>
              <div className="w-full h-12 flex justify-between mt-4">
                <button className="w-[289px] h-full rounded-lg bg-[#D9176C] font-open font-semibold text-[16px] flex justify-center items-center gap-2.5">
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

      {/*------------------------------------------------------------------*/}
      {/*------------------------------------------------------------------*/}

      <div className="w-[648px] h-full bg-white flex justify-center items-center ">
        <div className="w-[568px] h-[264px] flex gap-[39px]">
          <div className="w-[176px] h-full">
            <img src={photo2} alt="" className="w-full h-full" />
          </div>
          <div className="w-[353px] h-full">
            <h2 className="font-open font-bold text-[18px] text-[#222222]">
              The Design Of Books
            </h2>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 mt-1">
              Author: <span className="text-[#222222]">Debbie Berne</span>{" "}
            </p>
            <p className="h-[76px] font-open font-normal text-[14px] text-[#222222]/50 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
            </p>
            <div className="w-full h-[107px] mt-6">
              <div className="w-full h-[43px] flex justify-between">
                <div className="w-[177px] h-full">
                  <div className="w-full flex items-center gap-2">
                    <RatingStars />
                    <p className="font-open font-semibold text-[12px] text-[#222222]/50">
                      {"(210 Review)"}
                    </p>
                  </div>
                  <p className="font-open font-normal text-[14px] text-[#222222]/50 mt-2">
                    Rate: <span className="text-[#222222]">4.2</span>{" "}
                  </p>
                </div>
                <h3 className="font-open font-semibold text-[26px] text-[#222222]">
                  $30.00
                </h3>
              </div>
              <div className="w-full h-12 flex justify-between mt-4">
                <button className="w-[289px] h-full rounded-lg bg-[#D9176C] font-open font-semibold text-[16px] flex justify-center items-center gap-2.5">
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
    </div>
  );
}
