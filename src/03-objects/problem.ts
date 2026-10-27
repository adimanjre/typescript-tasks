// Level 3 — Objects, index signatures, optionality
// Read README.md first. Edit this file only.

// ---------------------------------------------------------------------------
// Task 1 — Point / distance
// ---------------------------------------------------------------------------
// TODO: declare Point as an interface with x and y.

export type Point = unknown;

export function distance(a: Point, b: Point): number {
  throw new Error("TODO: implement distance");
}

// ---------------------------------------------------------------------------
// Task 2 — AppConfig / mergeConfig
// ---------------------------------------------------------------------------

export interface AppConfig {
  apiUrl: string;
  timeoutMs: number;
  retries: number;
  debug: boolean;
}

// TODO: give `override` a type that allows any subset of AppConfig.
export function mergeConfig(base: AppConfig, override: unknown): AppConfig {
  throw new Error("TODO: implement mergeConfig");
}

// ---------------------------------------------------------------------------
// Task 3 — index signatures
// ---------------------------------------------------------------------------
// TODO: keys "GET" | "POST" | "PUT" | "DELETE", values number.

export type MethodCounts = unknown;

export function sumValues(scores: Record<string, number>): number {
  throw new Error("TODO: implement sumValues");
}

export function pluck(record: Record<string, string>, key: string): string {
  throw new Error("TODO: implement pluck");
}

// ---------------------------------------------------------------------------
// Task 4 — Settings / SettingsPatch
// ---------------------------------------------------------------------------
// TODO: optional theme + locale. Settings rejects an explicit `undefined`;
// SettingsPatch accepts it.

export type Settings = unknown;
export type SettingsPatch = unknown;

// ---------------------------------------------------------------------------
// Task 5 — User / renameUser
// ---------------------------------------------------------------------------
// TODO: readonly id (number), mutable name (string), readonly array of tags.

export type User = unknown;

export function renameUser(user: User, name: string): User {
  throw new Error("TODO: implement renameUser");
}
