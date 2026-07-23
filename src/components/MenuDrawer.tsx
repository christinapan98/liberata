import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function MenuDrawer() {
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const scrollToContact = () => {
    document.getElementById("section-contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/platforms">
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>
        {/* Pages coming soon — shown disabled to match the desktop nav */}
        {['Research', 'Team', 'News'].map((name) => (
          <ListItem key={name} disablePadding>
            <ListItemButton disabled>
              <ListItemText primary={name} secondary="Coming soon" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={scrollToContact}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/beta-signup">
            <ListItemText primary="Sign up for beta" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div onClick={() => toggleDrawer(true)} aria-label="Open menu">
        <MenuIcon/>
      </div>

      <Drawer sx={{zIndex: 10000}} anchor="right" open={isDrawerOpen} onClose={() => toggleDrawer(false)} onClick={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
