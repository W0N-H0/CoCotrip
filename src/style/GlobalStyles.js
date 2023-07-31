import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
      text-decoration:none;
      color:inherit;
    }
     *{
        box-sizing: border-box;
    }
    body{
      font-family:"Nanum Gothic", "Bagel Fat One";
      font-size: 14px;
    }

    code {
      font-family: "source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New",
      monospace;
}
`;

export default GlobalStyles;
