import React from "react";

import { styled } from "styled-components";

import SideBar from "./SideBar";
import Exchange from "../cards/Exchange";
import DiscountRate from "../cards/DiscountRate";
import UnitConverter from "../cards/UnitConverter";
import Tip from "../cards/Tip";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fcf4e7;
  width: 100vw;
  height: 100vh;
`;

const CardsContainer = styled.div``;

function Main() {
  return (
    <Container>
      <SideBar />
      <CardsContainer>
        <Exchange></Exchange>
        <Tip></Tip>
        <UnitConverter></UnitConverter>
        <DiscountRate></DiscountRate>
      </CardsContainer>
    </Container>
  );
}

export default Main;
