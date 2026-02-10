export default function CategorySelection() {
  return (
    <div className="bg-base-100  collapse collapse-arrow border ">
      <input type="checkbox" className="peer" />
      <div className=" collapse-title bg-white text-[#222222] font-open font-semibold text-[18px]   peer-checked:text-[#D9176C80]">
        Categories
      </div>
      <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-[#222222]">
        <div className="w-full flex flex-col gap-2.5">
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              All Categories
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (1450)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4" />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Business
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (140)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Kids
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (309)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Art
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (102)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              History
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (204)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Romance
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (89)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Fantasy
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (47)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Self Help
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (163)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Cooking
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (211)
            </p>
          </div>
          <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 " />
            <p className="font-open font-normal text-[14px] text-[#222222] ml-2.5">
              Sports
            </p>
            <p className="font-open font-normal text-[14px] text-[#222222]/50 ml-auto">
              (92)
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-2">
            <p className="font-open font-semibold text-[14px] text-[#D9176C]">
              Load More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
