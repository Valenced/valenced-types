//#region lib/patcher/src/types.d.ts
type FiniteDomain<Key extends PropertyKey> = unknown extends (Key extends unknown ? object extends Record<Key, unknown> ? unknown : never : never) ? never : Key;
type UnknownFunction = Callable | AbstractNewable;
type Callable<This = never, Args extends readonly unknown[] = never, Return = unknown> = (this: This, ...args: Args) => Return;
type AbstractNewable<Args extends readonly unknown[] = never, Return = unknown> = abstract new (...args: Args) => Return;
type ConcreteNewable<Args extends readonly unknown[] = never, Return = unknown> = new (...args: Args) => Return;
type UnionToIntersection<Union> = (Union extends unknown ? (arg: Union) => unknown : never) extends ((arg: infer Intersection) => unknown) ? Intersection & Union : never;
type BeforeHook<T extends UnknownFunction = UnknownFunction> = OverloadUnion<T> extends (infer U) ? 0 extends 1 & U ? (args: any) => any : UnionToIntersection<U extends Callable<never, infer Args> ? (args: Args) => Args : U extends ConcreteNewable<infer Args> ? (args: Args) => Args : never> : never;
type InsteadHook<T extends UnknownFunction = UnknownFunction> = OverloadUnion<T> extends (infer U) ? 0 extends 1 & U ? ((this: any, args: any[], originalFunction: T) => any) | (abstract new (args: any[], originalFunction: T) => any) : UnionToIntersection<U extends Callable<infer This, infer Args, infer Return> ? (this: This, args: Args, originalFunction: T) => Return : U extends ConcreteNewable<infer Args, infer Return> ? abstract new (args: Args, originalFunction: T) => Return : never> : never;
type AfterHook<T extends UnknownFunction = UnknownFunction> = OverloadUnion<T> extends (infer U) ? 0 extends 1 & U ? (result: any) => any : UnionToIntersection<U extends Callable<never, never, infer Return> ? (result: Return) => Return : U extends ConcreteNewable<never, infer Return> ? (result: Return) => Return : never> : never;
/** @see {@link https://github.com/microsoft/TypeScript/issues/32164#issuecomment-1146737709} */
type OverloadUnion<Overload extends UnknownFunction, PartialOverload = OmitOverloads<Overload>> = 0 extends 1 & Overload ? any : Overload extends Callable<infer CThis, infer CArgs, infer CReturn> ? Overload extends AbstractNewable<infer NArgs, infer NReturn> ? OverloadUnionCallableNewable<Overload, PartialOverload, Callable<CThis, CArgs, CReturn>, ConcreteNewable<NArgs, NReturn>> : OverloadUnionCallable<Overload, PartialOverload, Callable<CThis, CArgs, CReturn>> : Overload extends AbstractNewable<infer NArgs, infer NReturn> ? OverloadUnionNewable<Overload, PartialOverload, ConcreteNewable<NArgs, NReturn>> : never;
type OmitOverloads<T> = { [Key in keyof T]: T[Key]; };
type OverloadUnionCallableNewable<Overload extends Callable & AbstractNewable, PartialOverload, CurrentCallable extends Callable, CurrentNewable extends ConcreteNewable> = OverloadUnionCallableNewableInner<CurrentCallable & CurrentNewable & Overload, CurrentCallable & CurrentNewable & PartialOverload, CurrentCallable & CurrentNewable> | CurrentCallable | CurrentNewable;
type OverloadUnionCallableNewableInner<Overload extends Callable & AbstractNewable, PartialOverload, PreviousOverload extends Callable & ConcreteNewable> = PartialOverload extends Overload ? never : Overload extends Callable<infer CThis, infer CArgs, infer CReturn> ? Overload extends AbstractNewable<infer NArgs, infer NReturn> // Detects infinite recursion caused by generic overloads.
 ? Callable<CThis, CArgs, CReturn> & ConcreteNewable<NArgs, NReturn> extends PreviousOverload ? PreviousOverload extends Callable<CThis, CArgs, CReturn> & ConcreteNewable<NArgs, NReturn> ? any : OverloadUnionCallableNewable<Overload, PartialOverload, Callable<CThis, CArgs, CReturn>, ConcreteNewable<NArgs, NReturn>> : OverloadUnionCallableNewable<Overload, PartialOverload, Callable<CThis, CArgs, CReturn>, ConcreteNewable<NArgs, NReturn>> : never : never;
type OverloadUnionCallable<Overload extends Callable, PartialOverload, CurrentCallable extends Callable> = OverloadUnionCallableInner<CurrentCallable & Overload, CurrentCallable & PartialOverload, CurrentCallable> | CurrentCallable;
type OverloadUnionCallableInner<Overload extends Callable, PartialOverload, PreviousOverload extends Callable> = PartialOverload extends Overload ? never : Overload extends Callable<infer This, infer Args, infer Return> ? Callable<This, Args, Return> extends PreviousOverload ? PreviousOverload extends Callable<This, Args, Return> ? any : OverloadUnionCallable<Overload, PartialOverload, Callable<This, Args, Return>> : OverloadUnionCallable<Overload, PartialOverload, Callable<This, Args, Return>> : never;
type OverloadUnionNewable<Overload extends AbstractNewable, PartialOverload, CurrentNewable extends ConcreteNewable> = OverloadUnionNewableInner<CurrentNewable & Overload, CurrentNewable & PartialOverload, CurrentNewable> | CurrentNewable;
type OverloadUnionNewableInner<Overload extends AbstractNewable, PartialOverload, PreviousOverload extends ConcreteNewable> = PartialOverload extends Overload ? never : Overload extends AbstractNewable<infer Args, infer Return> ? ConcreteNewable<Args, Return> extends PreviousOverload ? PartialOverload extends ConcreteNewable<Args, Return> ? any : OverloadUnionNewable<Overload, PartialOverload, ConcreteNewable<Args, Return>> : OverloadUnionNewable<Overload, PartialOverload, ConcreteNewable<Args, Return>> : never;
type UnpatchFunction = () => void;
declare enum HookPriority {
  LOWEST = -1000,
  LOW = -500,
  NORMAL = 0,
  HIGH = 500,
  HIGHEST = 1000
}
interface HookOptions {
  priority?: number;
}
//#endregion
export { OverloadUnionNewableInner as _, ConcreteNewable as a, UnpatchFunction as b, HookPriority as c, OverloadUnion as d, OverloadUnionCallable as f, OverloadUnionNewable as g, OverloadUnionCallableNewableInner as h, Callable as i, InsteadHook as l, OverloadUnionCallableNewable as m, AfterHook as n, FiniteDomain as o, OverloadUnionCallableInner as p, BeforeHook as r, HookOptions as s, AbstractNewable as t, OmitOverloads as u, UnionToIntersection as v, UnknownFunction as y };