import { useReducer, useState, useEffect } from "react";
import { LayoutContext, LayoutState } from "./LayoutContext";
import { layoutReducer } from "./layoutReducer";

const INITIAL_STATE: LayoutState = {
  collapsed: false,
  toggled: false,
  broken: false,
  rtl: false,
  hasImage: false,
  theme: "light",
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const LayoutProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(layoutReducer, INITIAL_STATE);
  const [themeIsDark, setThemeIsDark] = useState(state.theme === "dark");

  const switchCollapsed = () => dispatch({ type: "collapsed" });
  const switchToggled = () => dispatch({ type: "toggled" });
  const switchBroken = () => dispatch({ type: "broken" });
  const switchRtl = () => dispatch({ type: "rtl" });
  const switchHasImage = () => dispatch({ type: "hasImage" });
  const switchTheme = (theme: "light" | "dark") =>
    dispatch({ type: "theme", payload: theme });

  useEffect(() => {
    setThemeIsDark(state.theme === "dark");
  }, [state.theme]);

  return (
    <LayoutContext.Provider
      value={{
        ...state,
        switchCollapsed,
        switchToggled,
        switchBroken,
        switchRtl,
        switchHasImage,
        switchTheme,
        themeIsDark,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
