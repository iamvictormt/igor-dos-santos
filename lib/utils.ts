import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDatePtBr = (dateString: string): string => {
  // Handle "15 Jan 2024" format (already formatted)
  if (/^\d{1,2}\s+\w{3,}\s+\d{4}$/.test(dateString)) {
    return dateString;
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const formatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);

  return formatted.replace(/(\d{2} de )(\w+)/, (_, d, m) => `${d}${m.charAt(0).toUpperCase()}${m.slice(1)}`);
};

export const getDayAndMonth = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('pt-BR', { month: 'short' });

  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return { day, month: formattedMonth };
};
