import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../contexts/cycles-context'

export function FormNewCycle() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 text-gray-100 text-base font-bold flex-wrap">
      <label htmlFor="">Vou trabalhar em</label>
      <input
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        className="flex-1 bg-transparent h-10 border-b-[2px] border-b-gray-500 font-bold text-sm px-2 text-gray-100 focus:shadow-none focus:border-b-green-500 placeholder:text-gray-500 none"
        {...register('task')}
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        className="bg-transparent h-10 border-b-[2px] border-b-gray-500 font-bold text-sm px-2 text-gray-100 w-16 focus:shadow-none focus:border-b-green-500 placeholder:text-gray-500"
        {...register('minutesAmount')}
      />
      <span>minutos.</span>
    </div>
  )
}
