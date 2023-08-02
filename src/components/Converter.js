import React from "react";
import { Tabs, Select } from "antd";
import useConvert from "../hooks/useConvert";
import { styled } from "styled-components";

import exchange from "../data/imgs/exchange.png";
import rightarrow from "../data/imgs/rightarrow.png";

const { Option } = Select;

const ConverterWrap = styled.div`
  display: flex;
  flex-direction: column;

  > .mainSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    > div {
      > img {
        margin-left: 10px;
        width: 22px;
      }
    }
    > .ant-select {
      > .ant-select-selector {
        margin-left: 13px;
        width: 220px;
        height: 60px;
        border: none;
        border-radius: 30px;
        align-items: center;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
        > .ant-select-selection-item {
          text-align: center;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    > .exchangeBtn {
      margin-right: 13px;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 15px;
      background: #ea5130;
      width: 40px;
      height: 60px;
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4) inset;
      &:hover {
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5) inset;
      }
      &:active {
        box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.9) inset;
      }
    }
  }
  > .resultSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 13px 0px 13px;

    > div {
      width: 250px;
      height: 60px;
      background-color: white;
      border-radius: 30px;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      padding-top: 15px;
      > input {
        margin-top: -3px;
        width: 130px;
        height: 40px;
        border: none;
        border-radius: 30px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        outline: none;
      }
    }
    > span {
      font-size: 36px;
      font-weight: 700;
    }
  }
`;

const Converter = ({
  category,
  standardUnit,
  conversionUnit,
  value,
  handleStandardUnitChange,
  handleValueChange,
  handleConversionUnitChange,
  handleSwap,
}) => {
  const units = {
    길이: ["cm", "m", "km", "in", "ft", "yd", "mi"],
    넓이: ["m2", "ft2", "yd2", "km2", "mi2"],
    무게: ["mg", "g", "kg", "oz", "lb"],
    부피: ["mL", "L", "gal", "bbl", "oz"],
    온도: ["C", "F"],
  };

  const { conversionValue } = useConvert(
    category,
    standardUnit,
    conversionUnit,
    value
  );

  return (
    <ConverterWrap>
      <div className="mainSection">
        <Select value={standardUnit} onChange={handleStandardUnitChange}>
          {units[category].map((unit) => (
            <Option key={unit} value={unit}>
              {unit}
            </Option>
          ))}
        </Select>
        <div>
          <img src={rightarrow} alt="오른쪽화살표" />
        </div>
        <Select value={conversionUnit} onChange={handleConversionUnitChange}>
          {units[category].map((unit) => (
            <Option key={unit} value={unit}>
              {unit}
            </Option>
          ))}
        </Select>
        <button className="exchangeBtn">
          <img src={exchange} alt="변환버튼" onClick={handleSwap} />
        </button>
      </div>

      <div className="resultSection">
        <div>
          <input
            type="text"
            value={value}
            onChange={handleValueChange}
            placeholder={standardUnit}
          />
          {value === "" ? "" : <span>{standardUnit}</span>}
        </div>
        <span> = </span>
        {conversionValue === "" ? (
          <div>{conversionUnit}</div>
        ) : (
          <div>{`${conversionValue}　 ${conversionUnit}`}</div>
        )}
      </div>
    </ConverterWrap>
  );
};

export default Converter;
