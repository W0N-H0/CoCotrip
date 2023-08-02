import 미국 from "./imgs/미국.gif";
import 일본 from "./imgs/일본.gif";
import 중국 from "./imgs/중국.gif";
import 필리핀 from "./imgs/필리핀.gif";
import 베트남 from "./imgs/베트남.gif";
import 태국 from "./imgs/태국.gif";
import 싱가포르 from "./imgs/싱가포르.gif";
import 인도네시아 from "./imgs/인도네시아.gif";
import 캐나다 from "./imgs/캐나다.gif";
import 말레이시아 from "./imgs/말레이시아.gif";
import 미얀마 from "./imgs/미얀마.gif";
import 오스트리아 from "./imgs/오스트리아.gif";
import 독일 from "./imgs/독일.gif";
import 인도 from "./imgs/인도.gif";

const country = [
  {
    name: "미국",
    url: 미국,
    tip: true,
    currency: { base: "usd", kr: "달러", sign: "＄" },
  },
  {
    name: "일본",
    url: 일본,
    tip: false,
    currency: { base: "jpy", kr: "엔", sign: "￥" },
  },
  {
    name: "중국",
    url: 중국,
    tip: false,
    currency: { base: "cny", kr: "위안", sign: "￥" },
  },
  {
    name: "필리핀",
    url: 필리핀,
    tip: true,
    currency: { base: "php", kr: "페소", sign: "₱" },
  },
  {
    name: "베트남",
    url: 베트남,
    tip: true,
    currency: { base: "vnd", kr: "동", sign: "₫" },
  },
  {
    name: "태국",
    url: 태국,
    tip: true,
    currency: { base: "thb", kr: "밧", sign: "฿" },
  },
  {
    name: "싱가포르",
    url: 싱가포르,
    tip: true,
    currency: { base: "sgd", kr: "달러", sign: "S$" },
  },
  {
    name: "인도네시아",
    url: 인도네시아,
    tip: false,
    currency: { base: "idr", kr: "루피아", sign: "Rp" },
  },
  {
    name: "캐나다",
    url: 캐나다,
    tip: true,
    currency: { base: "cad", kr: "달러", sign: "CA$" },
  },
  {
    name: "말레이시아",
    url: 말레이시아,
    tip: true,
    currency: { base: "myr", kr: "링깃", sign: "RM" },
  },
  {
    name: "미얀마",
    url: 미얀마,
    tip: true,
    currency: { base: "mmk", kr: "짯", sign: "KS" },
  },
  {
    name: "오스트리아",
    url: 오스트리아,
    tip: true,
    currency: { base: "aud", kr: "실링", sign: "S" },
  },
  {
    name: "독일",
    url: 독일,
    tip: true,
    currency: { base: "eur", kr: "유로", sign: "€" },
  },
  {
    name: "인도",
    url: 인도,
    tip: false,
    currency: { base: "inr", kr: "루피", sign: "₹" },
  },
];

export default country;
