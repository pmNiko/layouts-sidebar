import styled from "@emotion/styled";

export const StyledLayoutContainer = styled.div<{
  rtl?: boolean;
  themeIsDark: boolean;
}>`
  display: flex;
  height: 100vh;
  ${({ themeIsDark }) =>
    themeIsDark && `background-color: rgba(11, 41, 72,0.9)`};
  ${({ rtl }) => (rtl ? `direction: rtl` : `direction: ltr`)};
`;

export const StyledBodyContainer = styled.div`
  width: 100%;
`;
