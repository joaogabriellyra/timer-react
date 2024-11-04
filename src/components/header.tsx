import { IgniteIcon } from './ui/ignite-icon'
import { Timer, Scroll } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <IgniteIcon />
      </div>
      <nav className="flex gap-2">
        <a
          href="/"
          className="w-12 h-12 flex items-center justify-center text-white border-y-[3px] border-transparent hover:border-b-green-500 active:text-green-500"
        >
          <Timer size={24} />
        </a>
        <a
          href="/"
          className="w-12 h-12 flex items-center justify-center text-white border-y-[3px] border-transparent hover:border-b-green-500 active:text-green-500"
        >
          <Scroll size={24} />
        </a>
      </nav>
    </header>
  )
}
