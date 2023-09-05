import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import SearchBar from "../form/SearchBar";
const MenuPhoneDrawer = () => {
  const isUser = {
    username: "Quốc Đạt",
    email: "lengyenquocdat1219@gmail.com",
    phone: "0704933342",
    address: "Vĩnh Long",
  };
  return (
    <>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative bg-white dark:text-gray-200">
        <div class="w-full rounded">
          <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[480px] xl:max-w-[480px] 2xl:max-w-[700px] md:mx-12 lg:mx-4 xl:mx-0">
            <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30 ">
              <div className="flex flex-col mx-auto w-full">
                <SearchBar />
              </div>
            </div>
            {isUser ? (
              <div className="flex items-center gap-4 text-gray-700 px-5 font-sans">
                <div>
                  <span className="avatar_inner">
                    <img
                      src="https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png"
                      alt=""
                      height="45px"
                      width="45px"
                    />
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-md">
                    <span>{isUser.username}</span>
                  </div>
                  <div className="text-gray-500">
                    <span>Thiết lập tài khoản</span>
                  </div>
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
            ) : (
              <div className="flex items-center border-b font-sans text-gray-700 bg-white px-4">
                <div className="w-10 h-12 mr-2 flex items-center justify-center">
                  <span className="w-10 h-10 flex items-center justify-center">
                    <CiUser size={30} />
                  </span>
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-700">
                    Đăng nhập/Tạo tài khoản
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Scrollbars>
    </>
  );
};

export default MenuPhoneDrawer;
