"use client";

import React from "react";
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
import StorefrontIcon from "@mui/icons-material/Storefront";
import RouteIcon from "@mui/icons-material/Route";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import DomainIcon from "@mui/icons-material/Domain";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@/components/common/Link";

const drawerWidth = 120;

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Store", href: "/store", icon: <StorefrontIcon /> },
    { text: "Routes", href: "/routes", icon: <RouteIcon /> },
    { text: "Orders", href: "/orders", icon: <LocalShippingIcon /> },
    { text: "Companies", href: "/companies", icon: <PeopleIcon /> },
    { text: "Communication", href: "/communication", icon: <ChatIcon /> },
    { text: "Organization", href: "/organization", icon: <DomainIcon /> },
    { text: "Warehouses", href: "/warehouses", icon: <WarehouseIcon /> },
    { text: "Reports", href: "/reports", icon: <BarChartIcon /> },
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
      <Toolbar />
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {navItems.map((item, key) => (
            <ListItemButton
              key={key}
              component={Link}
              href={item.href}
              sx={{
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 1.5,
              }}
            >
              <ListItemIcon sx={{ color: "text.primary", minWidth: 0, mb: 0.5 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500, textAlign: "center" }}
                sx={{ m: 0, width: "100%" }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <ListItemButton component="a" sx={{ px: 2 }}>
          <ListItemIcon sx={{ color: "text.primary" }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: "1rem", fontWeight: 500 }}
          />
        </ListItemButton>
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
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
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
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;