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
        color: "primary.contrastText",
        py: { xs: 2, md:2 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
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
