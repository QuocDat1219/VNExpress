import React, { useState } from "react";
import data from "../../../util/data.json";
import Link from "next/link";

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState(
    Array(data.length).fill(false)
  );

  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div
            key={item.id}
            className="flex leading-[54px] w-full items-center border-b text-gray-700"
          >
            {item.newcategory && item.newcategory.length > 0 && (
              <div className="w-full">
                <div className="font-sans ml-4 text-lg">
                  <div className="flex items-center font-sans leading-[54px]">
                    <span className="w-[90%] leading-[54px] font-sans text-lg font-bold text-gray-700 block focus:outline-none">
                      {item.title}
                    </span>

                    <span className="ml-1 text-right leading-[54px] font-sans">
                      <svg
                        onClick={() => toggleDropdown(index)}
                        className={`fill-current h-6 w-6 transform ${
                          dropdownStates[index] ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8 l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`dropdown-container ${
                      dropdownStates[index] ? "open" : ""
                    }`}
                  >
                    {item.newcategory && item.newcategory.length > 0 && (
                      <div className="">
                        {item.newcategory.map((category) => (
                          <div key={category.id} className="pl-7 border-t">
                          <Link href="#">
                            <span className="leading-[54px] text-gray-700 text-lg block">
                              {category.title}
                            </span>
                          </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
