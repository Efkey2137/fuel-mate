import { useState } from "react";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";

type FormProps = {
    onSubmitData: (data: {
      people: number;
      distance: number;
      fuelPrice: number;
      consumption: number;
    }) => void;
  };
  
export default function Form({ onSubmitData }: FormProps) {
    const [people, setPeople] = useState(0);
    const [distance, setDistance] = useState(0);
    const [fuelPrice, setFuelPrice] = useState(0);
    const [consumption, setConsumption] = useState(0);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmitData({ people, distance, fuelPrice, consumption });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-100">
        <Label text="Split the cost into how many people?" />
        <Input onChange={(value: string) => setPeople(+value)} placeholder="number of people" />
  
        <Label text="Enter the distance in kilometers" />
        <Input onChange={(value: string) => setDistance(+value)} placeholder="distance" />
  
        <Label text="Enter the price of fuel in your area" />
        <Input onChange={(value: string) => setFuelPrice(+value)} placeholder="fuel costs" />
  
        <Label text="Enter the fuel consumption in liters per 100km" />
        <Input onChange={(value: string) => setConsumption(+value)} placeholder="fuel consumption" className="mb-7" />
  
        <button type="submit" className="w-full bg-blue-400 rounded p-3 text-m font-bold text-neutral-200 hover:cursor-pointer hover:bg-indigo-400 transistion ease duration-300">
          Calculate
        </button>
      </form>
    );
  };
