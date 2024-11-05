import { StatusIndicator } from '../components/ui/status-indicator'

export function History() {
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
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 1
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">2h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">10:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Concluído" statusColor="green" />
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 2
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">1h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">11:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Em progresso" statusColor="yellow" />
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 2
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">1h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">11:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Em progresso" statusColor="yellow" />
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 2
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">1h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">11:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Em progresso" statusColor="yellow" />
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 2
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">1h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">11:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Em progresso" statusColor="yellow" />
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 2
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">1h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">11:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Interrompido" statusColor="red" />
              </td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="p-4 border-t-4 border-zinc-900 text-sm pl-6">
                Nome da Tarefa 2
              </td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">1h</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm">11:00</td>
              <td className="p-4 border-t-4 border-zinc-900 text-sm pr-6">
                <StatusIndicator message="Concluído" statusColor="green" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
