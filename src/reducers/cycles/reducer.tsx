import { produce } from 'immer'
import type { Cycle } from '../../contexts/cycles-context'
import { ActionTypes } from './action'

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_CYCLE:
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.STOP_THE_COUNT:
      return produce(state, draft => {
        const cycleThatWillBeInterrupted = draft.cycles.find(
          cycle => cycle.id === draft.activeCycleId
        )
        if (cycleThatWillBeInterrupted) {
          cycleThatWillBeInterrupted.interruptedDate = new Date()
          draft.activeCycleId = null
        } else return state
      })

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, draft => {
        const cycleThatWillBeFinished = draft.cycles.find(
          cycle => cycle.id === draft.activeCycleId
        )
        if (cycleThatWillBeFinished) {
          cycleThatWillBeFinished.finishedDate = new Date()
          draft.activeCycleId = null
        } else return state
      })
    default:
      return state
  }
}
