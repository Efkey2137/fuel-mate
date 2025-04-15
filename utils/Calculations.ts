type FuelData = {
  numberOfPeople: number;
  distance: number;
  fuelPrice: number;
  consumption: number;
};

const Calculations = (data: any) => {
  const { distance, fuelPrice, consumption, numberOfPeople, income } = data;

  const costPerKm = (consumption / 100) * fuelPrice;
  const totalCost = costPerKm * distance;
  const costPerPerson = totalCost / numberOfPeople;
  const dislikeCost = costPerPerson * 1.2;

  if(income){
    const incomeCost = costPerPerson * 1.5;
    return {
      totalCost: Math.ceil(totalCost).toString(),
      costPerPerson: Math.ceil(incomeCost).toString(),
      dislikeCost: Math.ceil(dislikeCost).toString(),
    };
  }

  return {
    totalCost: Math.ceil(totalCost).toString(),
    costPerPerson: Math.ceil(costPerPerson).toString(),
    dislikeCost: Math.ceil(dislikeCost).toString(),
  };
};

export default Calculations;

