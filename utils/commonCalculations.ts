export function roundAccurately(num: number, decimalPlaces: number) {
  return Number(
    Math.round(Number(num + "e" + decimalPlaces)) + "e" + decimalPlaces * -1
  );
}

// Metabolic Weight (MW)
// Weight in kg
export const mw = (petWeightInKg: number) => petWeightInKg ^ 0.75;

// RER - Resting Energy Requirement
export const rer = (petWeightInKg: number) => 70 * (petWeightInKg ^ 0.75);

// MER - Maintenance Energy Requirement
export const mer = (multiplier: number, rer: number) => multiplier * rer;

// Daily Caloric Needs
export const kcalPerDay = (kg: number) => Math.round(100 * Math.pow(kg, 0.67));

//Nutrient Calculations:

// EXAMPLE
// Pig Tail Example DM/Nutrient
// DRY MATTER
// 100 - 46 (water in g) = 54% DRY MATTER

// BY NUTRIENT
// P: 17.75g P (Dry Matter): 17.75 / 54 * 100 = 33%
// F: 33.50g F (Dry Matter):  33.5 / 54 * 100 = 62%
// Rest of weight in minerals or ash

// Dry Matter Calculation
export const percentDryMatter = (moistureInGrams: number) =>
  roundAccurately(100 - moistureInGrams, 2);

//Dry Matter (DM) weight (%) of nutrients
export const percentNutrientDM = (nutrient: number, percentDryMatter: number) =>
  roundAccurately((nutrient / percentDryMatter) * 100, 2);

// Caloric Basis Calculation
// grams/1000 kcal = 1000 kcal / energy (kcal/100 grams)

// EXAMPLE
// Pig Tail Example Caloric Basis
// 1000 / 378 (calories) = 2.646kcal

export const caloricBasis = (totalEnergyKcal: number) =>
  roundAccurately(1000 / totalEnergyKcal, 2);

export const caloriesByNutrient = (totalEnergyKcal: number, nutrient: number) =>
  roundAccurately(caloricBasis(totalEnergyKcal) * nutrient, 2);

// % of Calories from nutrient
// EXAMPLE
// Pig Tail Example % of Calories
// P Calories: 17.75 * 4 (Atwater) = 71kcal
// F Calories: 33.50 * 9 (Atwater) = 302kcal
// Total Calories: 378kcal

// Energy (kcal) in food (kcal/gram)
export const nutrientCalories = (nutrientWeight: number, atwater: number) =>
  roundAccurately(nutrientWeight * atwater, 2);

// Percentage Calories from Protein:  71 / 378 = 19%
// Percentage Calories from Fat:     302 / 378 = 80%

export const percentageCalories = (
  nutrientEnergy: number,
  totalEnergyKcal: number
) => nutrientEnergy / totalEnergyKcal;

// "Dry Matter" to "As Fed"
// % As Fed = % Nutrient (dry) * (% Dry Matter (DM)/100)

// EXAMPLE
// Pig Tail Example "As Fed"
// P (As Fed): .54 (DM) * .33 = 17.82%
// F (As Fed): .54 (DM) * .62 = 33.48%

export const asFed = (percentNutrientDM: number, percentDryMatter: number) =>
  roundAccurately((percentNutrientDM * percentDryMatter) / 100, 2);
