import React from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Container,
  Link,
} from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EventNoteIcon from '@material-ui/icons/EventNote';
import StoreIcon from '@material-ui/icons/Store';
import BuildIcon from '@material-ui/icons/Build';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import SpeakerPhoneIcon from '@material-ui/icons/SpeakerPhone';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: 'auto',
    width: '100vw',
    overflow: 'hidden',
  },
  mainContainer: {
    background:
      'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")',
    height: '70vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(3px)',
    backgroundPosition: 'center',
    position: 'relative',
    transform: 'scale(1.1)',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
        height: '65vh',
       
      },
    [theme.breakpoints.down(350)]: {
        height: '100vh'
      },
  },

  topLayerContainer: {
    position: 'absolute',
    top: '8vh',
    heigh: 'auto',
    width: '100vw',
  },
  header: {
    color: theme.palette.tertiary.main,
    fontWeight: 'bold',
    marginTop: '6rem',
    fontSize: '4rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '4rem',
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '4rem 2rem',
      fontSize: '2rem',
    },
  },
  header2: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    margin: '3rem 0',
    fontSize: '2.5rem',
    [theme.breakpoints.down('md')]: {
      margin: '2rem 0',
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '-2rem 0 2rem 2rem',
      fontSize: '1.5rem',
    },
  },
  headerText: {
    color: theme.palette.tertiary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      marginLeft: '2rem',
    },
  },
  serviceBoxContainer: {
    maxWidth: '100rem',
  },
  box: {
    height: '25rem',
    width: '25rem',
    margin: '4rem 3rem 1rem 3rem',
    //border: `2px solid ${theme.palette.dark.main}`,
    padding: '1.5rem 3rem',
    borderRadius: '10px',
    color: theme.palette.secondary.main,
    // background: theme.palette.tertiary.main,
    boxShadow: '3px 3px 30px rgba(0,0,0,.15)',
    [theme.breakpoints.between(1900, 1990)]: {
      width: '23rem',
    },
    [theme.breakpoints.down(350)]: {
      width: '40rem',
      margin: '1rem 1rem 1rem 1rem'
    },
  },
  boxContainer: {
    background: 'white',
    position: 'relative',
    marginBottom: '4rem',
  },
  boxHeader: {
    marginBottom: '1rem',
    [theme.breakpoints.between(1900, 1990)]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  boxText: {
    [theme.breakpoints.between(1900, 1990)]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  button: {
    marginTop: '2rem',
    color: 'orangered',
    border: '1px solid orangered',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '2rem',
    },
    '&:hover': {
        textDecoration: 'none'
    }
  },
  imageButton: {
    marginTop: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '2rem',
    },
  },
  sectionHeader: {
    margin: '6rem 0 0 0',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
      margin: '3rem 0 0 0',
    },
  },
  icon: {
    fontSize: '4rem',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <div className={classes.mainContainer}></div>
      <Grid justify="center" container className={classes.topLayerContainer}>
        <Grid item>
          <Typography variant="h2" className={classes.header}>
            -forenkler din digitale hverdag
          </Typography>
          <Typography variant="h4" className={classes.header2}>
            IT CARE AS
          </Typography>
          <Typography variant="h6" className={classes.headerText}>
            Bedrift eller privat.
          </Typography>
          <Typography variant="h6" className={classes.headerText}>
            Ditt førstevalg for support og service.
          </Typography>
          <Typography variant="h6" className={classes.headerText}>
            Hos oss så får du den lille ekstra servicen.
          </Typography>
          <Typography variant="h6" className={classes.headerText}>
            Vi hjelper deg med alt av forbrukerelektronikk som PC/Mac,
            TV/decoder og Mobil.
          </Typography>
          <Button
            className={classes.imageButton}
            variant="contained"
            color="primary"
          >
            Ta Kontakt
          </Button>
        </Grid>
      </Grid>

      <Grid className={classes.boxContainer} justify="center" container>
        <Grid item xl={12} lg={12}>
          <Typography className={classes.sectionHeader} variant="h2">
            Service
          </Typography>
        </Grid>

        <Grid
          container
          justify="center"
          className={classes.serviceBoxContainer}
        >
          <Grid container className={classes.box}>
            <Grid item>
              <LocalShippingIcon className={classes.icon} />
              <Typography className={classes.boxHeader} variant="h4">
                {' '}
                Ute service
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Privat og bedrift
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Vi kommer ut til deg
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Raskt og effektivt
              </Typography>
              <Button className={classes.button} variant="outlined">
                Les mer
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.box}>
            <Grid item>
              <BuildIcon className={classes.icon} />
              <Typography className={classes.boxHeader} variant="h4">
                Verksted
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Feilsøking/reparasjoner
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                PC/laptop
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Mobil-hjelp
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Jaktradio-programmering
              </Typography>
              <Button className={classes.button} variant="outlined">
                Les mer
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.box}>
            <Grid item>
              <EventNoteIcon className={classes.icon} />
              <Typography className={classes.boxHeader} variant="h4">
                Bedriftsavtale
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Prioritet
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                fjernhjelp
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Tilgjengelighet
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Egne tilpassede avtaler
              </Typography>
              <Link href="/bedrift">
                <Button className={classes.button} variant="outlined">
                  Les mer
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.box}>
            <Grid item>
              <PhonelinkSetupIcon className={classes.icon} />
              <Typography className={classes.boxHeader} variant="h4">
                Mobil
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Klar til bruk
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Telering
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Oppstartshjelp
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Service
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Backup
              </Typography>
              <Link href='/mobil'>
              <Button className={classes.button} variant="outlined">
                Les mer
              </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.box}>
            <Grid item>
              <SpeakerPhoneIcon className={classes.icon} />
              <Typography className={classes.boxHeader} variant="h4">
                Jaktradio
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Icom
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Vi programmerer
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                De seneste nyhetene
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Vi hjelper deg i gang
              </Typography>
              <Button className={classes.button} variant="outlined">
                Les mer
              </Button>
            </Grid>
          </Grid>

          <Grid container className={classes.box}>
            <Grid item>
              <StoreIcon className={classes.icon} />
              <Typography className={classes.boxHeader} variant="h4">
                Butikk
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                PC/laptop
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Telefoner/nettbrett
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Radio/TV
              </Typography>
              <Typography className={classes.boxText} variant="h6">
                Jaktradio
              </Typography>
              <Button className={classes.button} variant="outlined">
                Les mer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
