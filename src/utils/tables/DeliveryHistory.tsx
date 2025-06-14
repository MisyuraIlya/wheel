'use client'
import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

interface DeliveryHistoryProps { itemId: number; history?: string[]; }
export function DeliveryHistory({ itemId, history = [] }: DeliveryHistoryProps) {
  const [open, setOpen] = useState(false);
  const mock = history.length ? history : [
    `Delivery A for item ${itemId}`,
    `Delivery B for item ${itemId}`
  ];

  return (
    <>
      <IconButton size="small" onClick={() => setOpen(true)}>
        <HistoryIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delivery History</DialogTitle>
        <DialogContent>
          <List>
            {mock.map((d, i) => (
              <ListItem key={i}><ListItemText primary={d} /></ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}