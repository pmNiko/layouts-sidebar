import { Theme } from "../interfaces";
import { LayoutState } from "./LayoutContext";

type LayoutActions =
  | { type: "collapsed" }
  | { type: "toggled" }
  | { type: "broken"; payload: boolean }
  | { type: "rtl" }
  | { type: "hasImage" }
  | { type: "theme"; payload: Theme };

export const layoutReducer = (
  state: LayoutState,
  action: LayoutActions
): LayoutState => {
  switch (action.type) {
    case "collapsed":
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case "toggled":
      return {
        ...state,
        toggled: !state.toggled,
      };
    case "broken":
      return {
        ...state,
        broken: action.payload,
      };
    case "rtl":
      return {
        ...state,
        rtl: !state.rtl,
      };
    case "hasImage":
      return {
        ...state,
        hasImage: !state.hasImage,
      };
    case "theme":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
