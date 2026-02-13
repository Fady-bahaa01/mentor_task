import { GrCart } from "react-icons/gr";
import RatingStars from "./RatingStars";
import { GoHeart } from "react-icons/go";
import photo from "../../assets/81ZLwAwD-ML 4.png";
import photo2 from "../../assets/81ZLwAwD-ML 4 (1).png";

export default function Recomented() {
  return (
    <div className="w-full mt-10 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2 bg-white p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="lg:w-[176px]  w-[150px] md:w-[176px] flex-shrink-0">
            <img
              src={photo}
              alt=""
              className="w-full h-[220px] sm:h-full object-cover rounded"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h2 className="font-open  font-bold text-[18px] text-[#222222]">
              Rich Dad And Poor Dad
            </h2>

            <p className="text-[14px] text-[#222222]/50 mt-1">
              Author:{" "}
              <span className="text-[#222222]">Robert T. Kiyosanki</span>
            </p>

            <p className="text-[14px] text-[#222222]/50 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <RatingStars />
                  <p className="text-[12px] text-[#222222]/50">(180 Review)</p>
                </div>

                <p className="text-[14px] text-[#222222]/50 mt-1">
                  Rate: <span className="text-[#222222]">4.2</span>
                </p>
              </div>

              <h3 className="font-semibold text-[22px] sm:text-[26px] text-[#222222]">
                $30.00
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button className="flex-1 h-12 rounded-lg bg-[#D9176C] text-white font-semibold flex justify-center items-center gap-2">
                Add To Cart <GrCart />
              </button>

              <div className="w-12 h-12 rounded-lg border border-[#D9176C] flex justify-center items-center">
                <GoHeart size={20} className="text-[#D9176C]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--------------------------------------------------------------*/}
      {/*--------------------------------------------------------------*/}
      {/*--------------------------------------------------------------*/}

      <div className="w-full lg:w-1/2 bg-white p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="lg:w-[176px]  w-[150px] md:w-[176px] flex-shrink-0">
            <img
              src={photo2}
              alt=""
              className="w-full h-[220px] sm:h-full object-cover rounded"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h2 className="font-open font-bold text-[18px] text-[#222222]">
              The Design Of Books
            </h2>

            <p className="text-[14px] text-[#222222]/50 mt-1">
              Author: <span className="text-[#222222]">Debbie Berne</span>
            </p>

            <p className="text-[14px] text-[#222222]/50 mt-2">
              Lorem ipsum dolor sit amet...
            </p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <RatingStars />
                  <p className="text-[12px] text-[#222222]/50">(210 Review)</p>
                </div>

                <p className="text-[14px] text-[#222222]/50 mt-1">
                  Rate: <span className="text-[#222222]">4.2</span>
                </p>
              </div>

              <h3 className="font-semibold text-[22px] sm:text-[26px] text-[#222222]">
                $30.00
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button className="flex-1 h-12 rounded-lg bg-[#D9176C] text-white font-semibold flex justify-center items-center gap-2">
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
