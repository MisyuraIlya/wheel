"use client";

import React from "react";
import { AppBar, Toolbar, Button, Box, useTheme, useMediaQuery, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={1}
      sx={{ zIndex: (theme) => theme.zIndex.drawer -1 }}
    >
      <Toolbar sx={{ justifyContent: isMobile ? "center" : "flex-start", px: 2}}>
        <Box
          sx={{
            display: "flex",
            pl:'100px',
            gap: 2,
            flexWrap: "wrap",
            width: "100%",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
            <Typography>
                TITLE
            </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
