import phone from "../../assets/fi-rr-phone-call.png";
import gps from "../../assets/fi-rr-marker.png";
import sms from "../../assets/comment-alt-dots 1.png";

export default function ContactCard() {
  return (
    <div className="w-[312px] h-[192px] flex flex-col gap-6 ">
      <div className="w-full h-[48px] flex gap-3">
        <div className="w-12 h-full rounded-lg bg-white flex items-center justify-center">
          <img src={phone} alt="phone" className="w-5 h-5" />
        </div>
        <p className="font-open font-normal text-[16px] text-white">
          01123456789
        </p>
      </div>
      <div className="w-full h-[48px] flex gap-3">
        <div className="w-12 h-full rounded-lg bg-white flex items-center justify-center">
          <img src={sms} alt="gps" className="w-5 h-5" />
        </div>
        <p className="font-open font-normal text-[16px] text-white">
          Example@gmail.com
        </p>
      </div>
      <div className="w-full h-[48px] flex gap-3">
        <div className="w-12 h-full rounded-lg bg-white flex items-center justify-center">
          <img src={gps} alt="gps" className="w-5 h-5" />
        </div>
        <p className="font-open w-[248px] font-normal text-[16px] text-white">
          adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
        </p>
      </div>
    </div>
  );
}
