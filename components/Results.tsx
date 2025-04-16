type ResultsProps = {
  results?: {
    totalCost: string;
    costPerPerson: string;
    dislikeCost: string;
  } | null;
};

const Results = ({ results }: ResultsProps) => {
  if (!results || !results.totalCost) {
    return (
      <div className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-105 min-h-120 h-full">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 hidden md:block text-center">Results</h1>
        <div className="text-center">No journey data yet. 👀</div>
      </div>
    </div>
    );

  }

  return (
    <div className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-105 min-h-120 h-full">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 hidden md:block text-center">Results</h1>
        <p className="p-4 bg-neutral-800 rounded-lg mb-3">💸 Full cost: {results.totalCost} zł</p>
        <p className="p-4 bg-neutral-800 rounded-lg mb-3">👥 Per person: {results.costPerPerson} zł</p>
        <p className="p-4 bg-neutral-800 rounded-lg mb-3">🤬 For people you hate: {(+results.costPerPerson + +results.dislikeCost).toFixed(2)} zł</p>
      </div>
    </div>
  );
};

export default Results;
