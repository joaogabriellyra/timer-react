const colors = {
  green: 'before:bg-green-500',
  red: 'before:bg-red-500',
  yellow: 'before:bg-yellow-500',
}

interface statusIndicator {
  message: string
  statusColor: keyof typeof colors
}

export function StatusIndicator({ message, statusColor }: statusIndicator) {
  return (
    <span
      className={`flex items-center gap-2 before:size-2 before:rounded-full ${colors[statusColor]}`}
    >
      {message}
    </span>
  )
}
