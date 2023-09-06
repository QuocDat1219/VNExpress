import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
//internal import
import { WiDayCloudy } from "react-icons/wi";
import { FiClock } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FcCopyright } from "react-icons/fc";
import { TbListSearch } from "react-icons/tb";
import { GoSearch, GoBell } from "react-icons/go";
import LoginModal from "../../component/modal/LoginModal";
import { UserContext } from "../../context/UserContext";
import { SidebarContext } from "../../context/SidebarContext";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import SettingServices from "../../services/SettingServices";
import useAsync from "../../hooks/useAsync";
import WeatherModal from "./WeatherModal";
import RegionDropdown from "./RegionDropdown";
import UserDropDown from "../../component/dropdown/UserDropDown";
import { Button } from "@windmill/react-ui";
import MainDrawer from "../../component/drawer/MainDrawer";
import MenuPhoneDrawer from "../../component/drawer/MenuPhoneDrawer";
const NavBarTop = () => {
  const { t } = useTranslation();
  const {
    dispatch,
    state: { userInfo },
  } = useContext(UserContext);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const { toggleModal, isModalOpen, toggleDrawer } = useContext(SidebarContext);

  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  const handleModal = () => {
    if (userInfo?.email) {
      router.push("/user/dashboard");
    } else {
      setModalOpen(!modalOpen);
    }
  };

  const handleShowUserDropDown = () => {
    setModalOpen(true);
  };
  //   const handleLogOut = () => {
  //     dispatch({ type: "USER_LOGOUT" });
  //     Cookies.remove("userInfo");
  //     Cookies.remove("couponInfo");
  //     router.push("/");
  //   };

  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <MainDrawer>
        <MenuPhoneDrawer />
      </MainDrawer>

      <div className="lg:block">
        <div className="max-w-screen-2xl mx-auto px-2 lg:w-10/12">
          <div className="text-gray-700 font-sans text-xs font-base border-b flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex align-left ml-2 items-start">
                <button className="block lg:hidden md:mx-auto sm:mx-auto">
                  <TbListSearch
                    size={25}
                    className="cursor-pointer"
                    onClick={toggleDrawer}
                  />
                </button>
                <Link href="/home">
                  <div className="cursor-pointer lg:m-0 ml-20 md:ml-72 sm:ml-10">
                    <img
                      src="https://s1.vnecdn.net/vnexpress/restruct/i/v800/v2_2019/pc/graphics/logo.svg"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="hidden lg:flex items-center">
                <div className="border-r border-opacity-100 md:border-opacity-50 h-7 p-2"></div>
                <span className="text-sm text-gray-500 pl-2">
                  Chủ nhật, 3/9/2023
                </span>
                <div className="border-r border-opacity-100 md:border-opacity-50 h-7 p-2"></div>
                <div class="group inline-block relative pl-2 ">
                  <span class="text-gray-500 font-Arial text-sm py-2 rounded inline-flex items-center">
                    <span class="mr-1">
                      <Link href="/hanoi">Hà Nội</Link>
                    </span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <div class="absolute hidden text-gray-700 pt-1 group-hover:block">
                    <WeatherModal />
                  </div>
                </div>
                <div className="flex">
                  <div className="mt-auto mb-auto">
                    <WiDayCloudy size={20} />
                  </div>
                  <span className="text-sm text-gray-500 p-1">
                    28<sup>o</sup>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="hidden lg:flex items-center">
                <Link href="/moinhat">
                  <div className="text-sm flex text-gray-500 p-2 items-center cursor-pointer">
                    <div className="mr-1">
                      <FiClock size={20} />
                    </div>
                    <span>Mới nhất</span>
                  </div>
                </Link>

                <Link href="/international">
                  <div class="group inline-block relative pl-2 cursor-pointer">
                    <div className="text-sm flex text-gray-500 p-2 items-center">
                      <div className="mr-1">
                        <CiLocationOn size={20} />
                      </div>
                      <span>Tin theo khu vực</span>
                    </div>
                    <div class="absolute hidden text-gray-700 pt-1 group-hover:block">
                      <RegionDropdown />
                    </div>
                  </div>
                </Link>

                <Link href="/international">
                  <div className="text-sm flex text-gray-500 p-2 items-center cursor-pointer">
                    <div className="mr-1">
                      <FcCopyright size={20} />
                    </div>
                    <span>International</span>
                  </div>
                </Link>

                <div className="border-r border-opacity-100 md:border-opacity-50 h-7 p-2"></div>
                <div className="py-2 px-2 flex items-center">
                  <div className="py-2 px-2">
                    <GoSearch size={20} />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="relative py-2 px-2 cursor-pointer"
                  onClick={toggleModal}
                >
                  <span className="avatar_inner">
                    <img
                      src="https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png"
                      alt=""
                      height="25px"
                      width="25px"
                    />
                  </span>
                  {isModalOpen ? (
                    <div className="absolute right-0 mt-2">
                      <UserDropDown />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="py-2 px-2">
                  <GoBell size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
