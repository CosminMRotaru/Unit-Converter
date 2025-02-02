let convertBtn = document.getElementById("convertBtn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.785;
const kiloToPound = 2.204;
const poundToKilo = 0.4536;
convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    3
  )} meters`;
  volumeEl.textContent = `${baseValue} litres = ${(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonToLiter
  ).toFixed(3)} litres`;
  massEl.textContent = `${baseValue} kgs = ${(baseValue * kiloToPound).toFixed(
    3
  )} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(
    3
  )} kgs`;
});
