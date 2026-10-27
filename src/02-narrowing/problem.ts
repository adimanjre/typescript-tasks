// Level 2 — Unions, narrowing, discriminated unions
// Read README.md first. Edit this file only.

// ---------------------------------------------------------------------------
// Task 1 — assertNever
// ---------------------------------------------------------------------------
// TODO: this must accept ONLY `never`.

export function assertNever(value: unknown): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
}

// ---------------------------------------------------------------------------
// Task 2 — AsyncState
// ---------------------------------------------------------------------------
// TODO: replace with a union discriminated on `status`.

export type AsyncState<T> = unknown;

export function render(state: AsyncState<string>): string {
  throw new Error("TODO: implement render");
}

// ---------------------------------------------------------------------------
// Task 3 — counter reducer
// ---------------------------------------------------------------------------

export type CounterState = { count: number };

// TODO: replace with a union discriminated on `type`.
export type CounterAction = unknown;

export function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  throw new Error("TODO: implement counterReducer");
}

// ---------------------------------------------------------------------------
// Task 4 — format
// ---------------------------------------------------------------------------

export function format(value: string | number | Date | null | undefined): string {
  throw new Error("TODO: implement format");
}

// ---------------------------------------------------------------------------
// Task 5 — Shape
// ---------------------------------------------------------------------------
// TODO: replace with a union discriminated on `kind`.

export type Shape = unknown;

export function area(shape: Shape): number {
  throw new Error("TODO: implement area");
}
