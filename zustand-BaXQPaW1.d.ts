import * as Zustand from "zustand";
declare namespace vanilla_d_exports {
  export { ExtractState, Mutate, StateCreator, StoreApi, StoreMutatorIdentifier, StoreMutators, createStore };
}
type SetStateInternal<T> = {
  _(partial: T | Partial<T> | {
    _(state: T): T | Partial<T>;
  }['_'], replace?: false): void;
  _(state: T | {
    _(state: T): T;
  }['_'], replace: true): void;
}['_'];
interface StoreApi<T> {
  setState: SetStateInternal<T>;
  getState: () => T;
  getInitialState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
}
type ExtractState<S> = S extends {
  getState: () => infer T;
} ? T : never;
type Get<T, K, F> = K extends keyof T ? T[K] : F;
type Mutate<S, Ms> = number extends Ms['length' & keyof Ms] ? S : Ms extends [] ? S : Ms extends [[infer Mi, infer Ma], ...infer Mrs] ? Mutate<StoreMutators<S, Ma>[Mi & StoreMutatorIdentifier], Mrs> : never;
type StateCreator<T, Mis extends [StoreMutatorIdentifier, unknown][] = [], Mos extends [StoreMutatorIdentifier, unknown][] = [], U = T> = ((setState: Get<Mutate<StoreApi<T>, Mis>, 'setState', never>, getState: Get<Mutate<StoreApi<T>, Mis>, 'getState', never>, store: Mutate<StoreApi<T>, Mis>) => U) & {
  $$storeMutators?: Mos;
};
interface StoreMutators<S, A> {}
type StoreMutatorIdentifier = keyof StoreMutators<unknown, unknown>;
type CreateStore = {
  <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): Mutate<StoreApi<T>, Mos>;
  <T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) => Mutate<StoreApi<T>, Mos>;
};
declare const createStore: CreateStore;
declare namespace react_d_exports {
  export { UseBoundStore, create, useStore };
}
type ReadonlyStoreApi<T> = Pick<StoreApi<T>, 'getState' | 'getInitialState' | 'subscribe'>;
declare function useStore<S extends ReadonlyStoreApi<unknown>>(api: S): ExtractState<S>;
declare function useStore<S extends ReadonlyStoreApi<unknown>, U>(api: S, selector: (state: ExtractState<S>) => U): U;
type UseBoundStore<S extends ReadonlyStoreApi<unknown>> = {
  (): ExtractState<S>;
  <U>(selector: (state: ExtractState<S>) => U): U;
} & S;
type Create = {
  <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): UseBoundStore<Mutate<StoreApi<T>, Mos>>;
  <T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) => UseBoundStore<Mutate<StoreApi<T>, Mos>>;
};
declare const create: Create;
declare namespace zustand_d_exports {
  export { Zustand, react_d_exports as ZustandReact, vanilla_d_exports as ZustandVanilla };
}
//#endregion
export { vanilla_d_exports as i, zustand_d_exports as n, react_d_exports as r, Zustand as t };