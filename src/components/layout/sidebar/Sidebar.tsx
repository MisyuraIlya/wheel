"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 120;

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  // Define the list of navigation items
  const navItems = [
    {
      text: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      text: "New Delivery",
      href: "/new-delivery",
      icon: <LocalShippingIcon />,
    },
    {
      text: "Users",
      href: "/users",
      icon: <PeopleIcon />,
    },
    {
      text: "Notifications",
      href: "/notifications",
      icon: <NotificationsIcon />,
    },
    {
      text: "Profile",
      href: "/profile",
      icon: <AccountCircleIcon />,
    },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "background.paper",
      }}
    >
        <Toolbar>
        {/* SPACE FROM HEADER */}
        </Toolbar>
        <Divider />
        <Box sx={{ flexGrow: 1 }}>
        <List>
            {navItems.map((item) => (
                <ListItemButton
                    component="a"
                    sx={{
                        mx: "auto",             
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        py: 1.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        color: "text.primary",
                        minWidth: 0,
                        mb: 0.5,
                    }}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        textAlign: "center",
                    }}
                    sx={{
                        m: 0,
                        width: "100%",
                    }}
                    />
                </ListItemButton>
            ))}
        </List>

        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
        <Link href="/logout" passHref>
            <ListItemButton component="a" sx={{ px: 2 }}>
            <ListItemIcon sx={{ color: "text.primary" }}>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
                primary="Logout"
                primaryTypographyProps={{ fontSize: "1rem", fontWeight: 500 }}
            />
            </ListItemButton>
        </Link>
        </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {!isMobile && (
        <Drawer
          variant="permanent"
          open
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
