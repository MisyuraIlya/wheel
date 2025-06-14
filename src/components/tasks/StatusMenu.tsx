'use client'
import React, { FC, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { statusOptions } from './constants';

interface Props {
  current: Status;
  onChange: (s: Status) => void;
}

const StatusMenu: FC<Props> = ({ current, onChange }) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget);
  const handleClose = () => setAnchor(null);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ textTransform: 'none', mr: 2, mb: { xs: 1, sm: 0 } }}
        endIcon={<ArrowDropDownIcon />}
      >
        {current}
      </Button>
      <Menu anchorEl={anchor} open={open} onClose={handleClose}>
        {statusOptions.map((s) => (
          <MenuItem
            key={s}
            onClick={() => {
              onChange(s);
              handleClose();
            }}
          >
            {s.replace('_', ' ')}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default StatusMenu;