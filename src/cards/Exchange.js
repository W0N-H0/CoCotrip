import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

const ExchangeWrap = styled.div`
  width: 630px;
  height: 370px;
  border-radius: 30px;
  padding: 20px;
  background: #e0d4e2;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
  > h1 {
    font: bold 35px Nanum Gothic;
    background-color: #6d4374;
    color: transparent;
    text-shadow: 3px 3px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    margin: 20px 0px 30px 20px;
  }
  > .inputContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
    > input {
      width: 370px;
      height: 60px;
      border-radius: 30px;
      background: #fff;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
      border: none;
      font-size: 25px;
      padding-left: 25px;
    }
    > .unitWrap {
      width: 150px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;

      background: #fff;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
      border: none;
      > span {
        color: #000;
        font-size: 20px;
        font-style: normal;

        font-weight: 700;
        letter-spacing: -0.44px;
      }
    }
  }
  > .exchangeBtnWrap {
    display: flex;
    margin: 10px 20px 10px 180px;
    justify-content: space-between;
    > .exchangeBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      border-radius: 50px;
      background: #ea5130;
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4) inset;
      border: none;
    }
    > .exchangeText {
      width: 140px;
      height: 45px;
      background: #ea5130;
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4) inset;
      border: none;
      border-radius: 100px;
      font-family: "Nanum Gothic";
      font-size: 16px;
      color: white;
      font-weight: 900;
      &:hover {
        box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.9) inset;
      }
      &:active {
        box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.9) inset;
      }
    }
  }
  > h2 {
    color: #a28ba6;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 150%; /* 21px */
    letter-spacing: -0.154px;
    margin: 25px 0 0 180px;
  }
`;

// 여기서 Main 컴포넌트에서 받은 국가 명을 props로 전달받아
// exchangeRate 부분과 단위 정도만 수정해주면 됨
const Exchange = ({ flag, currency }) => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [isSwap, setIsSwap] = useState("false");
  const [isExchanged, setIsExchanged] = useState(false);

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
      const exchangeRate = data.krw[currency.base];
      const convertedValue = (parseFloat(inputValue) * 1) / exchangeRate;
      setResult(
        convertedValue
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    } else {
      setResult("");
    }
  }, [data, isExchanged, flag]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSwap = () => {
    // 굳이 swap 기능이 필요할까..?
    setIsSwap(!isSwap);
  };

  const handleExchange = () => {
    setIsExchanged(!isExchanged);
  };

  return (
    <ExchangeWrap>
      <h1>환율</h1>

      <div className="inputContainer">
        <input type="number" value={inputValue} onChange={handleInputChange} />

        <div className="unitWrap">
          <span>
            {currency.sign} ({currency.kr})
          </span>
        </div>
      </div>

      <div className="exchangeBtnWrap">
        <button className="exchangeBtn">
          <img src="/images/exchange.png" alt="변환버튼" />
        </button>
        <button className="exchangeText" onClick={handleExchange}>
          exchange
        </button>
      </div>

      <div className="inputContainer">
        <input type="text" value={result} />
        <div className="unitWrap">
          <span>₩ (원)</span>
        </div>
      </div>
      <h2>실시간 환율이 아니니 주의 바랍니다.</h2>
    </ExchangeWrap>
  );
};

export default Exchange;
