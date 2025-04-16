"use client";

import { useState } from "react";
import Form from "@/components/Form";
import History from "@/components/History";
import Results from "@/components/Results";
import Calculations from "@/utils/Calculations";


export default function Homepage() {
  type ResultType = {
    totalCost: string;
    costPerPerson: string;
    dislikeCost: string;
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<ResultType | null>(null);


const handleCalculate = (data: any) => {
  const calculated = Calculations(data);
  setResults(calculated);
};

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };
  
  return (

    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold mb-4 hidden md:block">FuelMate</h1>
        <p className="text-lg text-neutral-700 mb-8 hidden md:block">
          Fuel Mate is a web app that helps you split fuel costs with your friends.
        </p>
        <div className="shadow-md rounded-lg p-5 pb-8 w-full min-h-130 grid xl:grid-cols-3 gap-3 justify-items-center-safe items-start">

          <History/>  
          <Form onSubmitData={handleCalculate}/>
          <Results results={results} />

        </div>
    </div>
    </div>
  );
}


// o	Strona główna (Home): Formy do wpisania danych: liczba osób, odległość, cena paliwa, spalanie. 
// o	Wyniki (Results): Pokazuje koszt podróży dla każdego uczestnika, z możliwością dodania "dislike" do osoby. 
// o	Podstawowe API: Endpoints do obliczeń, logika liczenia kosztów, zapisywanie historii (jeśli potrzebujesz). 
// o	Historia (History): Możliwość przeglądania wcześniejszych obliczeń, jeśli użytkownik chce zobaczyć, ile wydali na poprzednich podróżach. 
