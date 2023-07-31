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

// 여기에 SideBar에 작성한 상태들 끌어올려야함 or useContext 써서 전역변수로 만들지 고민

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
