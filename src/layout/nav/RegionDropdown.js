import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const RegionDropdown = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div class="w-80 shadow-md z-50 rounded-lg">
        <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[480px] xl:max-w-[480px] 2xl:max-w-[700px] md:mx-12 lg:mx-4 xl:mx-0">
          <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30 ">
            <div className="flex flex-col mx-auto w-full">
              <ul class="text-left text-[14px] font-semibold">
                <li class="">
                  <div className="w-full">
                    <div className="w-11/12 ml-auto mr-auto h-50 p-1rounded-lg">
                      <a
                        class="py-2 text-md px-4 block whitespace-no-wrap hover:text-[#9f224e]"
                        href="#"
                      >
                        Hà Nội
                      </a>
                    </div>
                  </div>
                </li>
                <li class="">
                  <div className="w-full">
                    <div className="w-11/12 ml-auto mr-auto h-50 p-1rounded-lg">
                      <a
                        class="py-2 text-md px-4 block whitespace-no-wrap hover:text-[#9f224e]"
                        href="#"
                      >
                        TP Hồ Chí Minh
                      </a>
                    </div>
                  </div>
                </li>
                <li class="">
                  <div className="w-full">
                    <div className="w-11/12 ml-auto mr-auto h-50 p-1rounded-lg">
                      <a
                        class="py-2 text-md px-4 block whitespace-no-wrap hover:text-[#9f224e]"
                        href="#"
                      >
                        Cần Thơ
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegionDropdown;
