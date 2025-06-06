'use client';
import { useLocale } from "next-intl";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CssBaseline, PaletteOptions, ThemeOptions } from '@mui/material';
import * as locales from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import theme from '../styles'

type Locales = keyof typeof locales;

const AppThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const locale = useLocale();
    const dateLocale = locale !== 'en' ? locales[locale as Locales] : undefined;

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={dateLocale}
                localeText={{ datePickerToolbarTitle: '' }}
            >
                <CssBaseline />
                {children}
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default AppThemeProvider