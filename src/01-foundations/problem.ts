// Level 1 — Inference, literals, tuples
// Read README.md first. Edit this file only.

// ---------------------------------------------------------------------------
// Task 1 — clamp
// ---------------------------------------------------------------------------

export function clamp(value: number, min: number, max: number): number {
  if (min < value && value < max) return value;
  if (value < min) return min;
  return max;
}

// ---------------------------------------------------------------------------
// Task 2 — swap
// ---------------------------------------------------------------------------
// TODO: make this generic over a two-element tuple.

export function swap<A, B>(pair: [A, B]): [B, A] {
  const [a, b] = pair;
  return [b, a];
}

// ---------------------------------------------------------------------------
// Task 3 — ROUTES
// ---------------------------------------------------------------------------
// TODO: stop the literal types from widening to `string`.

export const ROUTES = {
  home: "/",
  login: "/login",
  profile: "/users/:id",
};

// TODO: derive these from the value of ROUTES. Do not hand-write the unions.
export type RouteName = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteName];

// ---------------------------------------------------------------------------
// Task 4 — first
// ---------------------------------------------------------------------------

export function first<T>(arr: [T]): T {
  const [a, ...rest] = arr;
  return a;
}

// ---------------------------------------------------------------------------
// Task 5 — greet / joinPath
// ---------------------------------------------------------------------------
// TODO: give these real parameter lists.

export function greet(...args: [string, string?]): string {
  if (!args) throw new Error("no parameters");
  const [first, second] = [...args];
  if (second) return `${second}, ${first}`;
  return `hello, ${first}`;
}

export function joinPath(...args: [string, ...string[]]): string {
  if (!args) throw new Error("no parameters");
  const [first, ...rest] = [...args];
  return `${first}${rest.join("/")}`;
}
