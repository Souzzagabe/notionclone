import { Editor } from "./components/Editor"

function App() {
  return (
    <div className="min-h-screen text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-8">
      <div
        className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20
      overflow-hidden grid grid-cols-[16rem_1fr]"
      >
        <aside className="bg-zinc-200 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full  bg-red-400"></button>
            <button className="w-3 h-3 rounded-full  bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full  bg-green-400"></button>
          </div>
        </aside>
       <Editor />
      </div>
    </div>
  );
}

export default App;
