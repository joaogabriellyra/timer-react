import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../contexts/cycles-context'

export function CountDown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )

        if (secondsDiff >= totalSeconds) {
          markCurrentCycleAsFinished()
          clearInterval(interval)
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(secondsDiff)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, markCurrentCycleAsFinished, setSecondsPassed])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <div className="font-mono text-[10rem] leading-[8rem] text-gray-100 flex gap-4">
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{minutes[0]}</span>
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{minutes[1]}</span>
      <span className="py-8 text-green-500 w-16 overflow-hidden flex justify-center">
        :
      </span>
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{seconds[0]}</span>
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{seconds[1]}</span>
    </div>
  )
}
