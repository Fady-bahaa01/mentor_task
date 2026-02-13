import { HiOutlineTrash } from "react-icons/hi";
import photo from "../assets/81ZLwAwD-ML 4.png";
import car from "../assets/shipping-fast 1.png";
import CartProduct from "../components/Cards/CartProduct";
import { Field, Form, Formik } from "formik";
import { TfiTicket } from "react-icons/tfi";

export default function CartPage() {
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

        <div className="w-full h-[919px] flex flex-col gap-2 mt-10 ">
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="w-full h-[455px] mt-15 bg-[#3B2F4A1A] flex justify-center items-center">
          <div className="w-[1096px] h-[375px] flex gap-[156px]">
            <div className="w-[516px] h-[275px]">
              <h2 className="font-open font-bold text-[26px] text-[#222222]">
                Payment Summary
              </h2>
              <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
              <div className="w-[388px] h-[100px] mt-20">
                <p className="font-open font-normal text-[18px] leading-6 text-[#222222]/50">
                  Have a discount code?
                </p>
                <Formik initialValues={{ code: "" }}>
                  <Form className="w-full h-[52px] mt-6 flex gap-4 relative">
                    <TfiTicket
                      size={20}
                      className="text-[#222222]/50 absolute left-3 top-[16px]"
                    />
                    <Field
                      name="code"
                      placeholder="Enter Promo Code"
                      className={`${inputStyle} py-3.5 pl-[53px] `}
                    />
                    <button
                      type="submit"
                      className="w-[88px] h-full rounded-lg flex justify-center items-center bg-[#3B2F4A] font-open font-semibold text-[16px] text-white"
                    >
                      Apply
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>

            {/*----------------------------------------------------------------------*/}
            {/*----------------------------------------------------------------------*/}

            <div className="w-[424px] h-full ">
              <div className="w-full h-[277px] flex flex-col gap-6">
                <div className="w-full h-[33px] flex justify-between">
                  <p className="font-open font-normal text-[20px] text-[#222222]/50">
                    Subtotal
                  </p>
                  <h2 className="font-open font-semibold text-[24px] text-[#222222]">
                    $120
                  </h2>
                </div>
                <div className="w-full h-[33px] flex justify-between">
                  <p className="font-open font-normal text-[20px] text-[#222222]/50">
                    Shipping
                  </p>
                  <h2 className="font-open font-semibold text-[24px] text-[#222222]">
                    Free Delivery
                  </h2>
                </div>
                <div className="w-full h-[33px] flex justify-between">
                  <p className="font-open font-normal text-[20px] text-[#222222]/50">
                    Tax
                  </p>
                  <h2 className="font-open font-semibold text-[24px] text-[#222222]">
                    $4
                  </h2>
                </div>
                <div className="w-full h-px bg-[#222222]/20"></div>
                <div className="w-full h-[33px] flex justify-between">
                  <p className="font-open font-normal text-[20px] text-[#222222]/50">
                    Total
                  </p>
                  <h2 className="font-open font-bold text-[28px] text-[#D9176C]">
                    $124
                  </h2>
                </div>
              </div>
              <div className="w-full h-[108px] flex flex-col gap-3 ">
                <button className="w-full h-12 rounded-lg bg-[#D9176C] flex justify-center items-center font-open font-semibold text-[16px] text-white">
                  Check out
                </button>
                <button className="w-full h-12 rounded-lg border border-[#D9176C] flex justify-center items-center font-open font-semibold text-[16px] text-[#D9176C]">
                  Keep Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
