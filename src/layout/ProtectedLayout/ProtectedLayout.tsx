import { useContext } from "react";
import { LayoutContext } from "../../context";
import {
  FixedContainer,
  Footer,
  Navbar,
  SidebarContainer,
} from "../../components";
import { LayoutProps } from "../../interfaces";
import {
  StyledBodyContainer,
  StyledLayoutContainer,
} from "../StyledComponents";

const ProtectedLayout = ({ children, version }: LayoutProps) => {
  const { rtl, themeIsDark } = useContext(LayoutContext);

  return (
    <>
      <StyledLayoutContainer rtl={rtl} themeIsDark={themeIsDark}>
        <SidebarContainer />

        <StyledBodyContainer>
          <Navbar />

          <FixedContainer>{children}</FixedContainer>
        </StyledBodyContainer>
      </StyledLayoutContainer>

      <Footer version={version} />
    </>
  );
};

export default ProtectedLayout;
