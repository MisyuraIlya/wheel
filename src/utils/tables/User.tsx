'use client';

import React from 'react';
import { Avatar, Box } from '@mui/material';
import { Link } from '@/i18n/navigation';
import { usePathname } from '@/i18n/navigation';
interface UserProps {
  id: number;
  name: string;
  avatarUrl?: string;
}

export function User({ id, name, avatarUrl }: UserProps) {
  const res = usePathname()
  return (
    <Box display="flex" alignItems="center">
      <Avatar
        src={avatarUrl}
        alt={name}
        sx={{ width: 24, height: 24, mr: 1 }}
      />
      <Link href={`${res}/${id}`}>
        {name}
      </Link>
    </Box>
  );
}
