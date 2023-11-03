import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import country from "../data/country";

const Cointainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #cbe5e5;
  justify-content: space-around;
  align-items: center;
  width: calc(100vw / 3);
  height: calc(100vh * 0.8);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  > .title {
    font-family: "Bagel Fat One";
    font-size: 3.5rem;
    text-align: center;
    text-shadow: -4px 4px 1px #a8c5c5;
    color: #426f6f;
    letter-spacing: 2px;
  }

  > .flags {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 120px;
      height: 120px;
      border-radius: 100%;
      background-color: white;
      box-shadow: -4px 4px 1px #a8c5c5;
    }
  }
`;

const FlagSelect = styled.div`
  /* width: 200px;
  padding: 10px;
  border-radius: 30px;
  font-size: 1.2em;
  margin-top: 10px;
  text-align: center;
  background-color: #426f6f;
  color: white;
  font-weight: 700;
  box-shadow: -4px 4px 1px #a8c5c5; */
  width: 200px;
  padding: 10px;
  border-radius: 30px;
  background-color: #426f6f;
  position: absolute;
  z-index: 1;
  top: 120px;
  font-weight: 700;
  box-shadow: -4px 4px 1px #a8c5c5;
  color: white;
  font-size: 1.3em;
  text-align: center;
`;

const CountryItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || ""};
  padding: 10px;
  margin-bottom: 35px;
  text-align: center;
  width: 240px;
  height: 50px;
  border-radius: 30px;
  font-size: 1.7em;
  color: white;
  font-weight: 900;
  box-shadow: 3px -3px 2px #a8c5c5;
  /* box-shadow: 5px 5px 10px -5px gray inset;  클릭시 이 그림자 값으로*/
`;

function SideBar({
  flag,
  showDropdown,
  selectedCountryIndex,
  handleFlagChange,
  handleImageClick,
  handleCardClick,
}) {
  return (
    <Cointainer>
      <div className="title">
        <h1>
          COCO <br />
          trip
        </h1>
      </div>
      <div className="flags" onClick={handleImageClick}>
        <img src={country[selectedCountryIndex]?.url || ""} alt={flag} />
        {showDropdown && (
          <FlagSelect>
            {country.map((countryItem, index) => (
              <CountryItem
                key={countryItem.name}
                onClick={(event) => handleFlagChange(event, index)}
              >
                {countryItem.name}
              </CountryItem>
            ))}
          </FlagSelect>
        )}
      </div>
      <div className="menu">
        <CardButton
          backgroundColor="#CDC4E8"
          onClick={() => handleCardClick(1)}
        >
          환 율
        </CardButton>
        <CardButton
          backgroundColor="#CCE6CD"
          onClick={() => handleCardClick(2)}
        >
          팁
        </CardButton>
        <CardButton
          backgroundColor="#C9D9F0"
          onClick={() => handleCardClick(3)}
        >
          단 위
        </CardButton>
        <CardButton
          backgroundColor="#EFDAD3"
          onClick={() => handleCardClick(4)}
        >
          할 인 율
        </CardButton>
      </div>
    </Cointainer>
  );
}

export default SideBar;
