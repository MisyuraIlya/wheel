import React, { FC, MouseEvent, useState } from 'react';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { copyToClipboard } from './utils';

interface Props {
  taskId: string;
}

const LinksMenu: FC<Props> = ({ taskId }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget);
  const handleClose = () => setAnchor(null);

  const items = [
    { label: 'Tracking Page', path: 'locate' },
    { label: 'Validation Page', path: 'validate' },
    { label: 'Delivery Report', path: 'proof_of_delivery' },
  ];

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ textTransform: 'none', mb: { xs: 1, sm: 0 } }}
        startIcon={<LinkIcon />}
        endIcon={<ArrowDropDownIcon />}
      >
        Links
      </Button>
      <Menu anchorEl={anchor} open={open} onClose={handleClose}>
        {items.map(({ label, path }) => {
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
    </>
  );
};

export default LinksMenu;