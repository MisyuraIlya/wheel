import React from 'react';
import { Box } from '@mui/material';
import ReactQRCode from 'react-qr-code';

interface QrCodeProps { value: string; size?: number; }
export function QrCode({ value, size = 64 }: QrCodeProps) {
  return (
    <Box>
      <ReactQRCode value={value} size={size} />
    </Box>
  );
}