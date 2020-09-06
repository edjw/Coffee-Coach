import { writable } from "svelte-persistent-store/dist/local";

let waterAsMultipleOfCoffee = writable("waterAsMultipleOfCoffee", 16.66666666666667);
// This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

let waterAmount = writable("waterAmount", 250);
let coffeeAmount = writable("coffeeAmount", 15);

let currentCalculator = writable("currentCalculator", "coffeeFirst")

// import { writable } from 'svelte/store';

// let waterAsMultipleOfCoffee = writable(16.66666666666667);
// let waterAmount = writable(250);
// let coffeeAmount = writable(15);

// let currentCalculator = writable("coffeeFirst")

export { waterAmount, coffeeAmount, waterAsMultipleOfCoffee, currentCalculator };