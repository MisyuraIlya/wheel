import React, { FC, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import PublicIcon from '@mui/icons-material/Public';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  taskId: string;
}

const MoreMenu: FC<Props> = ({ taskId }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget);
  const handleClose = () => setAnchor(null);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ textTransform: 'none', mb: { xs: 1, sm: 0 } }}
        startIcon={<MoreVertIcon />}
        endIcon={<ArrowDropDownIcon />}
      >
        More
      </Button>
      <Menu anchorEl={anchor} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<FileCopyIcon />}>Duplicate</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<SettingsApplicationsIcon />}>Webhook Logs</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<SettingsApplicationsIcon />}>Raw Order</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<SettingsApplicationsIcon />}>Delivery Transfer Logs</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<EditIcon />}>Report Inaccurate Location</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<PublicIcon />}>Edit Geolocation</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button startIcon={<DeleteIcon />}>Move to Recycle Bin</Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreMenu;