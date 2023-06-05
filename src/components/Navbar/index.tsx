import { Typography } from "@mui/material";
import { useContext } from "react";
import { LayoutContext } from "../../context";
import AccountSettings from "../Account";
import { StyledLogo, StyledNavbar } from "./StyledComponents";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { broken, switchToggled, themeIsDark } = useContext(LayoutContext);

  return (
    <StyledNavbar theme={themeIsDark}>
      {broken ? (
        <StyledLogo
          onClick={switchToggled}
          style={{
            boxShadow: "3px 3px 4px 0px rgba(0,0,0, 0.5)",
            height: "1.5em",
            width: "1.5em",
          }}
        >
          <span style={{ marginTop: "-0.2em" }}>
            <img src={logo} alt="logo" width={"30px"} />
          </span>
        </StyledLogo>
      ) : (
        <div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            padding={1}
            marginRight={1}
            fontSize={"0.9em"}
          >
            Municipalidad de San Martín de los Andes
          </Typography>
        </div>
      )}

      <AccountSettings />
    </StyledNavbar>
  );
};

export default Navbar;
