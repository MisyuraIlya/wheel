'use client'
import React, { useState, MouseEvent } from 'react';
import { IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface MenuProps { options: string[]; onSelect?: (option: string) => void; }
export function Menu({ options, onSelect }: MenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = (option?: string) => {
    setAnchorEl(null);
    if (option && onSelect) onSelect(option);
  };

  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>  
        {options.map((opt) => (
          <MenuItem key={opt} onClick={() => handleClose(opt)}>{opt}</MenuItem>
        ))}
      </MuiMenu>
    </>
  );
}