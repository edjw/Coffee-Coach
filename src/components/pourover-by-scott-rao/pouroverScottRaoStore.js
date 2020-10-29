import { writable, readable } from "svelte-persistent-store/dist/local";

let waterAsMultipleOfCoffee = readable(
  "pouroverScottRaoWaterAsMultipleOfCoffee",
  17
);
// This is equivalent to 20g coffee to 340g water (340 ÷ 20 = 17)

let waterAmount = writable("pouroverScottRaoWaterAmount", 340);
let coffeeAmount = writable("pouroverScottRaoCoffeeAmount", 20);

let currentCalculator = writable(
  "pouroverScottRaoCurrentCalculator",
  "coffeeFirst"
);

export {
  waterAmount,
  coffeeAmount,
  waterAsMultipleOfCoffee,
  currentCalculator,
};
