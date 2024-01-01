import Affirmation from "./components/Affirmation";

export default function App() {
  return (
    <main className="p-16 h-screen bg-slate-900 text-blue-50">
      <div className="grid grid-cols-3 gap-4 w-full h-full">
        <div className="col-span-2">
          <Affirmation />
        </div>
        <div className="border-dashed border-2 border-blue-50 col-span-1">
          TODO
        </div>
      </div>
    </main>
  );
}
