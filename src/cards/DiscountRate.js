import React, { useState, useRef } from "react";

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
    <>
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
    </>
  );
};

export default DiscountRate;
