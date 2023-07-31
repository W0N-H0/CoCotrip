import React from "react";
import { styled } from "styled-components";
import country from "../data/country";

const Cointainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #cbe5e5;
  justify-content: space-around;
  align-items: center;
  width: calc(100vw / 6);
  height: calc(100vh * 0.8);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  > .title {
    font-family: "Bagel Fat One";
    font-size: 2.8rem;
    text-align: center;
    text-shadow: -4px 4px 1px #a8c5c5;
    color: #426f6f;
    letter-spacing: 2px;
  }

  > .flags > img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: white;
    box-shadow: -4px 4px 1px #a8c5c5;
  }
`;

const CardButton = styled.div`
  background-color: ${(props) => props.backgroundColor || ""};
  padding: 10px;
  margin-bottom: 35px;
  text-align: center;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  font-size: 1.5em;
  color: white;
  font-weight: 900;
  /* box-shadow: 3px -3px 2px #a8c5c5; */
  box-shadow: 5px 5px 10px -5px gray inset;
`;

function SideBar() {
  return (
    <Cointainer>
      <div className="title">
        <h1>
          COCO <br />
          trip
        </h1>
      </div>
      <div className="flags">
        <img src={country[1].url} alt="USA" />
      </div>
      <div className="menu">
        <CardButton backgroundColor="#CDC4E8">환율</CardButton>
        <CardButton backgroundColor="#CCE6CD">팁</CardButton>
        <CardButton backgroundColor="#C9D9F0">단위</CardButton>
        <CardButton backgroundColor="#EFDAD3">할인율</CardButton>
      </div>
    </Cointainer>
  );
}

export default SideBar;
