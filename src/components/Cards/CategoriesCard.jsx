import { NavLink } from "react-router-dom";

export default function CategoriesCard() {
  return (
    <div className="w-full h-[42px] flex gap-3 mt-6">
      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/business"}
      >
        <p className="font-open font-normal text-[16px] ">Business</p>
      </NavLink>

      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/self-help"}
      >
        <p className="font-open font-normal text-[16px] ">Self Help</p>
      </NavLink>

      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/history"}
      >
        <p className="font-open font-normal text-[16px] ">History</p>
      </NavLink>

      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/romance"}
      >
        <p className="font-open font-normal text-[16px] ">Romance</p>
      </NavLink>

      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/fantasy"}
      >
        <p className="font-open font-normal text-[16px] ">Fantasy</p>
      </NavLink>

      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/art"}
      >
        <p className="font-open font-normal text-[16px] ">Art</p>
      </NavLink>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/kids"}
      >
        <p className="font-open font-normal text-[16px] ">Kids</p>
      </NavLink>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/music"}
      >
        <p className="font-open font-normal text-[16px] ">Music</p>
      </NavLink>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}

      <NavLink
        className={({ isActive }) =>
          "h-full w-auto flex justify-center items-center rounded-lg border border-[#222222]/20 PY-2.5 px-6 " +
          (isActive
            ? "bg-[#D9176C]/50 text-white"
            : "bg-transparent text-[#222222]")
        }
        to={"/book/cooking"}
      >
        <p className="font-open font-normal text-[16px] ">Cooking</p>
      </NavLink>
    </div>
  );
}
