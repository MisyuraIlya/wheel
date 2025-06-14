import React, { FC, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileCopyIcon from '@mui/icons-material/FileCopy';

interface Props {
  taskId: string;
}

const PrintMenu: FC<Props> = ({ taskId }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget);
  const handleClose = () => setAnchor(null);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ textTransform: 'none', mx: 1, mb: { xs: 1, sm: 0 } }}
        startIcon={<PrintIcon />}
        endIcon={<ArrowDropDownIcon />}
      >
        Print
      </Button>
      <Menu anchorEl={anchor} open={open} onClose={handleClose}>
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
    </>
  );
};

export default PrintMenu;