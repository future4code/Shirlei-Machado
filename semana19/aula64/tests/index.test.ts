import { validateCharacter } from "../src";

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for empty life", () => {
  const result = validateCharacter({
    name: "",
    life: undefined,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for empty strength ", () => {
  const result = validateCharacter({
    name: "",
    life: 0,
    strength: undefined,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for empty defense ", () => {
  const result = validateCharacter({
    name: "",
    life: 0,
    strength: undefined,
    defense: undefined,
  });

  expect(result).toBe(false);
});

test("Should return false for empty defense negative ", () => {
  const result = validateCharacter({
    name: "",
    life: 0,
    strength: undefined,
    defense:-10,
  });

  expect(result).toBe(false);
});

test("Should return true for life 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});

test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});