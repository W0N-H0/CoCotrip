import React, { useState, useEffect } from "react";

// 여기서 추가할꺼는, 단위 원 말고, 나라 선택시 props를 받아서 해당 국가의 통화로 표시해야함
const Tip = () => {
  const [inputValue, setInputValue] = useState("");
  const [discountRate, setDiscountRate] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDiscount = (rate) => {
    setDiscountRate(rate);
  };

  useEffect(() => {
    setResult(inputValue * discountRate);
  }, [discountRate]);

  return (
    <>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <div>
        <button onClick={() => handleDiscount(0.1)}>10%</button>
        <button onClick={() => handleDiscount(0.15)}>15%</button>
        <button onClick={() => handleDiscount(0.2)}>20%</button>
      </div>
      <div>{result}원</div> {/* 원부분 props로 받아서 해당 국가 통화로 변경 */}
    </>
  );
};

export default Tip;
