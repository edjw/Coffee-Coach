import { writable } from "svelte-persistent-store/dist/local";
let waterAmount = writable("waterAmount", 250);
let coffeeAmount = writable("coffeeAmount", 15);
let waterAsMultipleOfCoffee = writable("waterAsMultipleOfCoffee", 16.66666666666667);
// This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

let currentCalculator = writable("currentCalculator", "coffeeFirst")

export { waterAmount, coffeeAmount, waterAsMultipleOfCoffee, currentCalculator };