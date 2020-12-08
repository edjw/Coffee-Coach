import { writable, readable } from "svelte-persistent-store/dist/local";

let waterAsMultipleOfCoffee = readable(
  "aeropressWaterAsMultipleOfCoffee",
  14.66666666666667
);
// This is equivalent to 15g coffee to 220g water (220 ÷ 15 = 14.67)

let waterAmount = writable("aeropressWaterAmount", 220);
let coffeeAmount = writable("aeropressCoffeeAmount", 15);

let currentCalculator = writable("aeropressCurrentCalculator", "coffeeFirst");

export {
  waterAmount,
  coffeeAmount,
  waterAsMultipleOfCoffee,
  currentCalculator,
};
