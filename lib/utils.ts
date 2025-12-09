import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDatePtBr = (dateString: string): string => {
  const date = new Date(dateString);
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
