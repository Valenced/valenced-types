import { a as AnyObject } from "../../types-DEG71kQs.js";
import { JsonStorage, JsonStorageOptions } from "../json-storage.js";
//#region lib/json-storage/src/types.d.ts
declare module '@valenced/plugins/types' {
  interface UnscopedPreInitPluginApi {
    jsonStorage: typeof import('#lib/json-storage');
  }
  interface PluginApiExtensionsOptions {
    jsonStorage?: AnyObject;
  }
  interface PluginOptions<O extends PluginApiExtensionsOptions> {
    jsonStorage?: JsonStorageOptions<NonNullable<O['jsonStorage']>> & {
      /**
       * File name (or relative path) of the storage document inside the
       * plugin's storage directory.
       *
       * @default 'storage.json'
       */
      file?: string;
    };
  }
  interface InitPluginApi<O extends PluginApiExtensionsOptions> {
    /**
     * The plugin JSON storage.
     */
    jsonStorage: JsonStorage<NonNullable<O['jsonStorage']>>;
  }
}