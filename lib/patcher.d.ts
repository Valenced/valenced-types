import { b as UnpatchFunction, c as HookPriority, l as InsteadHook, n as AfterHook, r as BeforeHook, s as HookOptions, y as UnknownFunction } from "../types-B-daZwj8.js";
//#region lib/patcher/src/hooks/after.d.ts
/**
 * After hooks allow you to modify the return value of the original function, or to perform some action after the original function is called.
 *
 * ```js
 * import { after } from '#lib/patcher'
 *
 * const obj = {
 *     method: (a) => a * 2
 * }
 *
 * after(obj, 'method', (result) => {
 *     console.log('After method called with result:', result)
 *     // Modify return value
 *     return result + 1
 * })
 *
 * console.log(obj.method(2)) // 5
 * // CONSOLE OUTPUT:
 * // After method called with result: 4
 * // 5
 * ```
 *
 * @param parent The parent object containing the method to patch.
 * @param key The key of the method to patch.
 * @param hook The hook function to execute after the original method.
 * @param options Optional configuration including priority.
 *
 * @returns A function to unpatch.
 */
export declare function after<Parent extends Record<Key, UnknownFunction>, Key extends keyof Parent>(parent: Parent, key: Key, hook: AfterHook<Parent[Key]>, options?: HookOptions): UnpatchFunction;
//#endregion
//#region lib/patcher/src/hooks/before.d.ts
/**
 * Before hooks allow you to modify the arguments passed to the original function, or to perform some action before the original function is called.
 *
 * ```js
 * import { before } from '#lib/patcher'
 *
 * const obj = {
 *     method: (a) => console.log('Original method called with:', a)
 * }
 *
 * before(obj, 'method', ([a]) => {
 *     console.log('Before method called with:', a)
 *     // Modify arguments by returning new array
 *     return [a + 1]
 * })
 *
 * obj.method(2)
 * // CONSOLE OUTPUT:
 * // Before method called with: 2
 * // Original method called with: 3
 * ```
 *
 * @param parent The parent object containing the method to patch.
 * @param key The key of the method to patch.
 * @param hook The hook function to execute before the original method.
 * @param options Optional configuration including priority.
 *
 * @returns A function to unpatch.
 */
export declare function before<Parent extends Record<Key, UnknownFunction>, Key extends keyof Parent>(parent: Parent, key: Key, hook: BeforeHook<Parent[Key]>, options?: HookOptions): UnpatchFunction;
//#endregion
//#region lib/patcher/src/hooks/instead.d.ts
/**
 * Instead hooks allow you to completely replace the original function with a new one, while still being able to call the original function if needed.
 *
 * ```js
 * import { instead } from '#lib/patcher'
 *
 * const obj = {
 *     method: (a) => {
 *         console.log('Original method called with:', a)
 *         return 'original result'
 *     }
 * }
 *
 * instead(obj, 'method', ([a], original) => {
 *     console.log('Instead method called with:', a)
 *     // Call the original function if needed
 *     const originalResult = original('modified')
 *     console.log('Original method was called')
 *
 *     // Return a new value
 *     return 'new value'
 * })
 *
 * console.log(obj.method('test')) // 'new value'
 * // CONSOLE OUTPUT:
 * // Instead method called with: test
 * // Original method called with: modified
 * // Original method was called
 * // new value
 * ```
 *
 * @param parent The parent object containing the method to patch.
 * @param key The key of the method to patch.
 * @param hook The hook function to execute instead of the original method.
 * @param options Optional configuration including priority.
 *
 * @return A function to unpatch.
 */
export declare function instead<Parent extends Record<Key, UnknownFunction>, Key extends keyof Parent>(parent: Parent, key: Key, hook: InsteadHook<Parent[Key]>, options?: HookOptions): UnpatchFunction;
//#endregion
export { type HookOptions, HookPriority };