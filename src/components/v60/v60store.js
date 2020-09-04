import { writable } from "svelte/store";

let waterAmount = writable(250);
let coffeeAmount = writable(15);
let waterAsMultipleOfCoffee = writable(16.66666666666667);
// This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

export { waterAmount, coffeeAmount, waterAsMultipleOfCoffee };