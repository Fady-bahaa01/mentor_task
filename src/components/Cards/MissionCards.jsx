import { IoArrowForwardOutline } from "react-icons/io5";

export default function MissionCards() {
  return (
    <div className="w-[1128px] h-[302px] flex gap-6">
      <div className="w-[360px] h-full rounded-lg bg-white flex justify-center items-center ">
        <div className="container max-w-[312px]">
          <h2 className="font-open font-bold text-[22px] text-[#222222]">
            Quality Selection
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.Quality SelectionLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
          </p>
          <div className="w-[103px] h-[22px] mt-[24px] flex items-center gap-2">
            <p className="font-open font-normal text-[16px] text-[#D9176C]">
              View More{" "}
            </p>
            <IoArrowForwardOutline size={16} className="text-[#D9176C]" />
          </div>
        </div>
      </div>

      {/*---------------------------------------------------------------*/}
      {/*---------------------------------------------------------------*/}

      <div className="w-[360px] h-full rounded-lg bg-white flex justify-center items-center ">
        <div className="container max-w-[312px]">
          <h2 className="font-open font-bold text-[22px] text-[#222222]">
            Exceptional Service
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.Quality SelectionLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
          </p>
          <div className="w-[103px] h-[22px] mt-[24px] flex items-center gap-2">
            <p className="font-open font-normal text-[16px] text-[#D9176C]">
              View More{" "}
            </p>
            <IoArrowForwardOutline size={16} className="text-[#D9176C]" />
          </div>
        </div>
      </div>

      {/*---------------------------------------------------------------*/}
      {/*---------------------------------------------------------------*/}

      <div className="w-[360px] h-full rounded-lg bg-white flex justify-center items-center ">
        <div className="container max-w-[312px]">
          <h2 className="font-open font-bold text-[22px] text-[#222222]">
            Set Up Stores
          </h2>
          <p className="font-open font-normal text-[16px] text-[#222222]/50 mt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.Quality SelectionLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
          </p>
          <div className="w-[103px] h-[22px] mt-[24px] flex items-center gap-2">
            <p className="font-open font-normal text-[16px] text-[#D9176C]">
              Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
