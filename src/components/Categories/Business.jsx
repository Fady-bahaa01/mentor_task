import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import RatingStars from "../Cards/RatingStars";
import photo from "../../assets/81ZLwAwD-ML 4.png";
import ProductCard from "../Cards/ProductCard";

export default function Business() {
  return (
    <div className="w-full h-full mt-10">
      <div className="container w-[881px] h-[1117px]">
        <div className=" w-full h-[885px] flex flex-col gap-15">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        {/* api is not working so i made pagination design only */}
        <div className="w-full flex justify-center items-center mt-[160px]">
          <div className="w-[380px] h-10 flex justify-center items-center gap-4">
            <p className="cursor-pointer font-open font-semibold text-[16px] text-[#D9176C] hover:bg-[#D9176C]/50">
              {"< Previous"}
            </p>
            <div className="flex gap-3">
              \
              <button className="w-10 h-10 rounded-lg flex justify-center items-center bg-white hover:bg-[#D9176C] font-open font-semibold text-[16px] text-[#D9176C] hover:text-white">
                1
              </button>
              <button className="w-10 h-10 rounded-lg flex justify-center items-center bg-white hover:bg-[#D9176C] font-open font-semibold text-[16px] text-[#D9176C] hover:text-white">
                2
              </button>
              <button className="w-10 h-10 rounded-lg flex justify-center items-center bg-white hover:bg-[#D9176C] font-open font-semibold text-[16px] text-[#D9176C] hover:text-white">
                3
              </button>
              <button className="w-10 h-10 rounded-lg flex justify-center items-center bg-white hover:bg-[#D9176C] font-open font-semibold text-[16px] text-[#D9176C] hover:text-white">
                ....
              </button>
            </div>
            <p className="cursor-pointer font-open font-semibold text-[16px] text-[#D9176C] hover:bg-[#D9176C]/50">
              {" Next >"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
