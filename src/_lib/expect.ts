/**
 * Type-level assertion toolkit.
 *
 * These are your "tests". They have no runtime behaviour at all — a failing
 * assertion is a *compile error*. Run `npm run check` to see them.
 */

/**
 * True only if X and Y are *identical* types.
 *
 * Note this is stricter than `X extends Y`: `Equal<string, "a">` is false,
 * and unlike a naive check it correctly distinguishes `any` from everything.
 * (The two-function trick relies on how TS compares deferred conditionals.)
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

export type NotEqual<X, Y> = Equal<X, Y> extends true ? false : true;

/** Compile error unless T is exactly `true`. This is the workhorse. */
export type Expect<T extends true> = T;

/** Compile error unless T is exactly `false`. */
export type ExpectFalse<T extends false> = T;

/** True if T is `any`. Useful for proving you did NOT accidentally return `any`. */
export type IsAny<T> = 0 extends 1 & T ? true : false;

/** True if T is `never`. */
export type IsNever<T> = [T] extends [never] ? true : false;

/** Asserts a *value*'s type matches exactly: `expectType<string>()(myValue)`. */
export const expectType =
  <Expected>() =>
  <Actual extends Expected>(
    _actual: Actual & (Equal<Actual, Expected> extends true ? unknown : never),
  ): void => {};
