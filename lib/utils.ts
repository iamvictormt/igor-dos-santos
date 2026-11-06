import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseCalendarDate = (dateString: string): Date => {
  const dateOnlyMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);

  if (!dateOnlyMatch) {
    return new Date(dateString);
  }

  const [, year, month, day] = dateOnlyMatch;
  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const formatDatePtBr = (dateString: string): string => {
  const date = parseCalendarDate(dateString);
  const formatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);

  return formatted.replace(/(\d{2} de )(\w+)/, (_, d, m) => `${d}${m.charAt(0).toUpperCase()}${m.slice(1)}`);
};

export const getDayAndMonth = (dateString: string) => {
  const date = parseCalendarDate(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('pt-BR', { month: 'short' });

  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return { day, month: formattedMonth };
};
