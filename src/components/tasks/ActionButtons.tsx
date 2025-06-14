import React, { FC } from 'react';
import { Box, Button, Divider } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChatIcon from '@mui/icons-material/Chat';
import LinksMenu from './LinksMenu';
import PrintMenu from './PrintMenu';
import MoreMenu from './MoreMenu';
import StatusMenu from './StatusMenu';
import PickStatusMenu from './PickStatusMenu';
import DriverSelect from './DriverSelect';

interface Props {
  taskId: string;
  drivers: IDriver[];
  currentStatus: Status;
  onStatusChange: (s: Status) => void;
  currentPickStatus: PickStatus;
  onPickStatusChange: (ps: PickStatus) => void;
  selectedDriver: string;
  onDriverChange: (id: string) => void;
}

const ActionButtons: FC<Props> = ({
  taskId,
  drivers,
  currentStatus,
  onStatusChange,
  currentPickStatus,
  onPickStatusChange,
  selectedDriver,
  onDriverChange,
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button
      href={`/tasks/${taskId}`}
      target="_blank"
      sx={{ textTransform: 'none', pl: 0, mb: { xs: 1, sm: 0 } }}
      startIcon={<FullscreenIcon />}
    >
      Expand
    </Button>
    <Button
      sx={{ textTransform: 'none', mx: 1, mb: { xs: 1, sm: 0 } }}
      startIcon={<ChatIcon />}
    >
      SMS
    </Button>
    <LinksMenu taskId={taskId} />
    <PrintMenu taskId={taskId} />
    <MoreMenu taskId={taskId} />

    <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: '#7E8299', height: 40 }} />

    <StatusMenu current={currentStatus} onChange={onStatusChange} />
    <PickStatusMenu current={currentPickStatus} onChange={onPickStatusChange} />
    <DriverSelect
      drivers={drivers}
      value={selectedDriver}
      onChange={onDriverChange}
    />
  </Box>
);

export default ActionButtons;