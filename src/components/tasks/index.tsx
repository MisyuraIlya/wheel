import React, { useState, FC } from 'react';
import { Box, Typography } from '@mui/material';
import ActionButtons from './ActionButtons';
import TabsSection from './TabsSection';

const Tasks: FC<IDeliveryProps> = ({ data }) => {
  const [status, setStatus] = useState<Status>(data.currentStatus);
  const [pickStatus, setPickStatus] = useState<PickStatus>(data.currentPickStatus);
  const [driver, setDriver] = useState<string>('');
  const [tab, setTab] = useState<number>(0);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        pr: 8,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}
      >
        <Typography component="span" variant="h2" sx={{ fontWeight: 'bold' }}>
          Delivery
        </Typography>{' '}
        <Typography component="span" variant="h2" sx={{ fontWeight: 'bold' }}>
          {data.deliveryNumber}
        </Typography>
      </Typography>

      <ActionButtons
        taskId={data.taskId}
        drivers={data.drivers}
        currentStatus={status}
        onStatusChange={setStatus}
        currentPickStatus={pickStatus}
        onPickStatusChange={setPickStatus}
        selectedDriver={driver}
        onDriverChange={setDriver}
      />

      <TabsSection />
    </Box>
  );
};

export default Tasks;