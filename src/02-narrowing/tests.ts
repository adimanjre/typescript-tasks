// Type tests for Level 2. Do not edit.

import type { Equal, Expect } from "../_lib/expect";
import { expectType } from "../_lib/expect";
import { assertNever, render, counterReducer, format, area } from "./problem";
import type { AsyncState, CounterAction, CounterState, Shape } from "./problem";

// --- Task 1 ----------------------------------------------------------------
type _a1 = Expect<Equal<Parameters<typeof assertNever>[0], never>>;

// Note: `ReturnType<typeof assertNever>` resolves to `any` here, not `never` --
// a function taking `never` fails the `(...args: any) => infer R` check,
// because `any` is assignable to everything except `never`. So we check the
// type at a call site instead. (You will meet this again in Level 5.)
declare const nothing: never;
const assertNeverResult = assertNever(nothing);
type _a2 = Expect<Equal<typeof assertNeverResult, never>>;

// @ts-expect-error assertNever accepts only `never`
assertNever("hello");

// --- Task 2 ----------------------------------------------------------------
const s1: AsyncState<string> = { status: "idle" };
const s2: AsyncState<string> = { status: "loading" };
const s3: AsyncState<string> = { status: "success", data: "hi" };
const s4: AsyncState<string> = { status: "error", error: "boom" };

// @ts-expect-error "success" must carry data
const s5: AsyncState<string> = { status: "success" };
// @ts-expect-error "pending" is not a valid status
const s6: AsyncState<string> = { status: "pending" };
// @ts-expect-error data must match the type parameter
const s7: AsyncState<number> = { status: "success", data: "hi" };
// @ts-expect-error "idle" carries no data
const s8: AsyncState<number> = { status: "idle", data: 1 };

export function narrowingProbe(state: AsyncState<number>): void {
  if (state.status === "success") {
    expectType<number>()(state.data);
    // @ts-expect-error `error` does not exist on the success variant
    state.error;
  }
  if (state.status === "error") {
    expectType<string>()(state.error);
  }
}

type _r1 = Expect<Equal<ReturnType<typeof render>, string>>;

// --- Task 3 ----------------------------------------------------------------
const a1: CounterAction = { type: "increment" };
const a2: CounterAction = { type: "decrement" };
const a3: CounterAction = { type: "reset" };
const a4: CounterAction = { type: "add", amount: 5 };

// @ts-expect-error "add" requires an amount
const a5: CounterAction = { type: "add" };
// @ts-expect-error "increment" takes no amount
const a6: CounterAction = { type: "increment", amount: 5 };
// @ts-expect-error unknown action type
const a7: CounterAction = { type: "multiply", amount: 2 };

type _c1 = Expect<Equal<ReturnType<typeof counterReducer>, CounterState>>;

// --- Task 4 ----------------------------------------------------------------
type _f1 = Expect<Equal<ReturnType<typeof format>, string>>;

// @ts-expect-error booleans are not formattable
format(true);

// --- Task 5 ----------------------------------------------------------------
const sh1: Shape = { kind: "circle", radius: 2 };
const sh2: Shape = { kind: "square", size: 3 };
const sh3: Shape = { kind: "rectangle", width: 2, height: 5 };

// @ts-expect-error a circle has no size
const sh4: Shape = { kind: "circle", size: 2 };
// @ts-expect-error rectangle needs both dimensions
const sh5: Shape = { kind: "rectangle", width: 2 };
// @ts-expect-error triangle is not in the union
const sh6: Shape = { kind: "triangle", base: 1, height: 2 };

type _sh = Expect<Equal<ReturnType<typeof area>, number>>;
