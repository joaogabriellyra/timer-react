import { useContext } from 'react'
import { StatusIndicator } from '../components/ui/status-indicator'
import { CyclesContext } from '../contexts/cycles-context'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <div className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl font-bold font-mono mb-8 text-gray-100">
        Meu histórico
      </h1>
      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px] ">
          <thead>
            <tr className="bg-zinc-700">
              <th className="w-1/2 text-left p-4 text-sm rounded-tl-lg pl-6">
                Tarefa
              </th>
              <th className="w-1/6 text-left p-4 text-sm">Duração</th>
              <th className="w-1/6 text-left p-4 text-sm">Início</th>
              <th className="w-1/6 text-left p-4 text-sm rounded-tr-lg pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles?.map(cycle => {
              return (
                <tr key={cycle.id} className="bg-zinc-800">
                  <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                    {cycle.task}
                  </td>
                  <td className="p-4 border-t-4 border-zinc-900 text-sm">
                    {`${cycle.minutesAmount} minutos`}
                  </td>
                  <td className="p-4 border-t-4 border-zinc-900 text-sm">
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                    {cycle.finishedDate && (
                      <StatusIndicator
                        message="Concluído"
                        statusColor="green"
                      />
                    )}
                    {cycle.interruptedDate && (
                      <StatusIndicator
                        message="Interrompido"
                        statusColor="red"
                      />
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <StatusIndicator
                        message="Em progresso"
                        statusColor="yellow"
                      />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
