# Level 3 — Objects, index signatures, optionality

**Goal:** model object shapes precisely, and understand three things that
surprise almost everyone: structural typing, excess property checks, and what
"optional" actually means.

Edit **only** `problem.ts`.

---

## Task 1 — `Point` and `distance`

Declare `Point` as an **interface** with `x` and `y`, then implement
`distance(a, b)`.

Then read the two tests carefully:

```ts
const v = { x: 1, y: 2, z: 3 };
distance(v, v);                  // OK  — structural typing
distance({ x: 1, y: 2, z: 3 }, v); // ERROR — excess property check
```

TypeScript is **structural**: a value is a `Point` if it has the right shape,
regardless of what it was declared as. But a *fresh object literal* gets an
extra check for unexpected properties, because an extra key in a literal is
almost always a typo rather than intent. Knowing which rule is firing saves
you a lot of confused staring.

## Task 2 — `AppConfig` and `mergeConfig`

`mergeConfig(base, override)` returns a complete config with the overrides
applied. `override` carries any subset of the fields.

Use the built-in `Partial<T>` for now — you'll **build it yourself** in
Level 7.

## Task 3 — index signatures

- `MethodCounts` — an object type whose keys are exactly `"GET" | "POST" |
  "PUT" | "DELETE"` and whose values are numbers.
- `sumValues(scores)` — sums all values of a `Record<string, number>`.
- `pluck(record, key)` — returns `record[key]`, falling back to `""`.

Note the difference: `Record<"GET" | "POST", number>` has **known** keys, so
`counts.GET` is `number`. `Record<string, number>` has **unknown** keys, so
under `noUncheckedIndexedAccess` `scores["anything"]` is `number | undefined`.
That is correct and the flag is doing you a favour.

## Task 4 — `Settings` vs `SettingsPatch`

Both have optional `theme: "light" | "dark"` and `locale: string`.

- `Settings` must **reject** `{ theme: undefined }`
- `SettingsPatch` must **accept** `{ theme: undefined }`

With `exactOptionalPropertyTypes` on, `theme?: "light" | "dark"` means *"the
key may be absent"* — not *"the key may be undefined"*. To allow an explicit
undefined you write `theme?: "light" | "dark" | undefined`.

This matters in real code: "the user didn't touch this field" and "the user
cleared this field" are different events, and most codebases conflate them.

## Task 5 — `User` and `renameUser`

`id` is readonly, `tags` is a readonly array, `name` is mutable.
`renameUser` returns a **new** user with the new name.

`readonly` is compile-time only — it does not call `Object.freeze`. It stops
*you* from writing the mutation, which is the bug you were going to ship.

---

### Things to notice when you're done

- `interface` and `type` are near-interchangeable for object shapes. Real
  differences: `interface` supports declaration merging (crucial in Level 10
  when you augment a library's types), `type` can express unions, tuples and
  mapped types. Use `interface` for object contracts, `type` for everything
  else — and don't lose sleep over it.
