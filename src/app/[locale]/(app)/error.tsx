'use client'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button, Container, Stack, Typography } from "@mui/material"
import AppThemeProvider from '@/providers/AppThemeProvider';

 // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <AppThemeProvider>
          <Container sx={{ mt: 15, mb: 15 }}>
            <Stack gap={3} alignItems="center">
              <SettingsOutlinedIcon sx={{ fontSize: { xs: 135, md: 176 } }} />
              <Typography >
                {'Something went wrong'}
              </Typography>
              <Typography  sx={{ top: t => t.spacing(-1.5), position: 'relative' }}>
                {"Please try again later"}
              </Typography>
              <Button onClick={() =>{
                window.location.reload();
                // clearCookies();
              }} color="primary" variant="contained">Refresh</Button>
            </Stack>
          </Container>
        </AppThemeProvider>
      </body>
    </html>
  )
}