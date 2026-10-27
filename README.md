# TypeScript Mastery Track

A graded problem set. You solve; the compiler grades.

## Running

```bash
npm run check        # type tests — every error is a failing test
npm run check:watch  # same, live
npm test             # runtime tests (vitest)
```

**You only ever edit `problem.ts` files.** `tests.ts` and `*.test.ts` are the
graders — leave them alone. If you think a test is wrong, say so; sometimes
it will be.

## How a level works

Each `src/NN-name/` folder has:

- `README.md` — the requirements and the ideas being drilled
- `problem.ts` — stubs with `TODO`s, the only file you touch
- `tests.ts` — type-level assertions; a compile error here is a failed test
- `problem.test.ts` — runtime assertions, where behaviour matters

A level is done when `npm run check` and `npm test` are both clean.

## Reading the type tests

```ts
type _x = Expect<Equal<A, B>>;   // fails to compile unless A and B are identical
expectType<string>()(value);     // fails unless `value` is exactly string
// @ts-expect-error  reason      // fails unless the NEXT line is an error
```

That last one is easy to misread: `@ts-expect-error` reports
`Unused '@ts-expect-error' directive` when the line below it **compiles**.
So "unused directive" means *your types are too loose*.

## The track

| # | Level | Focus |
|---|-------|-------|
| 1 | `01-foundations` | inference, literal widening, `as const`, tuples |
| 2 | `02-narrowing` | unions, control-flow narrowing, discriminated unions |
| 3 | `03-objects` | structural typing, index signatures, optionality |
| 4 | generics I | constraints, `keyof`, `T[K]`, inferred helpers |
| 5 | functions deep | overloads, `this`, variance, typed event emitter |
| 6 | `unknown` & guards | `x is T`, `asserts x is T`, parsing untrusted data |
| 7 | mapped & conditional | rebuild `Partial`/`Omit`/`ReturnType`, `infer` |
| 8 | template literals | `Paths<T>`, `GetByPath<T,P>`, typed `t()` |
| 9 | hard edges | variance, branded types, `satisfies`, recursion |
| 10 | declaration files | `.d.ts`, `declare module`, augmentation |
| 11 | React + TS | generic props, hooks, context, typed Redux |
| 12 | **the conversion** | `listing.js` → strict `listing.tsx` |
| 13 | capstone | a zod-lite schema builder that *infers* its output |

Levels 4+ are generated as you clear the one before, so difficulty can track
how you're actually doing. See `PROGRESS.md`.

## Rules of engagement

- Attempt before asking. Stuck is fine — stuck for 20 minutes is the point.
- Ask for a **hint** first; ask for the solution second.
- `any` is never the answer. If you reach for it, that's the interesting moment.
- Hover everything in your editor. If the hover surprises you, dig in.
