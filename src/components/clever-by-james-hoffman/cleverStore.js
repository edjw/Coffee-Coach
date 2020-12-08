import { writable, readable } from "svelte-persistent-store/dist/local";

let waterAsMultipleOfCoffee = readable(
  "cleverWaterAsMultipleOfCoffee",
  16.66666666666667
);
// This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

let waterAmount = writable("cleverWaterAmount", 250);
let coffeeAmount = writable("cleverCoffeeAmount", 15);

let currentCalculator = writable("cleverCurrentCalculator", "coffeeFirst");

export {
  waterAmount,
  coffeeAmount,
  waterAsMultipleOfCoffee,
  currentCalculator,
};
