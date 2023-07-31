import React, { useState, useEffect } from "react";
import axios from "axios";

// 여기서 Main 컴포넌트에서 받은 국가 명을 props로 전달받아
// exchangeRate 부분과 단위 정도만 수정해주면 됨
const Exchange = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [isSwap, setIsSwap] = useState("false");

  const url =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/krw.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && inputValue) {
      const exchangeRate = data.krw.usd;
      const convertedValue = (parseFloat(inputValue) * 1) / exchangeRate;
      setResult(convertedValue.toFixed(2));
    } else {
      setResult("");
    }
  }, [data, inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSwap = () => {
    // 굳이 swap 기능이 필요할까..?
    setIsSwap(!isSwap);
  };

  return (
    <>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <div>달러</div>
      </div>
      <div>
        <div>{result}</div>
        <div>원</div>
      </div>
      <button onClick={handleSwap}>swap</button>
    </>
  );
};

export default Exchange;
