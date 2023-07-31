import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import SideBar from "./SideBar";
import Exchange from "../cards/Exchange";
import DiscountRate from "../cards/DiscountRate";
import UnitConverter from "../cards/UnitConverter";
import Tip from "../cards/Tip";

import country from "../data/country";

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
  // 여기에 SideBar에 작성한 상태들 끌어올려야함 or useContext 써서 전역변수로 만들지 고민
  const [flag, setFlag] = useState(""); // 국가이름 상태가 필요한지 고민해보기
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [currency, setCurrency] = useState(country[0].currency);

  useEffect(() => {
    // 국기가 바뀔때마다 랜더링해야함
    if (
      selectedCountryIndex !== null &&
      country[selectedCountryIndex] &&
      country[selectedCountryIndex].name
    ) {
      setFlag(country[selectedCountryIndex].name);
      setCurrency(country[selectedCountryIndex].currency);
    }
  }, [selectedCountryIndex]);

  const handleFlagChange = (event, index) => {
    setFlag(event.target.value);
    setShowDropdown(false);
    setSelectedCountryIndex(index);
  };

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Container>
      <SideBar
        flag={flag}
        showDropdown={showDropdown}
        selectedCountryIndex={selectedCountryIndex}
        handleFlagChange={handleFlagChange}
        handleImageClick={handleImageClick}
      />
      <CardsContainer>
        <Exchange currency={currency} />
        <Tip />
        <UnitConverter />
        <DiscountRate />
      </CardsContainer>
    </Container>
  );
}

export default Main;
