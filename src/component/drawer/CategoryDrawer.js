import React from "react";
import Label from "../form/Label";
import data from "../../../util/data.json";
import Sidebar from "../sidebar/Sidebar";

const LocationNewDrawer = () => {
  console.log(data);
  return (
    <>
      <div className="px-5 py-2">
        <Label label="Chuyên mục" />
        <div className=" leading-[54px] pt-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default LocationNewDrawer;
