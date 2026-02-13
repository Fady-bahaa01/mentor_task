import CartProduct from "../components/Cards/CartProduct";
import { Field, Form, Formik } from "formik";
import { FaArrowRight } from "react-icons/fa";
import { TfiTicket } from "react-icons/tfi";

export default function WishlistPage() {
  let inputStyle =
    "w-[284px] h-full rounded-lg border border-[#222222]/20 placeholder:font-open placeholder:font-normal placeholder:text-[16px] placeholder:text-[#222222]/50 placeholder:leading-6  font-open font-normal text-[16px] text-[#222222]";
  return (
    <div className="w-full h-[1681px] ">
      <div className="contaiber max-w-[1320px] mt-15 ml-[149px] mr-[270px] ">
        <div className="w-full h-[27px] flex items-center justify-center">
          <div className="w-[1022px] flex justify-between h-full">
            <p className="font-open font-semibold text-black text-[20px] ">
              Item
            </p>
            <div className="flex gap-[139px]">
              <p className="font-open font-semibold text-black text-[20px]">
                Quantity
              </p>
              <p className="font-open font-semibold text-black text-[20px]">
                Price
              </p>
              <p className="font-open font-semibold text-black text-[20px]">
                Total Price
              </p>
            </div>
          </div>
        </div>

        {/*----------------------------------------------------------------------*/}
        {/*----------------------------------------------------------------------*/}

        <div className="w-full h-[642px] flex flex-col gap-2 mt-10 ">
          <CartProduct />
          <CartProduct />
        </div>

        {/*----------------------------------------------------------------------*/}
        {/*----------------------------------------------------------------------*/}

        <div className="w-full h-[50px] flex justify-center items-center">
          <div className="w-[482px] h-full flex gap-4">
            <button className="w-[146px] h-full rounded-lg flex justify-center items-center bg-[#D9176C]/10 border border-[#D9176C] font-open font-semibold text-[16px] text-[#D9176C] ">
              Move to cart
            </button>
            <button className="w-[320px] h-full rounded-lg bg-[#D9176C] flex justify-center items-center gap-[59px] font-open font-bold text-[16px] text-white">
              <div className="w-[42px] h-[38px] ml-6">
                <p className="font-open font-normal text-[14px] text-white">
                  2 Item
                </p>
                <p className="font-open font-normal text-start text-[14px] text-white">
                  $80
                </p>
              </div>
              Check out
              <div className="w-8 h-8 rounded-lg flex justify-center items-center bg-white">
                <FaArrowRight size={14} className="text-[#D9176C]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
