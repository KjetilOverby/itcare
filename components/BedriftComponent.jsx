import React from 'react';
import { Container, makeStyles, Grid, Typography } from '@material-ui/core';
import Deal from '../images/deal.png';

const useStyles = makeStyles((theme) => ({
  bedriftContainer: {
    padding: '10rem 0',
    justifyContent: 'center'
  },
 
  textContainer: {
      marginTop: '4rem',
      width: '30rem',
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('xs')]: {
        width: '20rem',
        marginBottom: '-5rem'
      }
    
  },
  illustration: {
      height: '45em',
      margin: 0,
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      [theme.breakpoints.between(1900, 1990)]: {
        height: '40em',
      },
      [theme.breakpoints.down('md')]: {
        height: '25em'
      },
      [theme.breakpoints.down('xs')]: {
        height: '18em'
      }
  },
  header: {
    fontSize: '2.7rem',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    margin: '8rem 0 -5rem 0',
    [theme.breakpoints.between(1900, 1990)]: {
      fontSize: '2.5rem',
      margin: '5rem 0 -7rem 0',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '4rem 0 -10rem 0'
    },
    [theme.breakpoints.down('md')]: {
      margin: '4rem 0 -10rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '7rem 0 -8rem 0'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '5rem 0 -10rem 0'
    },
  },
  text: {
     fontSize: '1.2rem',
     [theme.breakpoints.down('md')]: {
       fontSize: '1rem'
     },
     [theme.breakpoints.down('xs')]: {
       fontSize: '1rem',
       
    }
  }
}));

const Bedrift = () => {
  const classes = useStyles();
  return (
    <div>
    <Typography className={classes.header}>Løsninger for bedrifter</Typography>
       <Grid className={classes.bedriftContainer} container>
           <Grid item>
              <img className={classes.illustration} src={Deal} alt=""/> 
           </Grid>
           <Grid item>
           <div className={classes.textContainer}>
              
              
              <Typography className={classes.text}>I samarbeid med våre partnere utfører vi et variert utvalg av tjenester hos bedriftskunder.</Typography>
              <br/>
              <Typography className={classes.text}>IT Care AS utfører installasjon og kabling av nettverk, oppsett av servere, med eller uten løsninger for hjemmekontor og fjerninnlogging. Vi tilbyr også utvalgte back-up løsninger. Dette er sikkerhetsløsninger som kan spare deg for mye bryderi i fremtiden. Dersom det er behov for oppdatering eller installasjon av programvare hjelper vi med dette.</Typography>
              <br/>
              <Typography className={classes.text}>Vi kan i fellesskap bli enig om en IT-løsning som er tilpasset deres behov. I tillegg tilbyr vi generelle konsulenttjenester og skreddersydde serviceavtaler.</Typography>
              </div>
           </Grid>
       </Grid>
    </div>
  );
};

export default Bedrift;
