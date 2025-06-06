'use client';

import { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';
import { Container, Stack, Typography } from '@mui/material';

export default function NotFound() {
  const t = useTranslations()
  return (
    <Container sx={{ mt: 15, mb: 15 }}>
      <Stack gap={3} alignItems="center" sx={{ textAlign: 'center' }}>
        <Typography sx={{ order: 1 }}>
          {t('SHOP_LABEL_PAGE_NOT_FOUND')}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: { xs: 180, md: 240 },
            order: 0,
            lineHeight: { xs: '180px', md: '240px' }
          }}
        >
          {404}
        </Typography>
        {/* <ButtonLink
          sx={{
            mt: 7,
            width: { md: 380, xs: '100%' },
            maxWidth: 'min(380px, 100%)',
            p: 2,
            order: 2
          }}
          text={t('SHOP_LABEL_VISIT_HOME_PAGE')}
          link="/"
          variant="contained"
        /> */}
      </Stack>
    </Container>
  );
}