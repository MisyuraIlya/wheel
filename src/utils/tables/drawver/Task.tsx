'use client'
import React, { useState, MouseEvent, FC } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Tabs,
  Tab,
  FormControl,
  Select,
  InputLabel,
  SelectChangeEvent,
  Drawer
} from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChatIcon from '@mui/icons-material/Chat';
import LinkIcon from '@mui/icons-material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrintIcon from '@mui/icons-material/Print';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import EditIcon from '@mui/icons-material/Edit';
import PublicIcon from '@mui/icons-material/Public';
import DeleteIcon from '@mui/icons-material/Delete';

interface Driver {
  id: string;
  label: string;
}

interface DeliveryHeaderProps {
  taskId?: string;
  deliveryNumber?: string;
  phone?: string;
  name?: string;
  drivers?: Driver[];
}

const statusOptions = [
  'UNASSIGNED', 'ASSIGNED', 'PICKED', 'COMPLETED', 'CANCELED',
  'IN_INVENTORY', 'OUT_INVENTORY', 'FAILED', 'IN_TRANSFER'
] as const;
type Status = typeof statusOptions[number];

const pickStatusOptions = ['NEW', 'PENDING', 'PICKED', 'PARTIALLY_PICKED'] as const;

type PickStatus = typeof pickStatusOptions[number];

