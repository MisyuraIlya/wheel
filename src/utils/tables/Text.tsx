import React from 'react';
import { Typography } from '@mui/material';

interface TextProps { value: string; variant?: 'body2' | 'body1' | 'caption'; }
export function Text({ value, variant = 'body2' }: TextProps) {
  return <Typography variant={variant}>{value}</Typography>;
}