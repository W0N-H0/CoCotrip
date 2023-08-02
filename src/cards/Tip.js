import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const TipWrap = styled.div`
  width: 630px;
  height: 370px;
  border-radius: 30px;
  background: #cce6cd;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

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
    <TipWrap>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <div>
        <button onClick={() => handleDiscount(0.1)}>10%</button>
        <button onClick={() => handleDiscount(0.15)}>15%</button>
        <button onClick={() => handleDiscount(0.2)}>20%</button>
      </div>
      <div>{result}원</div> {/* 원부분 props로 받아서 해당 국가 통화로 변경 */}
    </TipWrap>
  );
};

export default Tip;
