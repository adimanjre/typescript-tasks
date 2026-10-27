// Type tests for Level 3. Do not edit.

import type { Equal, Expect } from "../_lib/expect";
import { expectType } from "../_lib/expect";
import { distance, mergeConfig, sumValues, pluck, renameUser } from "./problem";
import type {
  AppConfig,
  MethodCounts,
  Point,
  Settings,
  SettingsPatch,
  User,
} from "./problem";

// --- Task 1 ----------------------------------------------------------------
type _p1 = Expect<Equal<Point, { x: number; y: number }>>;

const vec = { x: 1, y: 2, z: 3 };
distance(vec, vec); // structural typing: extra `z` on a variable is fine

// @ts-expect-error excess property check fires on a fresh object literal
distance({ x: 1, y: 2, z: 3 }, vec);
// @ts-expect-error y is missing
distance({ x: 1 }, vec);

// --- Task 2 ----------------------------------------------------------------
declare const baseConfig: AppConfig;

expectType<AppConfig>()(mergeConfig(baseConfig, {}));
mergeConfig(baseConfig, { timeoutMs: 100 });
mergeConfig(baseConfig, { debug: true, retries: 0 });

// @ts-expect-error wrong value type
mergeConfig(baseConfig, { timeoutMs: "100" });
// @ts-expect-error unknown key
mergeConfig(baseConfig, { nope: 1 });

// --- Task 3 ----------------------------------------------------------------
type _m1 = Expect<
  Equal<MethodCounts, { GET: number; POST: number; PUT: number; DELETE: number }>
>;

declare const counts: MethodCounts;
expectType<number>()(counts.GET);

// @ts-expect-error PATCH is not one of the four methods
counts.PATCH;

const score = ({} as Record<string, number>)["anything"];
type _m2 = Expect<Equal<typeof score, number | undefined>>;

type _m3 = Expect<Equal<ReturnType<typeof sumValues>, number>>;
type _m4 = Expect<Equal<ReturnType<typeof pluck>, string>>;

// --- Task 4 ----------------------------------------------------------------
const set1: Settings = {};
const set2: Settings = { theme: "dark" };
const set3: Settings = { theme: "light", locale: "en-IN" };

// @ts-expect-error Settings does not accept an explicit undefined
const set4: Settings = { theme: undefined };
// @ts-expect-error not a valid theme
const set5: Settings = { theme: "solarized" };

const patch1: SettingsPatch = { theme: undefined };
const patch2: SettingsPatch = { locale: undefined };
const patch3: SettingsPatch = {};
const patch4: SettingsPatch = { theme: "dark" };

// @ts-expect-error still has to be a valid theme
const patch5: SettingsPatch = { theme: "solarized" };

// --- Task 5 ----------------------------------------------------------------
declare const user: User;

expectType<number>()(user.id);
expectType<string>()(user.name);

user.name = "renamed"; // mutable

// @ts-expect-error id is readonly
user.id = 2;
// @ts-expect-error tags is a readonly array
user.tags.push("new");
// @ts-expect-error tags itself is readonly
user.tags = [];

type _u1 = Expect<Equal<ReturnType<typeof renameUser>, User>>;
