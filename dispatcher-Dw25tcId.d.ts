import { G as DiscordModules } from "./types-DEG71kQs.js";
//#region lib/discord/src/flux/dispatcher.d.ts
type FluxEventDispatchPatch<T extends object = object> = (payload: DiscordModules.Flux.DispatcherPayload & T) => (DiscordModules.Flux.DispatcherPayload & T) | undefined | void;
/**
 * Registers a patch for all Flux events.
 *
 * @see {@link onFluxEventDispatched} for more details.
 *
 * @param patch The patch function to apply when any Flux event is dispatched.
 * @returns A function that can be used to remove the patch.
 */
declare function onAnyFluxEventDispatched(patch: FluxEventDispatchPatch): () => void;
/**
 * Registers a patch for a specific Flux event type.
 * @param type The type of the Flux event to patch.
 * @param patch The patch function to apply when the event is dispatched.
 * @returns A function that can be used to remove the patch.
 *
 * @example Blocking the dispatch
 * ```ts
 * // Returning falsy values will prevent the event from being dispatched.
 * onFluxEventDispatched('TYPING_START', () => {})
 * ```
 *
 * @example Modifying the payload
 * ```ts
 * onFluxEventDispatched('TYPING_START', payload => {
 *   // Send the typing event to this channel instead.
 *   payload.channelId = '123456789012345678'
 *   // Make sure to return the modified payload!
 *   return payload
 * })
 * ```
 *
 * @example Reading and passing through the payload
 * ```ts
 * onFluxEventDispatched('TYPING_START', payload => {
 *   console.log('Typing started:', payload)
 *   // Do nothing, just return the payload.
 *   return payload
 * })
 * ```
 */
declare function onFluxEventDispatched<T extends object = object>(type: DiscordModules.Flux.DispatcherPayload['type'], patch: FluxEventDispatchPatch<T>): () => void;
//#endregion
export { onAnyFluxEventDispatched as n, onFluxEventDispatched as r, FluxEventDispatchPatch as t };