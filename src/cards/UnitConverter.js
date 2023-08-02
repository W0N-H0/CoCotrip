import React, { useState } from "react";
import { Tabs, Select } from "antd";
import Converter from "../components/Converter";
import { styled } from "styled-components";

const UnitConverterWrap = styled.div`
  width: 630px;
  height: 370px;
  border-radius: 30px;
  padding: 20px;
  background: #deeafc;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
  > h1 {
    font: bold 35px Nanum Gothic;
    background-color: #465264;
    color: transparent;
    text-shadow: 3px 3px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    margin: 10px 0px 5px 20px;
  }
  .ant-tabs-ink-bar {
    border-bottom: 10px solid #ea5130;
    border-radius: 10px;
  }

  .ant-tabs-nav-list {
    width: 100%;
    background-color: white;
    border-radius: 30px;
    margin: 15px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
  .ant-tabs-tab {
    width: 20%;
    justify-content: center;
    font-size: 18px;
    font-family: "Nanum Gothic";
    font-weight: 800;
    &.ant-tabs-tab-active {
      > .ant-tabs-tab-btn {
        color: #ea5130;
      }
    }
    &:hover {
      color: #ea5130;
    }
  }
`;

const { TabPane } = Tabs;
const { Option } = Select;

const UnitConverter = () => {
  const [category, setCategory] = useState("길이");
  const [standardUnit, setStandardUnit] = useState("m");
  const [conversionUnit, setConversionUnit] = useState("cm");
  const [value, setValue] = useState("");

  const units = {
    길이: ["cm", "m", "km", "in", "ft", "yd", "mi"],
    넓이: ["m2", "ft2", "yd2", "km2", "mi2"],
    무게: ["mg", "g", "kg", "oz", "lb"],
    부피: ["mL", "L", "gal", "bbl", "oz"],
    온도: ["C", "F"],
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setStandardUnit(units[newCategory][0]);
    setConversionUnit(units[newCategory][1]);
    setValue("");
  };

  const handleStandardUnitChange = (value) => {
    setStandardUnit(value);
    // setValue("");
  };

  const handleConversionUnitChange = (value) => {
    setConversionUnit(value);
    // setValue("");
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSwap = () => {
    setStandardUnit(conversionUnit);
    setConversionUnit(standardUnit);
    // setValue("");
  };

  return (
    <UnitConverterWrap>
      <h1>단위</h1>
      <Tabs activeKey={units[0]} onChange={handleCategoryChange}>
        {Object.keys(units).map((categoryKey) => (
          <TabPane
            defaultActiveKey={category}
            tab={categoryKey}
            key={categoryKey}
          >
            <Converter
              category={categoryKey}
              standardUnit={standardUnit}
              conversionUnit={conversionUnit}
              value={value}
              handleStandardUnitChange={handleStandardUnitChange}
              handleValueChange={handleValueChange}
              handleConversionUnitChange={handleConversionUnitChange}
              handleSwap={handleSwap}
            />
          </TabPane>
        ))}
      </Tabs>
    </UnitConverterWrap>
  );
};

export default UnitConverter;
