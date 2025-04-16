import { useState } from "react";
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
  onSubmitData: (data: FormData) => void;
  defaultValues?: Partial<FormData>;
};


export default function Form({ onSubmitData, defaultValues }: FormProps) {
  const [tripName, setTripName] = useState(defaultValues?.tripName || "");
  const [numberOfPeople, setNumberOfPeople] = useState(defaultValues?.numberOfPeople || 1);
  const [distance, setDistance] = useState(defaultValues?.distance || 0);
  const [fuelPrice, setFuelPrice] = useState(defaultValues?.fuelPrice || 0);
  const [consumption, setConsumption] = useState(defaultValues?.consumption || 0);
  const [income, setIncome] = useState(defaultValues?.income || false);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitData({ tripName, numberOfPeople, distance, fuelPrice, consumption, income });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-105 h-full">
      <Label text="Enter your trip name" />
      <Input type="string" onChange={(value: string | boolean) => typeof value === 'string' && setTripName(value)} placeholder="trip name" />


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
