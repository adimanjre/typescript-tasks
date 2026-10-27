import { describe, expect, it } from "vitest";
import { distance, mergeConfig, sumValues, pluck, renameUser } from "./problem";

describe("level 3", () => {
  it("distance", () => {
    expect(distance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5);
  });

  it("mergeConfig", () => {
    const base = { apiUrl: "/api", timeoutMs: 5000, retries: 3, debug: false };
    expect(mergeConfig(base, { timeoutMs: 100 })).toEqual({
      apiUrl: "/api",
      timeoutMs: 100,
      retries: 3,
      debug: false,
    });
    expect(base.timeoutMs).toBe(5000); // must not mutate
  });

  it("sumValues", () => {
    expect(sumValues({ a: 1, b: 2, c: 3 })).toBe(6);
    expect(sumValues({})).toBe(0);
  });

  it("pluck", () => {
    expect(pluck({ a: "x" }, "a")).toBe("x");
    expect(pluck({ a: "x" }, "missing")).toBe("");
  });

  it("renameUser", () => {
    const u = { id: 1, name: "old", tags: ["a"] };
    const renamed = renameUser(u, "new");
    expect(renamed).toEqual({ id: 1, name: "new", tags: ["a"] });
    expect(u.name).toBe("old"); // must not mutate
  });
});
