import { writable, readable } from "svelte-persistent-store/dist/local";

// Aeropress
let aeropress = {
  waterAsMultipleOfCoffee: readable(
    "aeropressWaterAsMultipleOfCoffee",
    14.66666666666667
  ),
  // This is equivalent to 15g coffee to 220g water (220 ÷ 15: 14.67)

  waterAmount: writable("aeropressWaterAmount", 220),
  coffeeAmount: writable("aeropressCoffeeAmount", 15),

  grindSize: writable("aeropressGrindSize", ""),

  currentCalculator: writable("aeropressCurrentCalculator", "coffeeFirst"),
};

// Clever
let clever = {
  waterAsMultipleOfCoffee: readable(
    "cleverWaterAsMultipleOfCoffee",
    16.66666666666667
  ),
  // This is equivalent to 30g coffee to 500g water (500 ÷ 30: 16.67)

  waterAmount: writable("cleverWaterAmount", 250),
  coffeeAmount: writable("cleverCoffeeAmount", 15),

  grindSize: writable("cleverGrindSize", ""),

  currentCalculator: writable("cleverCurrentCalculator", "coffeeFirst"),
};

// French Press
let frenchPress = {
  waterAsMultipleOfCoffee: readable(
    "frenchPressWaterAsMultipleOfCoffee",
    16.66666666666667
  ),
  // This is equivalent to 30g coffee to 500g water (500 ÷ 30: 16.67)

  waterAmount: writable("frenchPressWaterAmount", 500),
  coffeeAmount: writable("frenchPressCoffeeAmount", 30),
  grindSize: writable("frenchPressGrindSize", ""),

  currentCalculator: writable("frenchPressCurrentCalculator", "coffeeFirst"),
};

// Pourover Scott Rao
let pouroverScottRao = {
  waterAsMultipleOfCoffee: readable(
    "pouroverScottRaoWaterAsMultipleOfCoffee",
    17
  ),
  // This is equivalent to 20g coffee to 340g water (340 ÷ 20: 17)

  waterAmount: writable("pouroverScottRaoWaterAmount", 340),
  coffeeAmount: writable("pouroverScottRaoCoffeeAmount", 20),
  grindSize: writable("pouroverScottGrindSize", ""),
  currentCalculator: writable(
    "pouroverScottRaoCurrentCalculator",
    "coffeeFirst"
  ),
};

// v60

let v60 = {
  waterAsMultipleOfCoffee: readable(
    "v60WaterAsMultipleOfCoffee",
    16.66666666666667
  ),
  // This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

  waterAmount: writable("v60WaterAmount", 250),
  coffeeAmount: writable("v60CoffeeAmount", 15),
  grindSize: writable("v60GrindSize", ""),

  currentCalculator: writable("v60CurrentCalculator", "coffeeFirst"),
};

export { aeropress, clever, frenchPress, pouroverScottRao, v60 };
