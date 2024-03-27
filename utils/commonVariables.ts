export const commonVars = {
  kgPerLb: 2.21,
  lbPerKg: 0.45,
  gPerOz: 28.35,
  mgPerG: 1000,
  gPerLb: () => commonVars.gPerOz * 16,
};

export const atwaterFactor = {
  proteinKcalPerG: 4,
  fatKcalPerG: 9,
  carbohydrateKcalPerG: 4,
};

// Commonly Used MER Multipliers:
export const merMultipliers = {
  avgNeutered: 1.6,
  avgIntact: 1.8,
  weightLoss: 1,
  weightGain: 1.7,
  lightWork: 2,
  moderateWork: 3,
  heavyWork: 6,
  growthLessThan4Months: 2,
  growthGreaterThan4Months: 3,
};

// Common Foods:
export const commonFoods = {
  bananaG: 75,
  eggNoShellOz: 1.76,
  eggNoShellG: 49.896,
  eggWShellOz: 2.01,
  eggWShellG: 56.9835,
  eggsPerWeek: 3,
  mackerelWeightOz: 35.2,
  fishOzPerWeek: 17.6,
  sardineOz: 5.5,
};

export const taurine = {
  taurineMgDay: 100,
  taurineGDay: 0.1,
};
