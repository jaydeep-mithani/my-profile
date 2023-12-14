"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "@/Content/Master";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center">
      <Typography variant="h6" className="my-3">
        Jaydeep Mithani
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item) => (
          <ListItem key={item?.title} disablePadding>
            <ListItemButton className="text-center">
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="felx" sx={{ "& .MuiPaper-root": { position: "sticky" } }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#00aabb",
          boxShadow: "0px 0px 15px 0px #00ccdd99",
        }}
        className="my-5 mx-auto max-w-[96%] rounded-full"
      >
        <Toolbar className="pl-6">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="mr-3 sm:hidden"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="grow xs hidden sm:block"
          >
            Jaydeep Mithani
          </Typography>
          <Box className="hidden sm:block">
            {navItems?.map((item) => (
              <Button
                key={item?.title}
                variant="text"
                className="text-white hover:bg-[#00000011]"
              >
                {item?.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="block sm:hidden bg-[#00aabb66]"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#004455",
              color: "#fff",
            },
            "& .MuiDivider-root": {
              borderBottomWidth: "2px",
              borderBottomColor: "#ffffff33",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
