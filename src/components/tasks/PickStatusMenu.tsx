import React, { FC, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { pickStatusOptions } from './constants';

interface Props {
  current: PickStatus;
  onChange: (ps: PickStatus) => void;
}

const PickStatusMenu: FC<Props> = ({ current, onChange }) => {
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
        {pickStatusOptions.map((ps) => (
          <MenuItem
            key={ps}
            onClick={() => {
              onChange(ps);
              handleClose();
            }}
          >
            {ps.replace('_', ' ')}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PickStatusMenu;