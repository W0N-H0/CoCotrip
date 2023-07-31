import React from "react";
import { styled } from "styled-components";
import country from "../data/country";

const Cointainer = styled.section`
  display: flex;
  flex-direction: column;
  > .title {
    font-family: "Bagel Fat One";
    font-size: 2rem;
  }

  > .flags > img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
`;

const CardButton = styled.div``;

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
        국기
        <img src={country[1].url} alt="USA" />
      </div>
      <div className="menu">
        <CardButton>환율</CardButton>
        <CardButton>팁</CardButton>
        <CardButton>단위</CardButton>
        <CardButton>할인율</CardButton>
      </div>
    </Cointainer>
  );
}

export default SideBar;
