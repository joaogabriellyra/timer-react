import { Header } from './components/header'
import { CyclesContextProvider } from './contexts/cycles-context'
import { Router } from './router'

export function App() {
  return (
    <div className="max-w-[74rem] h-[744px] bg-zinc-900 my-20 mx-auto flex flex-col p-10 rounded-lg">
      <Header />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </div>
  )
}
