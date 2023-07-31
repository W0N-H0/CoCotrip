import React, { useState } from "react";
import { Tabs, Select } from "antd";
import Converter from "./Converter";

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
    setValue("");
  };

  return (
    <div>
      <h2>단위 계산기</h2>
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
    </div>
  );
};

export default UnitConverter;
