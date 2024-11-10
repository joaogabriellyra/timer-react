import type { Cycle } from '../../contexts/cycles-context'

export enum ActionTypes {
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  STOP_THE_COUNT = 'STOP_THE_COUNT',
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function stopTheCountAction() {
  return {
    type: ActionTypes.STOP_THE_COUNT,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
