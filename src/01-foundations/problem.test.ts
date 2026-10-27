import { describe, expect, it } from "vitest";
import { clamp, swap, first, greet, joinPath } from "./problem";

describe("level 1", () => {
  it("clamp", () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("swap", () => {
    expect(swap(["a", 1] as [string, number])).toEqual([1, "a"]);
  });

  it("first", () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first([])).toBeUndefined();
  });

  it("greet", () => {
    expect(greet("Aditya")).toBe("Hello, Aditya");
    expect(greet("Aditya", "Hi")).toBe("Hi, Aditya");
  });

  it("joinPath", () => {
    expect(joinPath("/api")).toBe("/api");
    expect(joinPath("/api", "users", "1")).toBe("/api/users/1");
  });
});
