import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  
} from '@material-ui/core';
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
import LogoImage from '../images/itcareLogo.png'
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '0',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.4rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2.1rem'
    }
  },
  header: {
    height: '8vh',
    [theme.breakpoints.down('md')]: {
      height: '12vh'
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab
  },
  drawerIcon: {
    height: '40px',
    width: '50px;',
    color: theme.palette.dark.main
  },
  logo: {
    height: '4rem',
    paddingLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      height: '3rem'
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      background: 'transparent'
    }
  },
  drawer: {
    background: theme.palette.primary.main,
    color: 'gray',
    width: '12rem'
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.dark.main
  }
}));

const Header = props => {
  const classes = useStyles();
  const themes = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(themes.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeTab, setActiveTab] = useState(0)

  const changeActiveTab = (e, value) => {
     setActiveTab(value)
  }

  const tabs = (
    <Tabs
     value={activeTab} 
     className={classes.tabContainer} 
     onChange={changeActiveTab}
     indicatorColor='primary'
     >
     <Link href='/'>
      <Tab className={classes.tab} label="Hjem" />
      </Link>
      <Link href='/bedrift'>
      <Tab className={classes.tab} label="Bedrift" />
      </Link>
      <Link href='/mobil'>
      <Tab className={classes.tab} label="Mobil" />
      </Link>
      <Tab className={classes.tab} label="Produkter" />
      <Link href='/support'>
      <Tab className={classes.tab} label="support/fjærnstyring" />
      </Link>
      <Tab className={classes.tab} label="Om oss" />
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
      <div className={classes.toolbarMargin} />
        <List disablePadding>
        <Link href='/'>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
             Hjem
            </ListItemText>
          </ListItem>
          </Link>
          <Link href='/bedrift'>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Bedrift
            </ListItemText>
          </ListItem>
          </Link>
          <Link href='/mobil'>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
              Mobil
            </ListItemText>
          </ListItem>
          </Link>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
             Produkter
            </ListItemText>
          </ListItem>
          <Link href='/support'>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
             Support/Fjærnstyring
            </ListItemText>
          </ListItem>
          </Link>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <ListItemText className={classes.drawerItem} disableTypography>
             Om oss
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.header}>
          <img
            className={classes.logo}
            src={LogoImage}
            alt=""
          />
        
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
