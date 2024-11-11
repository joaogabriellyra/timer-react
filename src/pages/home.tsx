import { Play, Stop } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CountDown } from '../components/countdown'
import { FormNewCycle } from '../components/form-new-cycle'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  type CreateCycleParams,
  CyclesContext,
} from '../contexts/cycles-context'

const createNewCycleForm = z.object({
  task: z.string().min(1, 'Informe o nome da tarefa!'),
  minutesAmount: z.coerce.number().min(5).max(60),
})

type createNewCycleForm = z.infer<typeof createNewCycleForm>

export function Home() {
  const newCycleForm = useForm<createNewCycleForm>({
    resolver: zodResolver(createNewCycleForm),
  })
  const { activeCycle, createNewCycle, stopTheCount } =
    useContext(CyclesContext)
  const { watch, handleSubmit, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: CreateCycleParams) {
    createNewCycle(data)
    reset()
  }

  return (
    <div className="flex-1 flex-col items-center justify-center pt-20 max-w-[41rem] mx-auto">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col gap-14 justify-center items-center"
      >
        {' '}
        <FormProvider {...newCycleForm}>
          <FormNewCycle />
        </FormProvider>
        <CountDown />
        {activeCycle ? (
          <button
            type="button"
            onClick={stopTheCount}
            className="flex items-center justify-center gap-2 bg-red-500 w-full px-10 py-4 text-gray-100 rounded-lg font-bold hover:bg-red-700 focus:shadow-[0_0_0_2px_#ef4444]"
          >
            <Stop size={24} />
            Parar
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="flex items-center justify-center gap-2 bg-green-500 w-full px-10 py-4 text-gray-100 rounded-lg font-bold hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </div>
  )
}
