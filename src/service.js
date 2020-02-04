// const STANDARD_DRINK_G = 10;
const METABOLIC_REMOVAL_RATE_GPH = 7.9; // in g/hr
const WATER_CONTENT_OF_BLOOD = 0.8157;
const ALCOHOL_SPECIFIC_GRAVITY = 0.79;

// const STANDARD_DRINK_ML = STANDARD_DRINK_G / ALCOHOL_SPECIFIC_GRAVITY;
const METABOLIC_REMOVAL_RATE_MLPH = METABOLIC_REMOVAL_RATE_GPH / ALCOHOL_SPECIFIC_GRAVITY;

function rupCalcRemaining(ingested, elapsedTimeHours) {
  return ingested - METABOLIC_REMOVAL_RATE_MLPH * elapsedTimeHours;
}

function rupCalcBodyWater(height, weight, age, sex) {
  const HEIGHT_FACTOR = sex ? 0.1069 : 0.1074;
  const WEIGHT_FACTOR = sex ? 0.2466 : 0.3362;
  const AGE_FACTOR = sex ? 0 : 0.09516;
  const BODY_WATER_CONST = sex ? 2.097 : 2.447;
  const h = HEIGHT_FACTOR * height;
  const w = WEIGHT_FACTOR * weight;
  const a = AGE_FACTOR * age;
  return (h - a + w + BODY_WATER_CONST) * 1000;
}

// Result in % g/ml
function rupCalcBac(alcoholMl, bodyWaterMl) {
  const bloodMl = bodyWaterMl / WATER_CONTENT_OF_BLOOD;
  const alcoholGrams = alcoholMl * ALCOHOL_SPECIFIC_GRAVITY;
  return 100 * (alcoholGrams / bloodMl);
}

// // BAC in % g/ml
function rupCalcAlcoholRemainingFromBAC(bac, bodyWaterMl) {
  const bloodMl = bodyWaterMl / WATER_CONTENT_OF_BLOOD;
  const alcoholGrams = (bloodMl * bac) / 100;
  return alcoholGrams / ALCOHOL_SPECIFIC_GRAVITY;
}

// BAC in % g/ml
function rupCalcMinutesFromBac(bac, bodyWaterMl) {
  if (bac <= 0) return 0;
  const alcoholMl = rupCalcAlcoholRemainingFromBAC(bac, bodyWaterMl);
  return Math.ceil((alcoholMl * 60) / METABOLIC_REMOVAL_RATE_MLPH);
}

function rupAlcoholMlInDrinks({ drink, beer, amount, wine, cup }) {
  let volume = 0,
    level = 0;
  if (drink.type === "beer") {
    let beers = beer.value.split("-");
    volume = beers[0];
    level = beers[1];
  } else {
    volume = wine.value;
    level = cup.value;
  }
  return amount * volume * level * 0.01;
}

export const calcResult = infors => {
  const { age, height, sex, time, weight } = infors;

  const ingestedMl = rupAlcoholMlInDrinks(infors);

  const outputIngestedMl = Math.round(ingestedMl * 100) / 100;

  let outputRemainingMl = 0.0,
    outputBAC = 0.0,
    minutesToOhFive = 0;
  if (ingestedMl === 0.0) {
    outputRemainingMl = 0.0;
    outputBAC = 0.0;
    minutesToOhFive = 0;
  } else {
    const elapsedTime = +time / 60;
    outputRemainingMl = rupCalcRemaining(ingestedMl, elapsedTime);
    if (outputRemainingMl < 0) {
      outputRemainingMl = 0;
    }
    const bodyWaterMl = rupCalcBodyWater(height, weight, age, sex);

    const bac = rupCalcBac(outputRemainingMl, bodyWaterMl);

    outputRemainingMl = Math.round(outputRemainingMl * 100) / 100;
    outputBAC = Math.round(bac * 1000) / 1000;

    minutesToOhFive = rupCalcMinutesFromBac(outputBAC, bodyWaterMl);
  }

  return {
    outputIngestedMl, // Đã nốc vào
    outputRemainingMl, // Còn lại trong cơ thể
    outputBAC, // Nồng độ cồn trong máu
    minutesToOhFive, // Thời gian nghỉ ngơi để hết men
    time: time
  };
};
