'use client';
import { ReactNode } from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { DirectionEnum } from '@/config/direction';
import { Direction } from '@/types';

interface IEmotionPops {
  dir: Direction;
  children: ReactNode;
}

const cacheOptions = {
  [DirectionEnum.ltr]: {
    key: 'css',
  },
  [DirectionEnum.rtl]: {
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  },
};

export default function RootStyleRegistry({
  children,
  dir = DirectionEnum.rtl,
}: IEmotionPops) {
  const options = cacheOptions[dir];
  return (
    <AppRouterCacheProvider options={options}>
      {children}
    </AppRouterCacheProvider>
  );
}
