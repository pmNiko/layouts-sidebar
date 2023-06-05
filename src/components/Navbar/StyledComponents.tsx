import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StyledNavbar = styled(Box)<{ theme: boolean }>`
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) =>
    theme ? `background-color: #0b2948;` : `background-color: #2ea3f2;`}
`;

export const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;
