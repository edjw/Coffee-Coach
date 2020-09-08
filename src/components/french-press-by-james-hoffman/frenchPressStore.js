import { writable } from "svelte-persistent-store/dist/local";

let waterAsMultipleOfCoffee = writable("frenchPressWaterAsMultipleOfCoffee", 16.66666666666667);
// This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

let waterAmount = writable("frenchPressWaterAmount", 500);
let coffeeAmount = writable("frenchPressCoffeeAmount", 30);

let currentCalculator = writable("frenchPressCurrentCalculator", "coffeeFirst")

export { waterAmount, coffeeAmount, waterAsMultipleOfCoffee, currentCalculator };