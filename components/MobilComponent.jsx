import React from 'react';
import { makeStyles, Grid, Typography, Container } from '@material-ui/core';
import mobileIllustration from '../images/mobile-illustration.png';
import factIllustration from '../images/FactIllustration.png';

const useStyles = makeStyles((theme) => ({
  img: {
    background:
      'url("https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80")',
    height: '50vh',
    backgroundPosition: '50% 160%',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    [theme.breakpoints.down('lg')]: {
      backgroundPosition: '50% 270%',
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '50% 280%',
      backgroundAttachment: 'initial',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'bottom',
      height: '35vh'
    }
  },
  imageTextContainer: {
    margin: '10rem 0 0 30rem',
    width: '25em',
    [theme.breakpoints.between(1900, 1990)]: {
      margin: '5rem 0 0 20rem',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '4rem 0 0 15rem',
    },
    [theme.breakpoints.down('md')]: {
      margin: '3rem 0 0 5rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10rem 0 0 5rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 0 0 1rem'
    },
    
  },
  imageText: {
    color: theme.palette.tertiary.main,
    margin: '0 0 0  0',
    fontSize: '4rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  imageText2: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    margin: '-3rem 0 0 0rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
      margin: '-1.5rem 0 0 0 ',
    },
  },
  imageText3: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    margin: '-2.5rem 0 0 0rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      margin: '-1rem 0 0 0',
    },
  },
  imageText4: {
    color: theme.palette.tertiary.main,
  },
  illustration: {
    height: '50em',
    [theme.breakpoints.between(1900, 1990)]: {
      height: '35rem',
      marginTop: '5rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '35em',
      marginTop: '10rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '22em',
      margin: '8rem 0 0 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '17rem',
      marginLeft: '0rem'
    },
    [theme.breakpoints.down('xs')]: {
        height: '17rem',
        margin: '0 0 0 0rem'
      }
    
  },
  illustration2: {
    height: '40rem',
    marginLeft: '15rem',
    [theme.breakpoints.between(1900, 1990)]: {
      height: '30rem',
      marginLeft: '10rem',
      marginTop: '2rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '22rem',
      marginTop: '5rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '24rem',
      margin: '5rem 0 0 2rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '15rem'
    },
    [theme.breakpoints.down('sm')]: {
        height: '18rem',
        margin: '0 0 0 -2rem',
        
      }
  },
  sectionContainer: {
    minWidth: '80vw',
    marginTop: '1rem',
  },
  mobitLogo: {
    height: '3rem',
    margin: '3rem 0 0 20rem',
    [theme.breakpoints.between(1900, 1990)]: {
      margin: '3rem 0 0 12rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '16rem',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '5rem',
    },
  },
  mobitTextContainer: {
    width: '35rem',
    paddingTop: '4rem',
    marginLeft: '10rem',
    [theme.breakpoints.between(1900, 1990)]: {
      marginLeft: '5rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '25rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '20rem',
      marginLeft: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
        margin: '0 0 0 0rem',
        paddingLeft: '1rem'
      }
  },
  factSectionContainer: {
    margin: '12rem -5rem',
    [theme.breakpoints.between(1900, 1990)]: {
      margin: '12rem 0 6rem 5rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '6rem',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0rem 0 5rem 0rem',
      paddingLeft: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
       paddingLeft: '0'
    }
  },
}));

const MobilComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.img} container>
        <Grid contaiener>
          <Grid className={classes.imageTextContainer} item>
            <Typography className={classes.imageText}>Vi gjør</Typography>
            <Typography className={classes.imageText2}>mobilen</Typography>
            <Typography className={classes.imageText3}>
              klar til bruk
            </Typography>
            <Typography className={classes.imageText4}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad non,
              adipisci deserunt, debitis numquam quam minus officiis veritatis
              voluptate, sequi veniam facilis impedit earum enim. Sapiente modi
              eveniet minus quaerat.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Container className={classes.sectionContainer}>
        <Grid container>
          <Grid item>
            <img
              className={classes.illustration}
              src={mobileIllustration}
              alt=""
            />
          </Grid>
          <Grid item>
            <a target="_blank" href="https://mobit.no">
              <img
                className={classes.mobitLogo}
                src="https://images.squarespace-cdn.com/content/v1/53ad4c00e4b0f2d928c00937/1559747106430-KLI5500XRTIEPHC6WN2V/ke17ZwdGBToddI8pDm48kJA4eOHYBdawbasZJu8GtvQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKclzJLkkxLWneJhIIVtEfTIjQxrVs3b-QE5XrAikxSgYXifM-aRF7QGU65zk3fTv4_/mobit-logo.png"
                alt=""
              />
            </a>
            <Grid className={classes.mobitTextContainer} item>
              <Typography>Vi tilhører mobit kjeden</Typography>
              <br />
              <Typography>
                I Mobit er vi spesialister på mobil og IT for bedriftsmarkedet.
                Vi har forhandlere over hele landet, og vårt mål er å hjelpe
                våre kunder med alt de har behov for i sin digitale hverdag.
              </Typography>
              <br />
              <Typography>
                Navnet vårt er nytt, men som kjede har vi eksistert i 25 år.
                Siden starten med Telering har utviklingen vært rivende, og vi
                har hele tiden vært opptatt av å være i forkant av de behovene
                som oppstår som følge av de teknologiske endringene. I dag kan
                man ikke lenger skille IT og mobil fra hverandre – alt må
                samhandle sømløst for å utnytte de digitale mulighetene.
              </Typography>
              <br />
              <Typography>
                Når vi nå blir Mobit er det et resultat av en sammenslåing av
                Telering og flere IT- og mobilkjeder, blant annet Telehuset,
                Mobildata, Comunit og Nordialog.
              </Typography>
              <br />
              <Typography>
                Mobit er den eneste uavhengige og landsdekkende aktøren som
                tilbyr tjenester og nett fra både Telia og Telenor. Vi har også
                et bredt utvalg leverandører av IT-løsninger og hardware, slik
                sett vil vi alltid kunne gi våre kunder de beste uavhengige
                rådene.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.factSectionContainer} container>
          <Grid item>
            <Grid className={classes.mobitTextContainer} item>
              <Typography variant="h4">Fakta</Typography>
              <br />
              <Typography>
                I dag er det mer enn 30 forhandlere som bærer Mobit-navnet. I
                tillegg har vi nærmere 100 Mobit-medlemmer, og er derved den
                største forhandlerkjeden innen mobil og IT til bedriftsmarkedet.
                Kjeden har ca. 400 ansatte fordelt over hele landet. Samlet
                omsetning i 2017 var 2 mrd NOK. Kjeden har solide og
                industrielle eiere, solid egenkapital og solide partnere.
              </Typography>
              <br />
              <Typography variant="h4">Vårt kundeløfte</Typography>
              <br />
              <Typography>
                Det viktigste for oss er å bidra til å gjøre din digitale
                hverdag enkel, oppdatert og problemfri. Det innebærer at vi tar
                utgangspunkt i dine behov og finner de beste løsningene som
                passer din bedrift.
              </Typography>
              <br />
              <Typography>
                Mobit er landsdekkende og har sertifisert kompetanse på både IT
                og telefoni, derfor kan vi gi deg den beste service og sikre at
                du alltid har de løsningene som er riktige for deg.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <img
              className={classes.illustration2}
              src={factIllustration}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MobilComponent;
