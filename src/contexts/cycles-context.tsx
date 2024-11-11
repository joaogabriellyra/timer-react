import { createContext, useEffect, useReducer, useState } from 'react'
import type { ReactNode } from 'react'
import { cyclesReducer } from '../reducers/cycles/reducer'
import {
  createNewCycleAction,
  markCurrentCycleAsFinishedAction,
  stopTheCountAction,
} from '../reducers/cycles/action'
import { differenceInSeconds } from 'date-fns'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CreateCycleParams {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (obj: CreateCycleParams) => void
  stopTheCount: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    }
    // initialState => { atleast for now the usereducer is not initializing the cycle state
    //   const cyclesToBeRendered = localStorage.getItem(
    //     '@ignite-timer:cycles-state-1.0.0'
    //   )

    //   if (cyclesToBeRendered) {
    //     return JSON.parse(cyclesToBeRendered)
    //   }
    //   return initialState
    // }
  )

  const { cycles, activeCycleId } = cyclesState
  console.log(cycles)
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle({ task, minutesAmount }: CreateCycleParams) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    dispatch(createNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function stopTheCount() {
    dispatch(stopTheCountAction())

    setAmountSecondsPassed(0)
  }

  useEffect(() => {
    const cyclesToBeSavedInLocalStorage = JSON.stringify(cyclesState)

    localStorage.setItem(
      '@ignite-timer:cycles-state-1.0.0',
      JSON.stringify(cyclesToBeSavedInLocalStorage)
    )
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        stopTheCount,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
