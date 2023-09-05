import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const WeatherModal = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div class="w-80 shadow-md z-50 rounded">
        <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[480px] xl:max-w-[480px] 2xl:max-w-[700px] md:mx-12 lg:mx-4 xl:mx-0">
          <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30 ">
            <div className="flex flex-col mx-auto w-full">
              <form className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full border border-[#f6f6f6]">
                <label className="flex items-center py-0.5">
                  <button
                    aria-label="Search"
                    type="submit"
                    className="outline-none text-xl bg-[#eeeeeeee] absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                  >
                    <IoSearchOutline />
                  </button>
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                    placeholder="Tìm địa điểm"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <ul class="">
          <li class="">
            <div className="w-full">
              <div className="w-11/12 ml-auto mr-auto h-50 p-1 hover:bg-gray-100 rounded-lg">
                <a class="py-2 text-md px-4 block whitespace-no-wrap" href="#">
                  Hà Nội
                </a>
              </div>
            </div>
          </li>
          <li class="">
            <div className="w-full">
              <div className="w-11/12 ml-auto mr-auto h-50 p-1 hover:bg-gray-100 rounded-lg">
                <a class="py-2 text-md px-4 block whitespace-no-wrap" href="#">
                  TP HCM
                </a>
              </div>
            </div>
          </li>
          <li class="">
            <div className="w-full">
              <div className="w-11/12 ml-auto mr-auto h-50 p-1 hover:bg-gray-100 rounded-lg">
                <a class="py-2 text-md px-4 block whitespace-no-wrap" href="#">
                  Cần Thơ
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default WeatherModal;