const Task: FC<DeliveryHeaderProps> = ({
  taskId = '142516',
  deliveryNumber = '142516',
  phone = '55555234',
  name = '1994',
  drivers = []
}) => {
  const [open, setOpen] = useState(false);
  const [linkAnchor, setLinkAnchor] = useState<HTMLElement | null>(null);
  const [printAnchor, setPrintAnchor] = useState<HTMLElement | null>(null);
  const [moreAnchor, setMoreAnchor] = useState<HTMLElement | null>(null);
  const [statusAnchor, setStatusAnchor] = useState<HTMLElement | null>(null);
  const [pickStatusAnchor, setPickStatusAnchor] = useState<HTMLElement | null>(null);
  const [tab, setTab] = useState<number>(0);
  const [driver, setDriver] = useState<string>('');

  const handleOpenMenu =
    (setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) =>
    (event: MouseEvent<HTMLElement>) => setter(event.currentTarget);

  const handleCloseMenu =
    (setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) =>
    () => setter(null);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleDriverChange = (event: SelectChangeEvent<string>) => {
    setDriver(event.target.value as string);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(console.error);
  };

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
          {/* Header Row */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              pr: 8
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
              <Typography component="span" variant="h2" sx={{ fontWeight: 'bold' }}>
                Delivery
              </Typography>{' '}
              <Typography component="span" variant="h2" sx={{ fontWeight: 'bold' }}>
                {deliveryNumber}
              </Typography>
            </Typography>

            {/* Action Buttons and Menus */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Expand */}
              <Button
                href={`/tasks/${taskId}`}
                target="_blank"
                sx={{ textTransform: 'none', pl: 0, mb: { xs: 1, sm: 0 } }}
                startIcon={<FullscreenIcon />}
              >
                Expand
              </Button>

              {/* SMS */}
              <Button
                onClick={() => console.log('Send SMS', { name, phone, taskId })}
                sx={{ textTransform: 'none', mx: 1, mb: { xs: 1, sm: 0 } }}
                startIcon={<ChatIcon />}
              >
                SMS
              </Button>

              {/* Links Menu */}
              <Button
                onClick={handleOpenMenu(setLinkAnchor)}
                sx={{ textTransform: 'none', mb: { xs: 1, sm: 0 } }}
                startIcon={<LinkIcon />}
                endIcon={<ArrowDropDownIcon />}
              >
                Links
              </Button>
              <Menu
                anchorEl={linkAnchor}
                open={Boolean(linkAnchor)}
                onClose={handleCloseMenu(setLinkAnchor)}
              >
                {[
                  { label: 'Tracking Page', path: 'locate' },
                  { label: 'Validation Page', path: 'validate' },
                  { label: 'Delivery Report', path: 'proof_of_delivery' }
                ].map(({ label, path }) => {
                  const url = `https://test.lionwheel.com/${path}/${taskId}`;
                  return (
                    <MenuItem key={path} sx={{ justifyContent: 'space-between' }}>
                      <Button href={`/${path}/${taskId}`} target="_blank">
                        {label}
                      </Button>
                      <IconButton onClick={() => copyToClipboard(url)}>
                        <FileCopyOutlinedIcon />
                      </IconButton>
                    </MenuItem>
                  );
                })}
              </Menu>

              {/* Print Menu */}
              <Button
                onClick={handleOpenMenu(setPrintAnchor)}
                sx={{ textTransform: 'none', mx: 1, mb: { xs: 1, sm: 0 } }}
                startIcon={<PrintIcon />}
                endIcon={<ArrowDropDownIcon />}
              >
                Print
              </Button>
              <Menu
                anchorEl={printAnchor}
                open={Boolean(printAnchor)}
                onClose={handleCloseMenu(setPrintAnchor)}
              >
                <MenuItem>
                  <Button
                    href={`/tasks/${taskId}/print_waybill`}
                    target="_blank"
                    startIcon={<FileCopyIcon />}
                  >
                    Waybill
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    href={`/tasks/${taskId}/print_labels`}
                    target="_blank"
                    startIcon={<FileCopyIcon />}
                  >
                    Label
                  </Button>
                </MenuItem>
              </Menu>

              {/* More Menu */}
              <Button
                onClick={handleOpenMenu(setMoreAnchor)}
                sx={{ textTransform: 'none', mb: { xs: 1, sm: 0 } }}
                startIcon={<MoreVertIcon />}
                endIcon={<ArrowDropDownIcon />}
              >
                More
              </Button>
              <Menu
                anchorEl={moreAnchor}
                open={Boolean(moreAnchor)}
                onClose={handleCloseMenu(setMoreAnchor)}
              >
                <MenuItem>
                  <Button startIcon={<FileCopyIcon />} onClick={() => console.log('Duplicate', taskId)}>
                    Duplicate
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button startIcon={<SettingsApplicationsIcon />} onClick={() => console.log('Webhook Logs', taskId)}>
                    Webhook Logs
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button startIcon={<SettingsApplicationsIcon />} onClick={() => console.log('Raw Order', taskId)}>
                    Raw Order
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button startIcon={<SettingsApplicationsIcon />} onClick={() => console.log('Delivery Transfer Logs', taskId)}>
                    Delivery Transfer Logs
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button startIcon={<EditIcon />} onClick={() => console.log('Report Inaccurate Location', taskId)}>
                    Report Inaccurate Location
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button startIcon={<PublicIcon />} onClick={() => console.log('Edit Geolocation', taskId)}>
                    Edit Geolocation
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button startIcon={<DeleteIcon />} onClick={() => console.log('Recycle', taskId)}>
                    Move to Recycle Bin
                  </Button>
                </MenuItem>
              </Menu>

              <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: '#7E8299', height: 40 }} />

              {/* Status Dropdown */}
              <Button
                onClick={handleOpenMenu(setStatusAnchor)}
                sx={{ textTransform: 'none', mr: 2, mb: { xs: 1, sm: 0 } }}
                endIcon={<ArrowDropDownIcon />}
              >
                In Transfer
              </Button>
              <Menu anchorEl={statusAnchor} open={Boolean(statusAnchor)} onClose={handleCloseMenu(setStatusAnchor)}>
                {statusOptions.map((status) => (
                  <MenuItem key={status} onClick={() => console.log('Set Status', status)}>
                    {status.replace('_', ' ')}
                  </MenuItem>
                ))}
              </Menu>

              {/* Pick Status Dropdown */}
              <Button
                onClick={handleOpenMenu(setPickStatusAnchor)}
                sx={{ textTransform: 'none', mr: 2, mb: { xs: 1, sm: 0 } }}
                endIcon={<ArrowDropDownIcon />}
              >
                Pending
              </Button>
              <Menu anchorEl={pickStatusAnchor} open={Boolean(pickStatusAnchor)} onClose={handleCloseMenu(setPickStatusAnchor)}>
                {pickStatusOptions.map((ps) => (
                  <MenuItem key={ps} onClick={() => console.log('Set Pick Status', ps)}>
                    {ps.replace('_', ' ')}
                  </MenuItem>
                ))}
              </Menu>

              {/* Driver Select */}
              <FormControl sx={{ minWidth: 150, mr: 2, mb: { xs: 1, sm: 0 } }} size="small">
                <InputLabel id="driver-select-label">Driver</InputLabel>
                <Select
                  labelId="driver-select-label"
                  value={driver}
                  label="Driver"
                  onChange={handleDriverChange}
                >
                  {drivers.map((d) => (
                    <MenuItem key={d.id} value={d.id}>
                      {d.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* Tabs */}
            <Tabs value={tab} onChange={handleTabChange} sx={{ mt: 2 }}>
              {[
                'Details',
                'Proof of Delivery',
                'Documents',
                'Customer Messages',
                'Comments',
                'Changes Log'
              ].map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Task;
