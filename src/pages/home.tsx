import { Play } from '@phosphor-icons/react'

export function Home() {
  return (
    <div className="flex-1 flex-col items-center justify-center pt-20 max-w-[41rem] mx-auto">
      <form
        action=""
        className="flex flex-col gap-14 justify-center items-center"
      >
        <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-xl font-bold flex-wrap">
          <label htmlFor="">Vou trabalhar em</label>
          <input
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            className="flex-1 bg-transparent h-10 border-b-[2px] border-b-gray-500 font-bold text-xl px-2 text-gray-100 focus:shadow-none focus:border-b-green-500 placeholder:text-gray-500 none"
          />
          <datalist id="task-suggestions">
            <option value="Front" />
            <option value="UI" />
            <option value="Back" />
          </datalist>
          <label htmlFor="">durante</label>
          <input
            type="number"
            min={5}
            max={60}
            step="5"
            placeholder="00"
            className="bg-transparent h-10 border-b-[2px] border-b-gray-500 font-bold text-xl px-2 text-gray-100 w-16 focus:shadow-none focus:border-b-green-500 placeholder:text-gray-500"
          />
          <span>minutos.</span>
        </div>
        <div className="font-mono text-[10rem] leading-[8rem] text-gray-100 flex gap-4">
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
          <span className="py-8 text-green-500 w-16 overflow-hidden flex justify-center">
            :
          </span>
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-green-500 w-full px-10 py-4 text-gray-100 rounded-lg font-bold hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
