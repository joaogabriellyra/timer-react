import { NavLink } from 'react-router-dom'
import { IgniteIcon } from './ui/ignite-icon'
import { Timer, Scroll } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <IgniteIcon />
      </div>
      <nav className="flex gap-2">
        <NavLink
          title='Home'
          to="/"
          className={({ isActive }) => `w-12 h-12 flex items-center justify-center border-y-[3px] border-transparent hover:border-b-green-500 active:text-green-500 ${isActive ? 'text-green-500' : 'text-white'}`}
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          title='History'
          to="/history"
          className={({ isActive }) => `w-12 h-12 flex items-center justify-center border-y-[3px] border-transparent hover:border-b-green-500 active:text-green-500 ${isActive ? 'text-green-500' : 'text-white'}`}
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  )
}
