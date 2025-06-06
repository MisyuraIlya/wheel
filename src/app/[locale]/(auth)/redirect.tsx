'use client';

import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import { SEARCH, REDIRECT } from '@/config/enums';
import { useRouter } from '@/i18n/navigation';
import { IChildren } from '@/types';

export const Redirect: FC<IChildren> = ({ children }) => {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  const redirect = params.get(REDIRECT) ?? '/';
  const search = params.get(SEARCH) ?? '/';
  if (!session) {
    return children;
  }
  return (
    <>{router.push(`${redirect}${search ? decodeURIComponent(search) : ''}`)}</>
  );
};
