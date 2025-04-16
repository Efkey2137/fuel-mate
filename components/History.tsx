type HistoryItem = {
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

type HistoryProps = {
  history: HistoryItem[];
  onDelete: (id: number) => void;
  onEdit: (item: HistoryItem) => void;
};



const History = ({ history, onEdit, onDelete }: HistoryProps) => {
  return (
    <div className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-100 min-h-130 max-h-140 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <h1 className="text-4xl font-bold mb-4 text-center">🧾 History</h1>
      {history.length === 0 ? (
        <p className="text-neutral-500 text-center">no journeys saved 😭</p>
      ) : (
        history.map((item) => (
          <div key={item.id} className="p-4 bg-neutral-800 rounded-lg mb-3 hover:transform hover:scale-105 transition-transform ease-in-out duration-300">
            <p>🏷️ Trip name: {item.tripName}</p>
            <p>📏 Distance: {item.distance} km</p>
            <p>⛽ Fuel price: {item.fuelPrice} zł</p>
            <p>🔥 Consumption: {item.consumption} l/100km</p>
            <p>🧍‍♂️ People: {item.numberOfPeople}</p>
            <p>💰 Income: {item.income ? "✅" : "❌"}</p>
            <p>💸 Total: {item.totalCost} zł</p>
            <p>👥 Per person: {item.costPerPerson} zł</p>
            <p>🤬 Dislike cost: {(+item.costPerPerson + +item.dislikeCost).toFixed(2)} zł</p>

            <div className="mt-4 flex justify-between">
              <button onClick={() => onEdit(item)} className="bg-blue-400 hover:bg-indigo-300 text-white px-3 py-1 rounded mr-2 transition-colors hover:cursor-pointer">✏️ Edit</button>
              <button onClick={() => onDelete(item.id)} className="bg-blue-400 hover:bg-indigo-300 text-white px-3 py-1 rounded mr-2 transition-colors hover:cursor-pointer">🗑️ Delete</button>
            </div>

          </div>
        ))
      )}
    </div>
  );
};



export default History