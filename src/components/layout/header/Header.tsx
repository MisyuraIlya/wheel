"use client";

import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Badge,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);

  const toggleMobileMenu = (open: boolean) => () => {
    setMobileMenuOpen(open);
  };

  const handleProfileClick = (event: MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const mobileNavItems = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 1,
        width: 240,
      }}
      role="presentation"
      onClick={toggleMobileMenu(false)}
      onKeyDown={toggleMobileMenu(false)}
    >
        <Button fullWidth sx={{ justifyContent: "flex-start", textTransform: "none" }}>
          Home
        </Button>
        <Button fullWidth sx={{ justifyContent: "flex-start", textTransform: "none" }}>
          New Delivery
        </Button>
        <Button fullWidth sx={{ justifyContent: "flex-start", textTransform: "none" }}>
          Users
        </Button>
      <Divider />
      <IconButton color="inherit">
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Button
        startIcon={<AccountCircle />}
        onClick={handleProfileClick}
        fullWidth
        sx={{ justifyContent: "flex-start", textTransform: "none" }}
      >
        John Doe
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary" elevation={2} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: logo and nav buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Replace with actual logo image if available */}
                <Typography variant="h6" component="div">
                  MyAppLogo
                </Typography>
              </Box>

            {!isMobile && (
              <>
                  <Button
                    color="inherit"
                    sx={{ textTransform: "none", fontSize: "1rem" }}
                  >
                    New Delivery
                  </Button>
                  <Button
                    color="inherit"
                    sx={{ textTransform: "none", fontSize: "1rem" }}
                  >
                    Users
                  </Button>
              </>
            )}
          </Box>

          {/* Right side: notifications and profile */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={handleProfileClick}
                size="large"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem disabled>
          <Typography variant="subtitle1">John Doe</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileClose}>
            <Typography variant="inherit" sx={{ textDecoration: "none", color: "inherit" }}>
              Profile
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleProfileClose}>
            <Typography variant="inherit" sx={{ textDecoration: "none", color: "inherit" }}>
              Settings
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleProfileClose}>
            <Typography variant="inherit" sx={{ textDecoration: "none", color: "inherit" }}>
              Integrations
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleProfileClose}>
            <Typography variant="inherit" sx={{ textDecoration: "none", color: "inherit" }}>
              Help & Support
            </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileClose}>
            <Typography variant="inherit" sx={{ textDecoration: "none", color: "inherit" }}>
              Logout
            </Typography>
        </MenuItem>
      </Menu>

      {/* Mobile temporary drawer */}
      <Menu
        anchorEl={Boolean(mobileMenuOpen) ? document.body : null}
        open={mobileMenuOpen}
        onClose={toggleMobileMenu(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{ sx: { width: 240 } }}
      >
        {mobileNavItems}
      </Menu>
    </>
  );
};

export default Header;
