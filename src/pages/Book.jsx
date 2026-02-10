import axios from "axios";
import { useEffect, useState } from "react";
import { domain } from "..";
import { VscSettings } from "react-icons/vsc";
import CategorySelection from "../components/Cards/CategorySelection";
import PublisherSelection from "../components/Cards/PublisherSelection";
import YearSelection from "../components/Cards/YearSelection";
import { Mic, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import CategoriesCard from "../components/Cards/CategoriesCard";

export default function Book() {
  const [books, setBooks] = useState();

  useEffect(() => {
    let url = domain + "/book";
    axios
      .get(url, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="w-full h-full">
      <div className="w-full h-[1439px] flex">
        <div className="w-[372px] h-full border-r border-[#222222]/10 flex justify-center">
          <div className="w-[296px] h-[607px] mt-15 ml-15">
            <div className="flex items-center gap-[4.5px]">
              <VscSettings size={24} className="text-black" />
              <h2 className="font-open font-semibold text-[24px] text-[#222222]">
                Filter
              </h2>
            </div>

            <div className="w-full flex flex-col gap-6 mt-8">
              <CategorySelection />
              <PublisherSelection />
              <YearSelection />
            </div>
          </div>
        </div>
        <div className="grow h-full flex ">
          <div className="container max-w-[984px] mt-15 ml-6">
            <div className="w-full h-[59px] flex gap-6.5">
              <div className="w-[758px] flex items-center rounded-full border border-gray-300 overflow-hidden bg-white shadow-sm">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
                />

                <button className="px-3 text-gray-400 hover:text-gray-600">
                  <Mic size={20} />
                </button>

                <button className=" h-full px-4 py-3 text-white border-l border-[#222222]/20">
                  <Search size={22} className="text-[#D9176C]" />
                </button>
                {/*------------------------------------------------------------------------------ */}
              </div>
              <details className="dropdown ">
                <summary className=" btn m-1 bg-transparent rounded-lg w-50 h-11.25 border border-black/10 font-open font-normal text-[#222222]/50 gap-[93px]">
                  Sort by <span className="text-[18px]">{">"}</span>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 ">
                  <li>
                    <a>Price: Low to High</a>
                  </li>
                  <li>
                    <a>Price: High to Low</a>
                  </li>
                </ul>
              </details>
            </div>
            <CategoriesCard />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
