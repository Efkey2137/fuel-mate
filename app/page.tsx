"use client";
import Input from "@/app/components/Input";
import { useState } from "react";


export default function Homepage() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };
  
  return (

    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 hidden md:block">FuelMate</h1>
        <p className="text-lg text-neutral-700 mb-8 hidden md:block">
          Fuel Mate is a web app that helps you split fuel costs with your friends.
        </p>

        <div className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-100">
          <h3 className="text-neutral-200 font-bold mb-1.5 text-l">Split the cost into how many people?</h3>
          
          <Input onChange={handleInputChange} placeholder="number of people"/>

          <h3 className="text-neutral-200 font-bold mb-1.5 text-l">Distance</h3>

          <Input onChange={handleInputChange} placeholder="distance"/>

          <h3 className="text-neutral-200 font-bold mb-1.5 text-l">Fuel costs (per liter)</h3>

          <Input onChange={handleInputChange} placeholder="fuel costs"/>

          <h3 className="text-neutral-200 font-bold mb-1.5 text-l">Fuel consumption</h3>

          <Input onChange={handleInputChange} placeholder="fuel consumption" className="mb-7"/>
          

          <button className="w-full bg-blue-400 rounded p-3 text-m font-bold text-neutral-200 hover:cursor-pointer hover:bg-indigo-400 transistion ease duration-300">Calculate</button>
        </div>
        

    </div>
    </div>
  );
}


// o	Strona główna (Home): Formy do wpisania danych: liczba osób, odległość, cena paliwa, spalanie. 
// o	Wyniki (Results): Pokazuje koszt podróży dla każdego uczestnika, z możliwością dodania "dislike" do osoby. 
// o	Podstawowe API: Endpoints do obliczeń, logika liczenia kosztów, zapisywanie historii (jeśli potrzebujesz). 
// o	Historia (History): Możliwość przeglądania wcześniejszych obliczeń, jeśli użytkownik chce zobaczyć, ile wydali na poprzednich podróżach. 
