import React from "react";
import { Tabs, Select } from "antd";
import useConvert from "../hooks/useConvert";

// const { TabPane } = Tabs;
const { Option } = Select;

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
    <div>
      <div>
        <Select value={standardUnit} onChange={handleStandardUnitChange}>
          {units[category].map((unit) => (
            <Option key={unit} value={unit}>
              {unit}
            </Option>
          ))}
        </Select>
        <input type="text" value={value} onChange={handleValueChange} />
      </div>
      <div>
        <Select value={conversionUnit} onChange={handleConversionUnitChange}>
          {units[category].map((unit) => (
            <Option key={unit} value={unit}>
              {unit}
            </Option>
          ))}
        </Select>
        <span>{conversionValue}</span>
      </div>
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default Converter;
