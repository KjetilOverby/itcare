import { Grid, makeStyles, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    height: '25vh',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      height: '18em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '25em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '29em',
    },
  },

  headerFooter: {
    color: theme.palette.dark.main,
    fontWeight: 500,
    fontSize: '1.5rem',
  },
  textFooter: {
    color: theme.palette.tertiary.main,
    fontSize: '1.2rem',

    '&:last-child': {
      marginBottom: '3rem',
    },
  },
  footerContainer: {
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Grid className={classes.footerContainer} container>
          <Grid item>
            <Typography className={classes.headerFooter}>IT CARE AS</Typography>
            <Typography className={classes.textFooter}>Kaffegata 53</Typography>
            <Typography className={classes.textFooter}>2270 Flisa</Typography>
            <br />
            <Typography className={classes.textFooter}>
              tlf: 629 57 722
            </Typography>
            <Typography className={classes.textFooter}>
              e-post: post@itcare.as
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.headerFooter}>
              Åpningstider
            </Typography>
            <Typography className={classes.textFooter}>
              mandag - fredag 11:00 - 16:00
            </Typography>
            <Typography className={classes.textFooter}>
              lørdag 11:00 - 14:00
            </Typography>
            <Typography className={classes.textFooter}>
              søndag stengt
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
