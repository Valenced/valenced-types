import { G as DiscordModules } from "../types-DEG71kQs.js";
import FormSwitch from "./components/FormSwitch.js";
import Page from "./components/Page.js";
import SearchInput from "./components/SearchInput.js";
import TableRowAssetIcon from "./components/TableRowAssetIcon.js";
import { ReactNode } from "react";
import { ViewProps } from "react-native";
//#region lib/components/src/Checkbox.d.ts
/**
 * A checkbox component with disabled state support, wrapping Discord's component.
 */
declare function Checkbox({ disabled, ...rest }: DiscordModules.Components.CheckboxProps & {
  disabled?: boolean;
} & ViewProps): import("react").JSX.Element;
//#endregion
//#region lib/components/src/SheetHeader.d.ts
interface SheetHeaderProps {
  title: string;
  /** Shown on the other side of the title, such as a button. */
  action?: ReactNode;
  /**
   * Which side the title is on.
   * @default 'left'
   */
  aligned?: 'left' | 'right';
}
/** Sheet title with an optional action, an alternative to `Design.BottomSheetTitleHeader`. */
declare function SheetHeader({ title, action, aligned }: SheetHeaderProps): import("react").JSX.Element;
//#endregion
export { Checkbox, FormSwitch, Page, SearchInput, SheetHeader, TableRowAssetIcon };