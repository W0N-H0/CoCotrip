import React from "react";

import { styled } from "styled-components";

import SideBar from "./SideBar";
import Exchange from "../cards/Exchange";
import DiscountRate from "../cards/DiscountRate";
import UnitConverter from "../cards/UnitConverter";
import Tip from "../cards/Tip";

function Main() {
  return (
    <div>
      메인
      <SideBar />
      <div>
        <Exchange></Exchange>
        <DiscountRate></DiscountRate>
        <UnitConverter></UnitConverter>
        <Tip></Tip>
      </div>
    </div>
  );
}

export default Main;
