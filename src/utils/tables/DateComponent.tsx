import React from 'react';
import { Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';

interface DateComponentProps { value: string; formatString?: string; }
export function DateComponent({ value, formatString = 'PPP' }: DateComponentProps) {
  const date = parseISO(value);
  return <Typography variant="body2">{format(date, formatString)}</Typography>;
}