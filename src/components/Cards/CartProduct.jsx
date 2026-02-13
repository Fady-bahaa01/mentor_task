import { HiOutlineTrash } from "react-icons/hi";
import photo from "../../assets/81ZLwAwD-ML 4.png";
import car from "../../assets/shipping-fast 1.png";

export default function CartProduct() {
  return (
    <div className="w-full h-[301px] flex items-center justify-center gap-6.25 bg-white">
      <div className="w-[535px] h-[253px] flex gap-6">
        <img src={photo} alt="" className="w-[173px] h-full" />
        <div className="w-[338px] h-full ">
          <h2 className="font-open font-bold text-[#222222] text-[18px]">
            Rich Dad And Poor Dad
          </h2>
          <p className="font-open font-normal text-[#222222]/50 text-[14px] mt-1">
            Author:{" "}
            <span className="text-[#222222]">Robert T. Kiyosanki</span>{" "}
          </p>
          <p className="w-[251px] font-open font-normal text-[#222222]/50 text-[14px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut,
          </p>
          <div className="w-[138px] h-[35px] rounded-lg bg-white border border-[#222222]/20 flex justify-center items-center gap-2 mt-[35px]">
            <img src={car} alt="" className="w-4 h-4" />
            <p className="font-open font-normal text-[#222222]/50 text-[14px]">
              Free Shipping
            </p>
          </div>
          <p className="font-open font-bold text-[#222222]/50 text-[14px] mt-8">
            ASIN : <span className="font-normal">B09TWSRMCB</span>{" "}
          </p>
        </div>
      </div>
      <div className="w-[655px] h-[41px] flex justify-center items-center gap-[147px]">
        <div className="w-[86px] h-[33px] flex items-center justify-center gap-4">
          <button className="w-5 h-5 border border-[#D9176C] rounded-full text-[#D9176C] flex justify-center items-center font-open font-semibold text-[14px]">
            -
          </button>
          <p className="font-open font-semibold text-[24px] text-[#222222]">
            1
          </p>
          <button className="w-5 h-5 border border-[#D9176C] rounded-full text-[#D9176C] flex justify-center items-center font-open font-semibold text-[14px]">
            +
          </button>
        </div>
        <p className="font-open font-semibold text-[30px] text-black">$40</p>
        <p className="font-open font-semibold text-[30px] text-black">$40</p>
        <HiOutlineTrash size={24} className="text-[#D9176C]/50" />
      </div>
    </div>
  );
}
