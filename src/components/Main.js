import React from "react";
import SideBar from "./SideBar";
import Exchange from "../cards/Exchange";
import DiscountRate from "../cards/DiscountRate";
import Converter from "../cards/Converter";
import Tip from "../cards/Tip";

function Main() {
  return (
    <div>
      메인
      <SideBar />
      <div>
        <Exchange></Exchange>
        <DiscountRate></DiscountRate>
        <Converter></Converter>
        <Tip></Tip>
      </div>
    </div>
  );
}

export default Main;
