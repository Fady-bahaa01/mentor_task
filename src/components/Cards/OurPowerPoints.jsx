import car from "../../assets/shipping-fast 1.png";
import card from "../../assets/credit-card-buyer 1.png";
import reload from "../../assets/restock 1.png";
import headset from "../../assets/user-headset 1.png";

export default function OurPowerPoints() {
  return (
    <div className="w-full px-4 md:px-0 max-w-[1283px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[61px]">
        {/* Card 1 */}
        <div className="w-full flex flex-col items-center md:items-start">
          <img src={car} alt="Shipping Fast" className="w-10 h-10" />
          <h2 className="font-open font-bold text-center md:text-start text-[18px] text-[#222222] mt-4">
            Fast & Reliable Shipping
          </h2>
          <p className="font-open font-normal text-[14px] text-center md:text-start md:text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full flex flex-col items-center md:items-start">
          <img src={card} alt="Secure Payment" className="w-10 h-10" />
          <h2 className="font-open font-bold text-center md:text-start text-[18px] text-[#222222] mt-4">
            Secure Payment
          </h2>
          <p className="font-open font-normal text-center md:text-start text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full flex flex-col items-center md:items-start">
          <img src={reload} alt="Easy Returns" className="w-10 h-10" />
          <h2 className="font-open font-bold text-center md:text-start text-[18px] text-[#222222] mt-4">
            Easy Returns
          </h2>
          <p className="font-open font-normal text-center md:text-start text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>

        {/* Card 4 */}
        <div className="w-full flex flex-col items-center md:items-start">
          <img
            src={headset}
            alt="24/7 Customer Support"
            className="w-10 h-10"
          />
          <h2 className="font-open font-bold text-center md:text-start text-[18px] text-[#222222] mt-4">
            24/7 Customer Support
          </h2>
          <p className="font-open font-normal text-center md:text-start text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>
    </div>
  );
}
