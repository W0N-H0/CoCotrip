import React, { useState, useRef } from "react";
import { styled } from "styled-components";

const DiscountRateWrap = styled.div`
  width: 630px;
  height: 370px;
  border-radius: 30px;
  background: #fee5dd;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;
// 할인율 입력하는 인풋박스를 div태그로 만든 버전
const DiscountRate = () => {
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const percentageRef = useRef(null);

  const calculateDiscount = () => {
    const discountAmount = (amount * percentage) / 100;
    const totalAmount = amount - discountAmount;
    setDiscountAmount(discountAmount);
    setTotalAmount(totalAmount);
  };

  const handlePercentageChange = () => {
    const newPercentage = parseInt(percentageRef.current.textContent, 10);
    setPercentage(newPercentage);
  };

  const handleCalculate = () => {
    calculateDiscount();
  };

  return (
    <DiscountRateWrap>
      <div>할인율</div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div
          contentEditable
          onBlur={handlePercentageChange}
          ref={percentageRef}
        >
          {percentage}%
        </div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <div>
        <div>할인액: {discountAmount}</div>
        <div>총액: {totalAmount}</div>
      </div>
    </DiscountRateWrap>
  );
};

export default DiscountRate;
