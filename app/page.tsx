"use client";

import { useState, useEffect } from "react";
import Form from "@/components/Form";
import History from "@/components/History";
import Results from "@/components/Results";
import Calculations from "@/utils/Calculations";
import { useLocalStorage } from "@/hooks/useLocalStorage";


export default function Homepage() {
  type ResultType = {
    id: number;
    tripName: string;
    distance: number;
    fuelPrice: number;
    consumption: number;
    numberOfPeople: number;
    income: boolean;
    totalCost: string;
    costPerPerson: string;
    dislikeCost: string;
  };
  

  const saveToHistory = (newItem: any) => {
    const currentHistory = JSON.parse(localStorage.getItem("fuelMateHistory") || "[]");
    const updatedHistory = [...currentHistory, newItem];
    localStorage.setItem("fuelMateHistory", JSON.stringify(updatedHistory));
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<ResultType | null>(null);
  const [historyList, setHistoryList] = useState<ResultType[]>([]);
  const [historyData, setHistoryData] = useLocalStorage<ResultType[]>("history", []);
  const [editData, setEditData] = useState<ResultType | null>(null);


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fuelMateHistory") || "[]");
    setHistoryData(saved);
  }, []);


  const handleCalculate = (data: Omit<ResultType, "id" | "tripName" | "totalCost" | "costPerPerson" | "dislikeCost">) => {
    const calculated = Calculations(data);
  
    const fullEntry: ResultType = {
      id: Date.now(),
      tripName: `Trip ${historyData.length + 1}`,
      ...data,
      ...calculated,
    };
  
    setResults(fullEntry);
    saveToHistory(fullEntry);
    setHistoryData(prev => [...prev, fullEntry]);
  };
  
  const handleDelete = (id: number) => {
    const filtered = historyData.filter((item) => item.id !== id);
    setHistoryData(filtered); // localStorage zaktualizuje się automatycznie
  };

  const handleEdit = (item: ResultType) => {
    setEditData(item); // przekażesz to do <Form />
    setResults(null); // opcjonalnie, czyścisz wynik
  };
  
  
  

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };
  
  return (

    <div className="flex min-h-screen flex-col items-center justify-between xl:p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold mb-4 hidden md:block">FuelMate</h1>
        <p className="text-lg text-neutral-700 mb-8 hidden md:block">
          Fuel Mate is a web app that helps you split fuel costs with your friends.
        </p>
        <div className="shadow-md rounded-lg p-5 pb-8 w-full min-h-130 grid xl:grid-cols-3 gap-3 justify-items-center-safe items-start">

          
          <Form defaultValues={editData ? {
            distance: editData.distance,
            fuelPrice: editData.fuelPrice,
            consumption: editData.consumption,
            numberOfPeople: editData.numberOfPeople,
            income: editData.income
          } : undefined} onSubmitData={handleCalculate} />
          <Results results={results} />
          <History history={historyData} onDelete={handleDelete} onEdit={handleEdit} />


        </div>
    </div>
    </div>
  );
}


// o	Strona główna (Home): Formy do wpisania danych: liczba osób, odległość, cena paliwa, spalanie. 
// o	Wyniki (Results): Pokazuje koszt podróży dla każdego uczestnika, z możliwością dodania "dislike" do osoby. 
// o	Podstawowe API: Endpoints do obliczeń, logika liczenia kosztów, zapisywanie historii (jeśli potrzebujesz). 
// o	Historia (History): Możliwość przeglądania wcześniejszych obliczeń, jeśli użytkownik chce zobaczyć, ile wydali na poprzednich podróżach. 
