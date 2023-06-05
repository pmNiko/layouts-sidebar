import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StyledFooter = styled(Box)<{ theme: boolean }>`
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${({ theme }) =>
    theme ? `background-color: #0b2948;` : `background-color: #2ea3f2;`}
`;
