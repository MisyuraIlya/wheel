// components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
        py: { xs: 4, md: 6 },
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid size={{xs:12,md:4}}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              {t("logo")}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              {t("description")}
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid size={{xs:12,md:4}}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              {t("quickLinksTitle")}
            </Typography>
            <Stack spacing={1}>
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("links.home")}
                </Typography>
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("links.newDelivery")}
                </Typography>
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("links.users")}
                </Typography>
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("links.about")}
                </Typography>
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("links.contact")}
                </Typography>
            </Stack>
          </Grid>

          {/* Contact & Social */}
          <Grid size={{xs:12,md:4}}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              {t("contactTitle")}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 1 }}>
              {t("phoneLabel")}<br />
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("phoneNumber")}
                </Typography>
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 1 }}>
              {t("emailLabel")}<br />
                <Typography
                  component="a"
                  variant="body2"
                  sx={{
                    color: "primary.contrastText",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {t("emailAddress")}
                </Typography>
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                aria-label="Facebook"
                href={t("social.facebook")}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "primary.contrastText",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href={t("social.twitter")}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "primary.contrastText",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href={t("social.linkedin")}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "primary.contrastText",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href={t("social.instagram")}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "primary.contrastText",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} {t("logo")}. {t("rights")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
