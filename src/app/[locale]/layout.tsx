import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import AppThemeProvider from '@/providers/AppThemeProvider';
import RootStyleRegistry from '@/providers/EmotionProvider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { getDirection } from '@/config/config';
import { AppProviderProps } from '@/types';

export async function AppProvider({ children, dir, locale }: AppProviderProps) {
  return (
    <NextIntlClientProvider>
      <RootStyleRegistry dir={dir}>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </RootStyleRegistry>
    </NextIntlClientProvider>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <head />
      <NuqsAdapter>
        <AppProvider locale={locale} dir={dir}>
          {children}
        </AppProvider>
      </NuqsAdapter>
    </html>
  );
}
