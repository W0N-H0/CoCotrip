import { useEffect, useState } from "react";

const useConvert = (category, standardUnit, conversionUnit, value) => {
  const [conversionValue, setConversionValue] = useState("");

  useEffect(() => {
    if (!value) {
      setConversionValue("");
      return;
    }

    let standardValue = parseFloat(value);
    let result = 0;

    switch (category) {
      case "부피":
        switch (standardUnit) {
          case "mL":
            switch (conversionUnit) {
              case "mL":
                result = standardValue;
                break;
              case "L":
                result = standardValue / 1000;
                break;
              case "gal":
                result = standardValue * 0.000264172;
                break;
              case "bbl":
                result = standardValue * 0.00000628981;
                break;
              case "oz":
                result = standardValue * 0.033814;
                break;
              default:
                break;
            }
            break;
          case "L":
            switch (conversionUnit) {
              case "mL":
                result = standardValue * 1000;
                break;
              case "L":
                result = standardValue;
                break;
              case "gal":
                result = standardValue * 0.264172;
                break;
              case "bbl":
                result = standardValue * 0.00628981;
                break;
              case "oz":
                result = standardValue * 33.814;
                break;
              default:
                break;
            }
            break;
          case "gal":
            switch (conversionUnit) {
              case "mL":
                result = standardValue * 3785.41;
                break;
              case "L":
                result = standardValue * 3.78541;
                break;
              case "gal":
                result = standardValue;
                break;
              case "bbl":
                result = standardValue * 0.0238095;
                break;
              case "oz":
                result = standardValue * 128;
                break;
              default:
                break;
            }
            break;
          case "bbl":
            switch (conversionUnit) {
              case "mL":
                result = standardValue * 158987.294928;
                break;
              case "L":
                result = standardValue * 158.987295;
                break;
              case "gal":
                result = standardValue * 42;
                break;
              case "bbl":
                result = standardValue;
                break;
              case "oz":
                result = standardValue * 5376;
                break;
              default:
                break;
            }
            break;
          case "oz":
            switch (conversionUnit) {
              case "mL":
                result = standardValue * 29.5735;
                break;
              case "L":
                result = standardValue * 0.0295735;
                break;
              case "gal":
                result = standardValue * 0.0078125;
                break;
              case "bbl":
                result = standardValue * 0.000185185;
                break;
              case "oz":
                result = standardValue;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        break;
      case "무게":
        switch (standardUnit) {
          case "mg":
            switch (conversionUnit) {
              case "mg":
                result = standardValue;
                break;
              case "g":
                result = standardValue * 0.001;
                break;
              case "kg":
                result = standardValue * 0.000001;
                break;
              case "oz":
                result = standardValue * 0.00003527396;
                break;
              case "lb":
                result = standardValue * 0.00000220462;
                break;
              default:
                break;
            }
            break;
          case "g":
            switch (conversionUnit) {
              case "mg":
                result = standardValue * 1000;
                break;
              case "g":
                result = standardValue;
                break;
              case "kg":
                result = standardValue * 0.001;
                break;
              case "oz":
                result = standardValue * 0.03527396;
                break;
              case "lb":
                result = standardValue * 0.00220462;
                break;
              default:
                break;
            }
            break;
          case "kg":
            switch (conversionUnit) {
              case "mg":
                result = standardValue * 1000000;
                break;
              case "g":
                result = standardValue * 1000;
                break;
              case "kg":
                result = standardValue;
                break;
              case "oz":
                result = standardValue * 35.27396;
                break;
              case "lb":
                result = standardValue * 2.20462;
                break;
              default:
                break;
            }
            break;
          case "oz":
            switch (conversionUnit) {
              case "mg":
                result = standardValue * 28349.523125;
                break;
              case "g":
                result = standardValue * 28.3495231;
                break;
              case "kg":
                result = standardValue * 0.0283495231;
                break;
              case "oz":
                result = standardValue;
                break;
              case "lb":
                result = standardValue * 0.0625;
                break;
              default:
                break;
            }
            break;
          case "lb":
            switch (conversionUnit) {
              case "mg":
                result = standardValue * 453592.37;
                break;
              case "g":
                result = standardValue * 453.59237;
                break;
              case "kg":
                result = standardValue * 0.45359237;
                break;
              case "oz":
                result = standardValue * 16;
                break;
              case "lb":
                result = standardValue;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        break;
      case "넓이":
        switch (standardUnit) {
          case "m2":
            switch (conversionUnit) {
              case "m2":
                result = standardValue;
                break;
              case "ft2":
                result = standardValue * 10.76391;
                break;
              case "yd2":
                result = standardValue * 1.19599;
                break;
              case "km2":
                result = standardValue * 0.000001;
                break;
              case "mi2":
                result = standardValue * 0.000000386102;
                break;
              default:
                break;
            }
            break;
          case "ft2":
            switch (conversionUnit) {
              case "m2":
                result = standardValue * 0.09290304;
                break;
              case "ft2":
                result = standardValue;
                break;
              case "yd2":
                result = standardValue * 0.111111111;
                break;
              case "km2":
                result = standardValue * 0.0000000009;
                break;
              case "mi2":
                result = standardValue * 0.000000000347;
                break;
              default:
                break;
            }
            break;
          case "yd2":
            switch (conversionUnit) {
              case "m2":
                result = standardValue * 0.83612736;
                break;
              case "ft2":
                result = standardValue * 9;
                break;
              case "yd2":
                result = standardValue;
                break;
              case "km2":
                result = standardValue * 0.00000083612736;
                break;
              case "mi2":
                result = standardValue * 0.00000032283;
                break;
              default:
                break;
            }
            break;
          case "km2":
            switch (conversionUnit) {
              case "m2":
                result = standardValue * 1000000;
                break;
              case "ft2":
                result = standardValue * 10763910.4;
                break;
              case "yd2":
                result = standardValue * 1195990.05;
                break;
              case "km2":
                result = standardValue;
                break;
              case "mi2":
                result = standardValue * 0.386102159;
                break;
              default:
                break;
            }
            break;
          case "mi2":
            switch (conversionUnit) {
              case "m2":
                result = standardValue * 2590000 * 2590000;
                break;
              case "ft2":
                result = standardValue * 27878417536;
                break;
              case "yd2":
                result = standardValue * 3097600;
                break;
              case "km2":
                result = standardValue * 2.58999;
                break;
              case "mi2":
                result = standardValue;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        break;
      case "길이":
        switch (standardUnit) {
          case "cm":
            switch (conversionUnit) {
              case "cm":
                result = standardValue;
                break;
              case "m":
                result = standardValue * 0.01;
                break;
              case "km":
                result = standardValue * 0.00001;
                break;
              case "in":
                result = standardValue * 0.393700787;
                break;
              case "ft":
                result = standardValue * 0.032808399;
                break;
              case "yd":
                result = standardValue * 0.010936132983;
                break;
              case "mi":
                result = standardValue * 0.000006213712;
                break;
              default:
                break;
            }
            break;
          case "m":
            switch (conversionUnit) {
              case "cm":
                result = standardValue * 100;
                break;
              case "m":
                result = standardValue;
                break;
              case "km":
                result = standardValue * 0.001;
                break;
              case "in":
                result = standardValue * 39.3700787;
                break;
              case "ft":
                result = standardValue * 3.280839895;
                break;
              case "yd":
                result = standardValue * 1.0936132983;
                break;
              case "mi":
                result = standardValue * 0.0006213712;
                break;
              default:
                break;
            }
            break;
          case "km":
            switch (conversionUnit) {
              case "cm":
                result = standardValue * 100000;
                break;
              case "m":
                result = standardValue * 1000;
                break;
              case "km":
                result = standardValue;
                break;
              case "in":
                result = standardValue * 39370.0787;
                break;
              case "ft":
                result = standardValue * 3280.839895;
                break;
              case "yd":
                result = standardValue * 1093.6132983;
                break;
              case "mi":
                result = standardValue * 0.6213712;
                break;
              default:
                break;
            }
            break;
          case "in":
            switch (conversionUnit) {
              case "cm":
                result = standardValue * 2.54;
                break;
              case "m":
                result = standardValue * 0.0254;
                break;
              case "km":
                result = standardValue * 0.0000254;
                break;
              case "in":
                result = standardValue;
                break;
              case "ft":
                result = standardValue * 0.083333;
                break;
              case "yd":
                result = standardValue * 0.0277778;
                break;
              case "mi":
                result = standardValue * 0.0000157828;
                break;
              default:
                break;
            }
            break;
          case "ft":
            switch (conversionUnit) {
              case "cm":
                result = standardValue * 30.48;
                break;
              case "m":
                result = standardValue * 0.3048;
                break;
              case "km":
                result = standardValue * 0.0003048;
                break;
              case "in":
                result = standardValue * 12;
                break;
              case "ft":
                result = standardValue;
                break;
              case "yd":
                result = standardValue * 0.333333;
                break;
              case "mi":
                result = standardValue * 0.000189394;
                break;
              default:
                break;
            }
            break;
          case "yd":
            switch (conversionUnit) {
              case "cm":
                result = standardValue * 91.44;
                break;
              case "m":
                result = standardValue * 0.9144;
                break;
              case "km":
                result = standardValue * 0.0009144;
                break;
              case "in":
                result = standardValue * 36;
                break;
              case "ft":
                result = standardValue * 3;
                break;
              case "yd":
                result = standardValue;
                break;
              case "mi":
                result = standardValue * 0.000568182;
                break;
              default:
                break;
            }
            break;
          case "mi":
            switch (conversionUnit) {
              case "cm":
                result = standardValue * 160934.4;
                break;
              case "m":
                result = standardValue * 1609.344;
                break;
              case "km":
                result = standardValue * 1.609344;
                break;
              case "in":
                result = standardValue * 63360;
                break;
              case "ft":
                result = standardValue * 5280;
                break;
              case "yd":
                result = standardValue * 1760;
                break;
              case "mi":
                result = standardValue;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        break;
      case "온도":
        switch (standardUnit) {
          case "C":
            switch (conversionUnit) {
              case "C":
                result = standardValue;
                break;
              case "F":
                result = (standardValue * 9) / 5 + 32;
                break;
              default:
                break;
            }
            break;
          case "F":
            switch (conversionUnit) {
              case "C":
                result = ((standardValue - 32) * 5) / 9;
                break;
              case "F":
                result = standardValue;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    setConversionValue(result.toFixed(2));
  }, [category, standardUnit, conversionUnit, value]);

  return { conversionValue };
};

export default useConvert;
