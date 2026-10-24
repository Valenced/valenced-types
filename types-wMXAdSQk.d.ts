import { n as Metro } from "./types-DEG71kQs.js";
import { t as ReactNative } from "./types-DF_Zi2C5.js";
//#region lib/assets/src/types.d.ts
type Asset = PackagerAsset | CustomAsset;
type AssetId = number;
type PackagerAsset = ReactNative.AssetsRegistry.PackagerAsset;
interface CustomAsset extends Pick<PackagerAsset, 'name' | 'width' | 'height' | 'type' | 'id'> {
  uri: string;
  moduleId?: undefined;
}
type RegisterableAsset = Omit<CustomAsset, 'id'>;
/** Source used in place of an asset. Dimensions default to the original asset's. */
interface AssetOverride {
  /** Any URI React Native can load, eg. `file://`, `https://` or `data:`. */
  uri: string;
  width?: number;
  height?: number;
  scale?: number;
}
declare module '@valenced/react/types' {
  namespace ReactNative {
    namespace AssetsRegistry {
      interface PackagerAsset {
        id: AssetId;
        moduleId: Metro.ModuleID;
      }
    }
  }
}
//#endregion
export { PackagerAsset as a, CustomAsset as i, AssetId as n, RegisterableAsset as o, AssetOverride as r, Asset as t };