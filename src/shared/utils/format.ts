const monthYear = new Intl.DateTimeFormat('es', { month: 'short', year: 'numeric' })

/** "2024-03" → "mar 2024" */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number)
  return monthYear.format(new Date(year, (month ?? 1) - 1))
}

export function formatPeriod(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Actualidad'}`
}
