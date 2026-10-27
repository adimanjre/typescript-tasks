# Level 2 — Unions, narrowing, discriminated unions

**Goal:** stop using `any` for "this could be several shapes". This level is
the single highest-value pattern in frontend TypeScript — if you only ever
internalise one thing from this track, make it the discriminated union.

Edit **only** `problem.ts`.

---

## Task 1 — `assertNever`

A function that accepts **only** `never` and throws. Used in the `default`
branch of a `switch` to make the compiler prove you handled every case: if you
later add a variant to the union and forget a branch, the leftover type is no
longer `never` and `assertNever` stops compiling.

This is an exhaustiveness check at compile time, and it's why discriminated
unions beat `if/else` chains on `any`.

## Task 2 — `AsyncState<T>`

Model the four states of a data fetch as a union, discriminated on `status`:

| status      | extra fields      |
|-------------|-------------------|
| `"idle"`    | —                 |
| `"loading"` | —                 |
| `"success"` | `data: T`         |
| `"error"`   | `error: string`   |

Then write `render` that returns a string for each state. The point: after
`if (state.status === "success")`, `state.data` must be accessible **and**
typed `T` — and `state.error` must be a compile error. That's control-flow
narrowing doing the work your brain currently does.

> Compare this with what you probably write today:
> `{ data, loading, error }` all optional. That type permits
> `{ loading: true, error: "x", data: [...] }` — a state your UI can't
> actually render. A union makes impossible states unrepresentable.

## Task 3 — `CounterAction` + `counterReducer`

Actions: `increment`, `decrement`, `reset`, and `add` (which carries
`amount: number`). Write the reducer with an exhaustive `switch` ending in
`assertNever`.

`add` must require `amount`; `increment` must **reject** an `amount`. This is
exactly how you'd type a Redux slice or a `useReducer`.

## Task 4 — `format`

Signature is given; narrow inside the body. Rules:

- `null` or `undefined` → `"—"`
- `Date` → ISO date only, e.g. `"2026-10-25"`
- `number` → two decimals, e.g. `"3.50"`
- `string` → trimmed

Covers `typeof` narrowing, `instanceof` narrowing, and the `== null` trick
that catches both `null` and `undefined`.

## Task 5 — `Shape` + `area`

`circle` (`radius`), `square` (`size`), `rectangle` (`width`, `height`),
discriminated on `kind`. `area` returns the area, exhaustively.

---

### Things to notice when you're done

- `noFallthroughCasesInSwitch` and `noImplicitReturns` are on. If a `case`
  falls through or a branch forgets to return, you'll hear about it.
- Try adding a fifth shape to the union **without** touching `area`. The
  error you get is the whole point of this level.
