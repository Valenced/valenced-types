import { n as Metro } from "./types-DEG71kQs.js";
import { t as ReactNative } from "./types-DF_Zi2C5.js";
import { a as PackagerAsset, i as CustomAsset, n as AssetId, o as RegisterableAsset, r as AssetOverride, t as Asset } from "./types-wMXAdSQk.js";
//#region lib/assets/src/preinit.d.ts
/**
 * If you need to use this ID during `preInit`, unproxify {@link AssetsRegistry} first.
 *
 * ```js
 * preInit() {
 *   unproxify(AssetsRegistry)
 *   // Module ID will now be set!
 *   AssetsRegistryModuleId // ...
 * }
 * ```
 */
declare let AssetsRegistryModuleId: Metro.ModuleID | undefined;
declare let AssetsRegistry: ReactNative.AssetsRegistry;
//#endregion
//#region lib/assets/src/index.d.ts
/**
 * Set the preferred asset type. This is used to determine which asset to use when multiple types are available.
 *
 * @param type The preferred asset type.
 */
declare function setPreferredAssetType(type: Asset['type']): void;
/**
 * Yields all assets, both packager and custom.
 */
declare function getAssets(): Generator<Asset>;
/**
 * Yields all registered custom assets.
 */
declare function getCustomAssets(): Generator<CustomAsset>;
/**
 * Yields all registered packager assets, including ones with same name but different types.
 */
declare function getPackagerAssets(): Generator<PackagerAsset>;
/**
 * Get an asset by its name.
 * If more than one asset is registered with the same name, this will return the one with the preferred type, or the first registered one.
 *
 * @param name The asset name.
 * @param type The preferred asset type, defaults to the current preferred type.
 */
declare function getAssetByName(name: string, type?: Asset['type']): Asset | undefined;
/**
 * Gets all assets matching the name.
 *
 * @param name The asset name.
 * @returns A record keyed by the type of the asset, with the value being the asset itself.
 */
declare function getAssetsByName(name: string): Record<Asset['type'], Asset> | undefined;
/**
 * Get an asset ID by its name.
 *
 * If more than one asset is registered with the same name, this will return the one with the preferred type.
 *
 * Unless **explicitly** calling with a preferred type,
 * another asset with type mismatching the {@link setPreferredAssetType current preferred type} may be returned as a fallback.
 *
 * @param name The asset name.
 * @param type The preferred asset type, defaults to the current preferred type.
 */
declare function getAssetIdByName(name: string, type?: Asset['type']): AssetId | undefined;
/**
 * Register an asset with the given name.
 *
 * @param asset The asset to register.
 * @returns The asset ID.
 */
declare function registerAsset(asset: RegisterableAsset): AssetId;
/**
 * Override an asset with another source.
 *
 * Overriding by name needs no asset module initialized, and also covers assets registered later.
 * An override for the asset object wins over one for its name.
 *
 * @param asset The asset, or the asset name, to override.
 * @param override The source to use instead.
 */
declare function addAssetOverride(asset: Asset | Asset['name'], override: AssetOverride): void;
/**
 * Remove an asset override.
 *
 * @param asset The asset, or the asset name, to remove the override for.
 * @returns Whether an override was removed.
 */
declare function removeAssetOverride(asset: Asset | Asset['name']): boolean;
type AssetRegisteredCallback = (asset: Asset) => void;
/**
 * Registers a callback called when any asset is registered.
 *
 * Runs inside `registerAsset`, before the asset module returns, so the asset is not used yet.
 *
 * @param callback The callback to be called.
 * @returns A function that unregisters the callback.
 */
declare function onAnyAssetRegistered(callback: AssetRegisteredCallback): () => void;
/**
 * Registers a callback called when an asset with the given name is registered.
 *
 * Runs inside `registerAsset`, before the asset module returns, so the asset is not used yet.
 * Assets of different types can share a name, so this may run more than once.
 *
 * @param name The asset name.
 * @param callback The callback to be called.
 * @returns A function that unregisters the callback.
 */
declare function onAssetRegistered(name: Asset['name'], callback: AssetRegisteredCallback): () => void;
//#endregion
export { getAssets as a, getPackagerAssets as c, registerAsset as d, removeAssetOverride as f, AssetsRegistryModuleId as h, getAssetIdByName as i, onAnyAssetRegistered as l, AssetsRegistry as m, addAssetOverride as n, getAssetsByName as o, setPreferredAssetType as p, getAssetByName as r, getCustomAssets as s, AssetRegisteredCallback as t, onAssetRegistered as u };