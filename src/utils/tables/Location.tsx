import React from 'react';
import { Box, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

interface LocationProps { value: string; }
export function Location({ value }: LocationProps) {
  return (
    <Box display="flex" alignItems="center">
      <RoomIcon fontSize="small" sx={{ mr: 0.5 }} />
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
}