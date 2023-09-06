import React from "react";
import Label from "../form/Label";
const LocationNewDrawer = () => {
  return (
    <>
      <div className="px-5 pt-2">
        <Label label="Tin theo khu vực" />
        <div className="flex gap-4 items-center border-b text-gray-700">
          <div className="font-sans ml-4 w-[84%] leading-[54px] text-lg">
            <span className="text-lg font-bold font-serif">Hà Nội</span>
          </div>

          <div className="w-10 h-12 flex justify-center items-center">
            <span className="text-right my-auto">
              <svg
                class="fill-current h-6 w-6 transform -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center border-b text-gray-700">
          <div className="font-sans ml-4 leading-[54px] w-[84%] text-lg">
            <span className="text-lg font-bold font-serif ">
              TP Hồ Chí Minh
            </span>
          </div>

          <div className="w-10 h-12 flex justify-center items-center">
            <span className="text-right my-auto">
              <svg
                class="fill-current h-6 w-6 transform -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationNewDrawer;
