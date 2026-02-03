import car from "../../assets/shipping-fast 1.png";
import card from "../../assets/credit-card-buyer 1.png";
import reload from "../../assets/restock 1.png";
import headset from "../../assets/user-headset 1.png";

export default function OurPowerPoints() {
  return (
    <div className="container max-w-[1283px]">
      <div className="w-full h-[167px] flex gap-[61px]">
        <div className="w-[275px] h-full">
          <img src={car} alt="Shipping Fast" className="w-7.5 h-7.5" />
          <h2 className="font-open font-bold text-[18px] text-[#222222] mt-4">
            Fast & Reliable Shipping
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        {/*------------------------------------------------------------------*/}
        {/*------------------------------------------------------------------*/}
        <div className="w-[275px] h-full">
          <img src={card} alt="Shipping Fast" className="w-7.5 h-7.5" />
          <h2 className="font-open font-bold text-[18px] text-[#222222] mt-4">
            Secure Payment
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        {/*------------------------------------------------------------------*/}
        {/*------------------------------------------------------------------*/}
        <div className="w-[275px] h-full">
          <img src={reload} alt="Shipping Fast" className="w-7.5 h-7.5" />
          <h2 className="font-open font-bold text-[18px] text-[#222222] mt-4">
            Easy Returns
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        {/*------------------------------------------------------------------*/}
        {/*------------------------------------------------------------------*/}
        <div className="w-[275px] h-full">
          <img src={headset} alt="Shipping Fast" className="w-7.5 h-7.5" />
          <h2 className="font-open font-bold text-[18px] text-[#222222] mt-4">
            24/7 Customer Support
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>
    </div>
  );
}
