import { useContext } from "react";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { LayoutContext } from "../../context";
import Switch from "../Switch";
import { StyledSwitchContainer } from "./StyledComponents";

const SidebarPreferences = () => {
  const {
    switchCollapsed,
    collapsed,
    rtl,
    switchRtl,
    theme,
    switchTheme,
    hasImage,
    switchHasImage,
  } = useContext(LayoutContext);

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switchTheme(e.target.checked ? "dark" : "light");
  };
  return (
    <SubMenu label="Preferencias" icon={<RoomPreferencesIcon />}>
      <MenuItem>
        <StyledSwitchContainer>
          <Switch
            id="theme"
            checked={theme === "dark"}
            onChange={handleThemeChange}
            label="Cambiar tema"
          />
        </StyledSwitchContainer>
      </MenuItem>
      <MenuItem>
        <StyledSwitchContainer>
          <Switch
            id="image"
            checked={hasImage}
            onChange={switchHasImage}
            label="Image"
          />
        </StyledSwitchContainer>
      </MenuItem>
      <MenuItem>
        <StyledSwitchContainer>
          <Switch
            id="rtl"
            checked={rtl}
            onChange={switchRtl}
            label="Posición"
          />
        </StyledSwitchContainer>
      </MenuItem>
      <MenuItem>
        <StyledSwitchContainer>
          <Switch
            id="collapse"
            checked={collapsed}
            onChange={switchCollapsed}
            label="Colapsar"
          />
        </StyledSwitchContainer>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarPreferences;
