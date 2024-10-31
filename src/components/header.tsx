import { HistoryIcon } from './ui/history-icon'
import { IgniteIcon } from './ui/ignite-icon'
import { TimerIcon } from './ui/timer-icon'

export function Header() {
  return (
    <header className="flex justify-between my-10 mx-10">
      <div>
        <IgniteIcon />
      </div>
      <div className="flex">
        <button type="button">
          <TimerIcon />
        </button>
        <button type="button">
          <HistoryIcon />
        </button>
      </div>
    </header>
  )
}
