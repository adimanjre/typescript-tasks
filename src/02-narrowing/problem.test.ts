import { describe, expect, it } from "vitest";
import { render, counterReducer, format, area } from "./problem";

describe("level 2", () => {
  it("render covers every state", () => {
    expect(render({ status: "idle" })).toBe("Nothing yet");
    expect(render({ status: "loading" })).toBe("Loading...");
    expect(render({ status: "success", data: "hello" })).toBe("hello");
    expect(render({ status: "error", error: "boom" })).toBe("Error: boom");
  });

  it("counterReducer", () => {
    expect(counterReducer({ count: 0 }, { type: "increment" })).toEqual({ count: 1 });
    expect(counterReducer({ count: 5 }, { type: "decrement" })).toEqual({ count: 4 });
    expect(counterReducer({ count: 5 }, { type: "add", amount: 10 })).toEqual({ count: 15 });
    expect(counterReducer({ count: 5 }, { type: "reset" })).toEqual({ count: 0 });
  });

  it("counterReducer does not mutate", () => {
    const state = { count: 1 };
    counterReducer(state, { type: "increment" });
    expect(state.count).toBe(1);
  });

  it("format", () => {
    expect(format(null)).toBe("—");
    expect(format(undefined)).toBe("—");
    expect(format(new Date("2026-10-25T13:45:00Z"))).toBe("2026-10-25");
    expect(format(3.5)).toBe("3.50");
    expect(format("  spaced  ")).toBe("spaced");
  });

  it("area", () => {
    expect(area({ kind: "square", size: 3 })).toBe(9);
    expect(area({ kind: "rectangle", width: 2, height: 5 })).toBe(10);
    expect(area({ kind: "circle", radius: 2 })).toBeCloseTo(Math.PI * 4);
  });
});
