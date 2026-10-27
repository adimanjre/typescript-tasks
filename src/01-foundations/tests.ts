// Type tests for Level 1. Do not edit.
// A compile error here is a failing test.

import type { Equal, Expect } from "../_lib/expect";
import { clamp, swap, ROUTES, first, greet, joinPath } from "./problem";
import type { RouteName, RoutePath } from "./problem";

// --- Task 1 ----------------------------------------------------------------
type _c1 = Expect<Equal<ReturnType<typeof clamp>, number>>;

// --- Task 2 ----------------------------------------------------------------
const swapped = swap(["a", 1] as [string, number]);
type _s1 = Expect<Equal<typeof swapped, [number, string]>>;

const swapped2 = swap([true, { id: 1 }] as [boolean, { id: number }]);
type _s2 = Expect<Equal<typeof swapped2, [{ id: number }, boolean]>>;

// @ts-expect-error a three-element tuple is not a pair
swap([1, 2, 3] as [number, number, number]);

// --- Task 3 ----------------------------------------------------------------
type _r1 = Expect<Equal<RouteName, "home" | "login" | "profile">>;
type _r2 = Expect<Equal<RoutePath, "/" | "/login" | "/users/:id">>;
type _r3 = Expect<Equal<(typeof ROUTES)["login"], "/login">>;

// ROUTES must be deeply readonly
// @ts-expect-error cannot assign to a readonly property
ROUTES.home = "/somewhere-else";

// --- Task 4 ----------------------------------------------------------------
const f1 = first([1, 2, 3]);
type _f1 = Expect<Equal<typeof f1, number | undefined>>;

const f2 = first(["a", "b"] as const);
type _f2 = Expect<Equal<typeof f2, "a" | "b" | undefined>>;

// --- Task 5 ----------------------------------------------------------------
type _g1 = Expect<Equal<ReturnType<typeof greet>, string>>;
greet("Aditya");
greet("Aditya", "Hi");

// @ts-expect-error name is required
greet();
// @ts-expect-error greeting must be a string
greet("Aditya", 1);

joinPath("/api");
joinPath("/api", "users", "1");

// @ts-expect-error at least one segment is required
joinPath();
