import React, { useContext } from "react";

import { LayoutContext } from "../../context";
import Typography from "../Typography";
import { StyledLogo, StyledSidebarHeader } from "./StyledComponents";
import logo from "../../assets/logo.png";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  title,
  ...rest
}) => {
  const { rtl, switchToggled } = useContext(LayoutContext);
  return (
    <StyledSidebarHeader {...rest}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "5em",
          marginTop: "-0.3em",
        }}
      >
        <StyledLogo
          rtl={rtl}
          style={{
            boxShadow: "3px 3px 4px 0px rgba(0,0,0, 0.3)",
            height: "1.5em",
            width: "1.5em",
          }}
        >
          <span style={{ marginTop: "-0.2em" }} onClick={switchToggled}>
            <img src={logo} alt="logo" width={"30px"} />
          </span>
        </StyledLogo>

        <Typography
          variant="subtitle1"
          fontSize={"1em"}
          fontWeight={700}
          color="#f1f1f1"
        >
          {title}
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
