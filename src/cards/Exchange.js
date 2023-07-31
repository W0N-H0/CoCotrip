import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

const ExchangeWrap = styled.div`
  width:554px;
  height:370px;
  border-radius: 30px;
  background: #E0D4E2;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.20);
  > h1 {
      color: #CCA7D2;
      font-family: Inter;
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
  > div {
    display:flex;
    > input {
      width: 360px;
      height: 60px;
      border-radius: 30px;
      background: #FFF;
       box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }
    > .changeBtn {
      width: 112px;
      height: 60px;
      display:flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      background: #FFF;
      box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.20);
      cursor:pointer;
      > span {
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.44px;
      }
    }
  }
  > .exchangeBtnWrap {
    > .exchangeBtn {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background: #EA5130;
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.40) inset; 
    }
    > .exchangeText {
      width: 112px;
      height: 40px;
      background: #EA5130;
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.40) inset;
      border-radius:100px; 
    }
  }
  > h2 {
    color: #A28BA6;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 150%; /* 21px */
    letter-spacing: -0.154px;
  }
`
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
    <ExchangeWrap>
      <h1>환율</h1>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <div className="changeBtn">
          <span> ₩ (원) </span>
        </div>
      </div>

      <div className="exchangeBtnWrap">
        <button className="exchangeBtn">
          <img src="/images/exchange.png" alt="변환버튼" />
        </button>
        <button onClick={handleSwap} className="exchangeText"> exchange </button>
      </div>

      <div>
        <div>{result}</div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <div className="changeBtn">
          <span> $ (달러) </span>
        </div>
      </div>
      <h2>실시간 환율이 아니니 주의 바랍니다.</h2>
    </ExchangeWrap>
  );
};

export default Exchange;
