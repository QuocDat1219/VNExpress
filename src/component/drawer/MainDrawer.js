import { SidebarContext } from "../../context/SidebarContext";
import Drawer from "rc-drawer";
import React, { useContext, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Link from "next/link";
const MainDrawer = ({ children, product }) => {
  const { toggleDrawer, isDrawerOpen, closeDrawer } =
    useContext(SidebarContext);
  console.log(isDrawerOpen);
  return (
    <Drawer
      open={isDrawerOpen}
      onClose={closeDrawer}
      parent={null}
      level={null}
      placement={"left"}
      width={"100%"}
    >
      <div className="sticky top-0 z-50 flex items-center border-b text-gray-700 bg-white">
        <div className="mb-2">
          <button
            onClick={toggleDrawer}
            className="focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md ml-2 mt-2 right-0 left-auto w-10 h-10 rounded-full block text-center"
          >
            <FiX className="mx-auto" />
          </button>
        </div>
        <div className="flex-grow mt-2 mb-2 w-full flex justify-center items-center">
          <Link href="/home">
            <div className="cursor-pointer">
              <img
                src="https://s1.vnecdn.net/vnexpress/restruct/i/v800/v2_2019/pc/graphics/logo.svg"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full h-full">{children}</div>
    </Drawer>
  );
};

export default React.memo(MainDrawer);
