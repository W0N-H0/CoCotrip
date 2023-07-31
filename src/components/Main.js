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
  align-items: center;
  justify-content: center;
  background-color: #fcf4e7;
  width: 100vw;
  height: 100vh;
`;

const CardsContainer = styled.div`
  width: calc(100vw / 4 );
  height: calc(100vh * 0.8);
  display: flex;
    flex-wrap: wrap;
`;

function Main() {
  return (
    <Container>
      <SideBar />
      <CardsContainer>
        <Exchange />
        <Tip />
        <UnitConverter />
        <DiscountRate />
      </CardsContainer>
    </Container>
  );
}

export default Main;
