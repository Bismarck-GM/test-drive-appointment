import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@material-ui/core';
// import logo from '../../assets/images/logo.svg';

const useStyles = makeStyles(theme => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  listItem: {
    paddingLeft: '10px',
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <Drawer
      style={{ width: '250px' }}
      variant="persistent"
      anchor="left"
      open
      classes={{ paper: classes.drawerPaper }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src="app/assets/images/logo.svg" alt="asd" width="50%" />
      </Box>
      <List className={classes.listItem}>
        <Link to="/" className={classes.link}>
          <ListItem button selected>
            <ListItemText primary="MODELS" />
          </ListItem>
        </Link>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemText primary="LIFESTYLE" />
          </ListItem>
        </Link>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemText primary="SHOP" />
          </ListItem>
        </Link>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemText primary="TEST DRIVE" />
          </ListItem>
        </Link>
      </List>
      <Box display="flex" justifyContent="center" alignItems="center">
        User Data
      </Box>
    </Drawer>
  );
};

export default Nav;
