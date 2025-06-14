'use client'
import React, { useState, FC } from 'react';
import {
  Box,
  Button,
  Drawer
} from '@mui/material';
import Tasks from '@/components/tasks';


const Task: FC<DeliveryHeaderProps> = ({
  taskId = '142516',
  deliveryNumber = '142516',
  phone = '55555234',
  name = '1994',
  drivers = []
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="text" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Task {taskId}
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: { xs: '100%', sm: 1200 } } }}
      >
        <Box sx={{ p: 2 }}>
          <Tasks data={{taskId,deliveryNumber,phone,name,drivers}}/>
        </Box>
      </Drawer>
    </>
  );
};

export default Task;
