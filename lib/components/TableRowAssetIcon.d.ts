import { G as DiscordModules } from "../../types-DEG71kQs.js";
//#region lib/components/src/TableRowAssetIcon.d.ts
export default function TableRowAssetIcon(props: TableRowAssetIconProps): import("react").JSX.Element;
export type TableRowAssetIconProps = Omit<DiscordModules.Components.TableRowIconProps, 'source'> & ({
  name: string;
  id?: never;
  IconComponent?: never;
} | {
  name?: never;
  id: number;
  IconComponent?: never;
} | {
  name?: never;
  id?: never;
  IconComponent: DiscordModules.Components.BaseIconImage;
});
//#endregion