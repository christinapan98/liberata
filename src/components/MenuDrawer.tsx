import React, {useState, useRef} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ArrowOutward} from '@mui/icons-material';

function MenuDrawer({scrollToSection}) {
  const [isDrawerOpen, toggleDrawer] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        {[['Overview', 'section-overview'], ['Current problems', 'section-problems'], ['Contact', 'section-contact']].map((item, index) => (
          <ListItem key={item[0]} onClick={() => scrollToSection(item[1])} disablePadding>
            <ListItemButton>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider/>
      {/* <List>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="https://docs.google.com/document/d/15CcvTbmist-dSgsto2hurLP8hjlUe7t6fq_C2MGNNJo/edit?usp=sharing" target="blank" style={{fontSize: '15px', display: 'flex', alignItems: 'bottom'}}> 
              Technical paper
              <ArrowOutward style={{fontSize: '20px', marginLeft: '4px'}}/>
            </a>
          </ListItemButton>
        </ListItem>
      </List> */}
    </Box>
  );

  return (
    <div>
      <div onClick={() => toggleDrawer(true)}>
        <MenuIcon/>
      </div>
          
      <Drawer sx={{zIndex: '100'}} anchor="right" open={isDrawerOpen} onClick={() => toggleDrawer(false)}>
        {DrawerList}
       
        
      </Drawer>
    </div>
  );
};

export default MenuDrawer;