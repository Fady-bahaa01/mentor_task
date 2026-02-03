import SwiperCard from "./SwiperCard";

export default function Swiper() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full h-full flex gap-10 ml-14">
          <SwiperCard />
          <SwiperCard />
        </div>
        <div className="absolute left-0 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-white text-[#222222]">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-white text-[#222222]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full h-full flex gap-10 ml-14">
          <SwiperCard />
          <SwiperCard />
        </div>
        <div className="absolute left-0 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-white text-[#222222]">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-white text-[#222222]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
