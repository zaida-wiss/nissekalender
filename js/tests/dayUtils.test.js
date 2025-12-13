import { describe, it, expect } from "vitest";
import { getToday } from "../data/dayUtils.js";

describe("getToday", () => {
  it("returnerar dagens datum i formatet YYYY-MM-DD", () => {
    const today = getToday();
    expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});