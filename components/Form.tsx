import { useState } from "react";
import Input from "@/components/Input";
import Label from "@/components/Label";

type FormProps = {
  onSubmitData: (data: {
    numberOfPeople: number;
    distance: number;
    fuelPrice: number;
    consumption: number;
    income: boolean;
  }) => void;
};

export default function Form({ onSubmitData }: FormProps) {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [income, setIncome] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitData({ numberOfPeople, distance, fuelPrice, consumption, income });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-105 h-full">
      <Label text="Split the cost into how many people?" />
      <Input onChange={(value: string | boolean) => typeof value === 'string' && setNumberOfPeople(+value)} placeholder="number of people" />

      <Label text="Enter the distance in kilometers" />
      <Input onChange={(value: string | boolean) => typeof value === 'string' && setDistance(+value)} placeholder="distance" />

      <Label text="Enter the price of fuel in your area" />
      <Input onChange={(value: string | boolean) => typeof value === 'string' && setFuelPrice(+value)} placeholder="fuel costs" />

      <Label text="Enter the fuel consumption in liters per 100km" />
      <Input onChange={(value: string | boolean) => typeof value === 'string' && setConsumption(+value)} placeholder="fuel consumption" />

      <div className="flex flex-row items-baseline justify-start mt-1 mb-5">

        <Input type="checkbox" onChange={(value: string | boolean) => typeof value === 'boolean' && setIncome(value)} className="mr-2"/>
        <Label text="Do you want income?" />

      </div>
      

      <button type="submit" className="w-full bg-blue-400 rounded p-3 text-m font-bold text-neutral-200 hover:cursor-pointer hover:bg-indigo-400 transistion ease duration-300">
        Calculate
      </button>
    </form>
  );
}
