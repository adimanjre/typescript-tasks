# Level 1 — Inference, literals, tuples

**Goal:** understand what TypeScript infers *for you*, and when it quietly
widens a type into something less useful than what you wrote.

Run `npm run check` (types) and `npm test` (runtime). Every error is a failing
test. Edit **only** `problem.ts`.

---

## Task 1 — `clamp` (warm-up)

Signature is given. Implement the body so `clamp(15, 0, 10) === 10`.

## Task 2 — `swap`

`swap(["a", 1])` must return `[1, "a"]`, and the compiler must *know* the
result is `[number, string]` — not `(string | number)[]`.

You'll need a generic function with a tuple parameter type. Note the
difference between `[A, B]` (a tuple: fixed length, position-aware) and
`(A | B)[]` (an array). This distinction trips up most people.

## Task 3 — `ROUTES`

`ROUTES` is declared below. Right now TypeScript infers every value as
`string`, because object properties are **mutable**, so a literal like `"/"`
widens to `string`. Make it stop, then derive two types from the value:

- `RouteName` — the union of the keys
- `RoutePath` — the union of the values

Deriving types *from a value* (rather than declaring the type separately and
keeping them in sync by hand) is one of the highest-value habits in TS.

Hints: `as const`, `typeof`, `keyof`.

## Task 4 — `first`

`first([1, 2, 3])` returns `1`; `first([])` returns `undefined`. The return
type must be `number | undefined`.

While implementing this you'll meet `noUncheckedIndexedAccess` (on in our
`tsconfig.json`): `arr[0]` has type `T | undefined`, not `T`, because TS has
no idea whether index 0 exists. Most tutorials have this flag off and teach
you a lie. Live with it — it catches real bugs.

## Task 5 — `greet` and `joinPath`

- `greet("Aditya")` → `"Hello, Aditya"`
- `greet("Aditya", "Hi")` → `"Hi, Aditya"`
- `greet()` must be a **compile error**
- `joinPath("/api", "users", "1")` → `"/api/users/1"`
- `joinPath("/api")` → `"/api"`, `joinPath()` must be a **compile error**

Covers optional params, default values, and rest params.

---

### Things to notice when you're done

- Hover every value in `tests.ts` in VS Code. If the hover doesn't say what
  you expected, you don't understand it yet — that's the real lesson.
- `let x = "a"` infers `string`, but `const x = "a"` infers `"a"`. Why?
