export default function PublisherSelection() {
  return (
    <div className="bg-base-100  collapse collapse-arrow border ">
      <input type="checkbox" className="peer" />
      <div className=" collapse-title bg-white text-[#222222] font-open font-semibold text-[18px]  peer-checked:text-[#D9176C80]">
        Publisher
      </div>
      <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-[#222222]">
        <div className="w-full flex flex-col gap-2.5">
          <div className="w-full flex"></div>
        </div>
      </div>
    </div>
  );
}
