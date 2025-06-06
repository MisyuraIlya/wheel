import { Metadata } from 'next';
import { headers } from 'next/headers';
import { RootLayoutProps } from '@/types';

export const generateMetadata = async () => {
  const headersObj = await headers()
  const host = headersObj.get('host')
  return {
    title: {
      template: `%s | ${host}`,
      default: host ?? '',
    },
  } satisfies Metadata;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}
