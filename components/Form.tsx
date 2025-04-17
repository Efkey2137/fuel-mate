import { useState, useEffect } from "react";
import Input from "@/components/Input";
import Label from "@/components/Label";

type FormData = {
  tripName: string;
  numberOfPeople: number;
  distance: number;
  fuelPrice: number;
  consumption: number;
  income: boolean;
};

type FormProps = {
  defaultValues?: {
    tripName: string;
    numberOfPeople: number;
    distance: number;
    fuelPrice: number;
    consumption: number;
    income: boolean;
  };
  onSubmitData: (data: {
    tripName: string;
    numberOfPeople: number;
    distance: number;
    fuelPrice: number;
    consumption: number;
    income: boolean;
  }) => void;
};


export const Form = ({ defaultValues, onSubmitData }: FormProps) => {
  const [tripName, setTripName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [distance, setDistance] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [income, setIncome] = useState(false);

  useEffect(() => {
    if (defaultValues) {
      setTripName(defaultValues.tripName);
      setNumberOfPeople(defaultValues.numberOfPeople);
      setDistance(defaultValues.distance);
      setFuelPrice(defaultValues.fuelPrice);
      setConsumption(defaultValues.consumption);
      setIncome(defaultValues.income);
    }
  }, [defaultValues]);

  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitData({ tripName, numberOfPeople, distance, fuelPrice, consumption, income });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-105 h-full">
      <Label text="Enter your trip name" />
      <Input 
        type="text"
        value={tripName}
        onChange={(value) => typeof value === 'string' && setTripName(value)}
        placeholder="trip name"
      />


      <Label text="Split the cost into how many people?" />
      <Input
        type="number"
        value={numberOfPeople.toString()} // <- ZMIANA
        onChange={(value) => {
          if (typeof value === "string") setNumberOfPeople(+value);
        }}
        placeholder="number of people"
      />

      <Label text="Enter the distance in kilometers" />
      <Input 
      type="number"
      value={distance.toString()} // <- ZMIANA
      onChange={(value: string | boolean) => typeof value === 'string' && setDistance(+value)} 
      placeholder="distance" />

      <Label text="Enter the price of fuel in your area" />
      <Input 
      type="number"
      value={fuelPrice.toString()} // <- ZMIANA
      onChange={(value: string | boolean) => typeof value === 'string' && setFuelPrice(+value)} 
      placeholder="fuel costs" />

      <Label text="Enter the fuel consumption in liters per 100km" />
      <Input 
      type="number"
      value={consumption.toString()} // <- ZMIANA
      onChange={(value: string | boolean) => typeof value === 'string' && setConsumption(+value)} 
      placeholder="fuel consumption" />

      <div className="flex flex-row items-baseline justify-start mt-1 mb-5">

        <Input 
        type="checkbox" 
        value={income}
        onChange={(value: string | boolean) => typeof value === 'boolean' && setIncome(value)} 
        className="mr-2"/>
        <Label text="Do you want income?" />

      </div>
      

      <button type="submit" className="w-full bg-blue-400 rounded p-3 text-m font-bold text-neutral-200 hover:cursor-pointer hover:bg-indigo-400 transistion ease duration-300">
        Calculate
      </button>
    </form>
  );
}

export default Form;
