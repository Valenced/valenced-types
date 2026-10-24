import { G as DiscordModules, dt as noop } from "./types-DEG71kQs.js";
declare namespace index_d_exports {
  export { SettingsItem, SettingsModulesLoadedSubscription, SettingsSection, addSettingsItemToSection, isSettingsModulesLoaded, onSettingsModulesLoaded, refreshSettings, registerSettingsItem, registerSettingsItems, registerSettingsSection };
}
type SettingsItem = DiscordModules.Modules.Settings.SettingsItem;
type SettingsSection = DiscordModules.Modules.Settings.SettingsSection;
type SettingsModulesLoadedSubscription = () => void;
/**
 * Checks if the settings modules are loaded.
 */
declare function isSettingsModulesLoaded(): boolean;
/**
 * Subscribes to when settings modules are loaded.
 * Plugins should ideally register their settings in the given callback to ensure fast startup time.
 *
 * If settings modules are already loaded, the callback will be called immediately.
 *
 * @param subcription The subscription function to call when the settings modules are loaded.
 * @returns A function to unsubscribe from the event.
 */
declare function onSettingsModulesLoaded(subcription: SettingsModulesLoadedSubscription): typeof noop;
/**
 * Registers a settings section with a given key.
 *
 * @param key The key to register the settings section with.
 * @param section The settings section to register.
 * @returns A function to unregister the settings section.
 */
declare function registerSettingsSection(key: string, section: SettingsSection): () => void;
/**
 * Registers a settings item with a given key.
 *
 * @param key The key to register the settings item with.
 * @param item The settings item to register.
 * @returns A function to unregister the settings item.
 */
declare function registerSettingsItem(key: string, item: SettingsItem): () => void;
/**
 * Registers multiple settings items at once.
 *
 * @param record The settings items to register.
 * @returns A function to unregister the settings items.
 */
declare function registerSettingsItems(record: Record<string, SettingsItem>): () => void;
/**
 * Adds a settings item to an existing section.
 *
 * @param key The section to add the settings item to.
 * @param item The settings item to add.
 * @param index The index to insert the settings item at. Defaults to -1 (end of the section).
 * @returns A function to remove the settings item from the section.
 */
declare function addSettingsItemToSection(key: string, item: string, index?: number): () => void;
/**
 * Adds a settings item to an existing section.
 *
 * @param key The section to add the settings item to.
 * @param fn A function that takes the current settings items and returns the new settings items. Removing items will result in an error.
 * @returns A function to remove the settings items from the section.
 */
declare function addSettingsItemToSection(key: string, fn: (items: string[]) => string[]): () => void;
/**
 * Refreshes the settings UI.
 */
declare function refreshSettings(): void;
//#endregion
export { index_d_exports as a, refreshSettings as c, registerSettingsSection as d, addSettingsItemToSection as i, registerSettingsItem as l, SettingsModulesLoadedSubscription as n, isSettingsModulesLoaded as o, SettingsSection as r, onSettingsModulesLoaded as s, SettingsItem as t, registerSettingsItems as u };