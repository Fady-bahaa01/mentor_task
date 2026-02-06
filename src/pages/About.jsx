import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import MissionCards from "../components/Cards/MissionCards";
import { ErrorMessage, Field, Form, Formik } from "formik";

import axios from "axios";
import ContactCard from "../components/Cards/ContactCard";
import Massage from "../components/Cards/Massage";
import OurPowerPoints from "../components/Cards/OurPowerPoints";

export default function About() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[652px] h-[180px] flex flex-col gap-4 items-center absolute -top-[476px] left-[394px]">
        <h1 className="font-open font-bold text-[48px] text-white">
          About Bookshop
        </h1>
        <p className="font-open font-normal text-[24px] text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[668px] flex ">
        <div className="w-full mt-30 flex flex-col items-center gap-20">
          <h2 className="font-open font-bold text-[34px] text-[#222222]">
            Our Mission
          </h2>
          <MissionCards />
        </div>
      </div>

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[790px] bg-[#3B2F4A] flex justify-center items-center">
        <Massage />
      </div>

      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}
      {/*//////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[407px] flex justify-center items-center">
        <OurPowerPoints />
      </div>
    </div>
  );
}
