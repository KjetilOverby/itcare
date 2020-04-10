import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import theme from '../src/theme';
import questionIllustration from '../images/questionIllustration.png';
import presentationIllustration from '../images/presentation.png';
import moneyIllustration from '../images/money.png';
import goodToKnowIllustration from '../images/know.png';
import serviceIllustration from '../images/service.png';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    background:
      'url("https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")',
    backgroundSize: 'cover',
    height: '50vh',
    backgroundPosition: '50% 140%',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: '50% 220%'
    },
    [theme.breakpoints.down('xs')]: {
       backgroundAttachment: 'initial',
       height: '40vh'
    }
  },
  imgTextContainer: {
      margin: '8em 0 0 60vw',
      width: '60em',
      [theme.breakpoints.between(1900, 1990)]: {
          margin: '8rem 0 0 50vw'
      },
      [theme.breakpoints.down('lg')]: {
        margin: '7rem 0 0 45vw'
    },
      [theme.breakpoints.down('lg')]: {
        margin: '2rem 0 0 7vw',
    }
  },
  
  imgHeader: {
    color: theme.palette.tertiary.main,
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0rem 0 0 0rem',
  [theme.breakpoints.down('lg')]: {
      fontSize: '2rem'
  },
  [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      color: theme.palette.tertiary.main,
  }
  },
  imgHeader2: {
    color: theme.palette.secondary.main,
    fontSize: '4.5rem',
    fontWeight: 'bold',
    margin: '-2rem 0 0 0',
    [theme.breakpoints.down('lg')]: {
        fontSize: '3.5rem',
        marginTop: '-1rem'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        marginTop: '-1rem',
        color: theme.palette.tertiary.main,
    }
  },
  imgText: {
    color: theme.palette.tertiary.main,
    fontSize:'1.3rem',
    [theme.breakpoints.down('xs')]: {
        fontSize: '1rem'
    }
  },
  illustrationContainer: {
    position: 'relative',
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
     marginBottom: '45rem'
    }
  },
  illustration: {
    height: '70em',
    [theme.breakpoints.down('xs')]: {
       height: '20em'
    }
  },
  illustrationTextContainer: {
    position: 'absolute',
    top: '12em',
    left: '10rem',
    width: '26.2em',
    color: theme.palette.dark.main,
    [theme.breakpoints.down('xs')]: {
       left: '1rem',
       width: '20em',
       top: '17rem'
      
    }
  },
  headerIllustrationContainer: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: theme.palette.dark.main,
  },
  textIllustrationContainer: {
    fontSize: '1.2rem',
    [theme.breakpoints.down('xs')]: {
       
    }
  },
  li: {
    fontSize: '1.2rem',
  },
  illustration2: {
    height: '30em',
  },
  howHeader: {
    margin: '7rem 0',
  },
  howTextContainer: {
    width: '30em',
    marginTop: '5rem',
  },
  howText: {
    fontSize: '1.2rem',
  },
  teamViewerContainer: {
      width: '30em',
      margin: '7rem 0',
  },
  teamViewerText1: {
      color: theme.palette.secondary.main,
      marginBottom: '2rem'
  },
  teamViewerText2: {
    color: theme.palette.secondary.main,
    marginBottom: '2rem',
    fontStyle: 'italic'
  }
}));

const SupportComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.imgContainer} container>
      
        <Grid className={classes.imgTextContainer} item>
        <Typography className={classes.imgHeader}>
          Vi fikser pc'n din
        </Typography>
        <Typography className={classes.imgHeader2}>
            Uten å være til stede.
        </Typography>
        <Typography className={classes.imgText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nostrum perspiciatis consectetur at assumenda distinctio ipsum quisquam amet a accusantium porro animi inventore, quasi eaque tempore sed illo labore quam.</Typography>
        </Grid>
        
      </Grid>

      <Grid justify="center" container>
        <Grid className={classes.illustrationContainer} item>
          <img
            className={classes.illustration}
            src={questionIllustration}
            alt=""
          />
          <Grid className={classes.illustrationTextContainer} item>
            <Typography className={classes.headerIllustrationContainer}>
              Hva er dette?
            </Typography>
            <Typography className={classes.textIllustrationContainer}>
              Vi tilbyr fjernstyring (fjernhjelp) av maskinene slik at vi kan
              analysere og rette flere problemer og feil, eller gi deg
              brukerstøtte og hjelp til mer daglige problemer uten å måtte møte
              opp hos deg som kunde. Hvordan vet jeg at det er sikkert for meg
              som kunde? Det er viktig for oss at din sikkerhet ivaretas når vi
              tar over kontroll på maskinen. Følgende tiltak er derfor på plass
              ved bruk av fjernstyring :
            </Typography>
            <br />
            <ul className="ul">
              <li className={classes.li}>
                Du ser alltid alt vi ser på din maskin.
              </li>
              <li className={classes.li}>
                Du kan når som helst styre musen og ta over kontroll på
                maskinen.
              </li>
              <li className={classes.li}>
                Alt skjer via en sikker tilkobling med kryptering på
                forbindelsen.
              </li>
              <li className={classes.li}>
                Ingen programvare installeres på din maskin, men kjøres direkte.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid justify="center" container>
          <Typography className={classes.howHeader} variant="h4">
            Hvordan virker dette?
          </Typography>
        </Grid>
        <Grid justify="center" container>
          <Grid item>
            <img
              className={classes.illustration2}
              src={presentationIllustration}
              alt="presetation illustration"
            />
          </Grid>
          <Grid className={classes.howTextContainer} item>
            <Typography className={classes.howText}>
              For å bruke fjernstyring er vi avhengig av at du har en maskin med
              nyere versjon av Windows (XP eller nyere). Vi er også avhengig av
              at du har en tilkobling til Internett, og vi anbefaler et
              bredbåndsabonnement.
            </Typography>
            <ol>
              <li className={classes.li}>Ring oss på telefon 62 95 77 22.</li>
              <li className={classes.li}>
                Spør om fjernhjelp/fjernstyring av din PC
              </li>
            </ol>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid justify="center" container>
          <Typography className={classes.howHeader} variant="h4">
            Hva koster dette?
          </Typography>
        </Grid>
        <Grid justify="center" container>
          <Grid className={classes.howTextContainer} item>
            <Typography className={classes.howText}>
              For privatkunder 750,- pr. time (187,50,- pr. påbegynte 15
              minutt). For bedriftskunder 875,- pr. time (218,75,- pr. påbegynte
              15 minutt).
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.illustration2}
              src={moneyIllustration}
              alt="money illustration"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid justify="center" container>
          <Typography className={classes.howHeader} variant="h4">
            Kjekt å vite
          </Typography>
        </Grid>
        <Grid justify="center" container>
          <Grid item>
            <img
              className={classes.illustration2}
              src={goodToKnowIllustration}
              alt="money illustration"
            />
          </Grid>

          <Grid className={classes.howTextContainer} item>
            <Typography className={classes.howText}>
              <ul>
                <li className={classes.li}>
                  Du vil hele tiden se hva som gjøres.
                </li>
                <li className={classes.li}>
                Du har muligheten til å ta over kontroll ved å bruke musen.
                </li>
                <li className={classes.li}>
                Du kan også avslutte når du selv ønsker det ved å avslutte fjernstyringsprogramvaren.
                </li>
                <li className={classes.li}>
                Når kundebehandleren er ferdig med feilrettingen, vil du få beskjed om at han har logget seg av maskinen.
                </li>

              </ul>
            </Typography>
          </Grid>
        </Grid>

        <Grid justify="center" container>
          <Typography className={classes.howHeader} variant="h4">
           Tjenester via fjernhjelp
          </Typography>
        </Grid>

        <Grid justify="center" container>
          

          <Grid className={classes.howTextContainer} item>
            <Typography className={classes.howText}>
              <ul>
                <li className={classes.li}>
                Installering/Oppgradering av antivirus, antispyware og andre applikasjoner.
                </li>
                <li className={classes.li}>
                Installering av systemoppdateringer, slik som servicepakker og sikkerhetsoppdateringer.
                </li>
                <li className={classes.li}>
                Installering av skrivere og skannere
                </li>
                <li className={classes.li}>
                Vedlikeholdssjekk av ditt system hvor vi kontrollerer at ditt system er oppdatert med siste versjoner på oppdateringer.
                </li>
                <li className={classes.li}>
                Oppsett av epost-kontoer
                </li>
                <li className={classes.li}>
                Oppsett/sikring av trådløse nettverk
                </li>
                <li className={classes.li}>
                Generell bruk, oppsett og feilsøking på din/dine datamaskiner


                </li>

              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.illustration2}
              src={serviceIllustration}
              alt="service illustration"
            />
          </Grid>
        </Grid>

      <Grid justify='center' container>
        <Grid className={classes.teamViewerContainer} container>
        <Grid item>
                <Typography className={classes.teamViewerText1}>Dette er bare noe av hva vi kan tilby, ta gjerne kontakt om det du trenger hjelp med ikke står i listen ovenfor.</Typography>
                <Typography className={classes.teamViewerText2}>Vi gjør oppmerksom på at det ikke er alle typer feil som kan rettes og at maskinen MÅ være koblet opp mot internett for at vi skal kunne få tilgang til den.</Typography>
            </Grid>
        <Grid item>
           <a target='_blank' href="https://www.teamviewer.com/no/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdgAAABrCAMAAADjLmPEAAAA21BMVEX///8NiuYFZMgNi+YMheIFZ8oKeNgMh+MJddYJctQLgN4GbM4FZskGas0Lft0MguAAY8/r8PqDsekAh+fA2vcJetkAf+MAc9kmgtvY5fcAbtcAed8Jd9b2+v4AcdgAfOAAadPO4/lEnesAZtKrzvTx9/2Yvew2iN3g7PrI2vMAXMiYwe9mq+09l+iAte2BrealweoAXc600/VUo+yMue1WmOJinOJMj92oxOx1puSOseUAV8y+0O1yse4mk+mGue9ooeNyoOBZkdywyOtLiNd+pN41edBpltmfueXvBEXLAAATmElEQVR4nO2dCXuiyBaGTbRVdNxihIgt4Ja4xsSspmP2TPr//6Jbp6BWCsTExtxpvufOXFMUxal669QOk0qlUp3VQ/rP6mG6SCWKW1N97w9zTaf36g+DXefzb9O0/sexYrTpXWf0L1NHj4VrOl2/3HVW/y6t/nw7TMjuOqt/lx724pI+3HVe/yrF5a/IY5u7zutfpQTsf1Qbtqe5TJ0qt2FTnICNUxswrVf0end1OekvDhf9/uT0Iq3r9UwC9nsqIpVMRe9ODn2LDM3+KqdHdN0EbKyKSHW6aAelMJw86PUE7HfTeiB1/aEfSNXV8FHX17ptAjZW5dYoY3c7UdLp7+lrUkrAxqp1NLqRcSxylQTs91Eoi0rucJO0JnY9AftdFEIi0zrdMLFBN6Q9TsDGqjB3/QSJvp1JwH4LZYKkX3wqvWGuEpCgnYCNU0H+ZX96+/QioDlOPDZWBbhX6wuHlFZ24rG7VwDX0VfSvFSSTcDGKjXXSGsSwTpWkU3Axqrt+yvoUUE2ARurVFy3cAh4qidgd6uKT58fD/OaFXzpJmDjlM+xyldbSbddluezCdhYJXOtFLaUcKeVgN2l5AbT+OKAmOnAFlNuJWDjlMS1fLC9pDMJ2B1KBrvFpEetKGA7hxG0k7Pm7Q6oFhIDRxiQH2Ex45fkVVt93fGqHAHshV5fK72/TbMiCz96Gnx9aKMILfSj3YKY3+tVUdFfZ1tNu2ZEADuN8PJQfTdgJ/Aioh58/RFd31uhH214s63+vcAWeG1v5ORq2eAS//8DW1vDK41M16HIvjvYLTssaquM9WAvIpxK3hHYVBceHrgv3cGHbuFXWwcjvy/Yr68Ry7oqrwcb4UzyrsD2wTY96F38U3S1PoFfuI+1vy3Y8tHWUx+11oON8JLIrsC6nhj0cEwdj9fbk36/P/ler4lyYO3b7SdfLm8DbGVHYFNTZFwmoIMa6cHXvoHKTFb4eX91hVxTTS9tmryhBtu1dSbu+CoXqrd2BfYQjvnY6jxOkbE7q3Hrxbg2rsPi1Z7UmwNDI7RraRrrwA5qTINLeuZcH3HhtTWvmPw5gT2VifISZr4zw9aKgc2HEKotTTNgKnRlFcLQNtaBFTSpfLOjb6fIoIzygzfgzJXPneSMRQysGfglpsHSyjaCRlYjo2wcBaNdZjcCW/5me0FNO8iWi0omo2/0okS8Yi3xSUCMwdJEcLTAkVW5UW4YR/cBVxf5jcDq3wxsKg1b1I/+8DbsStrx2xNZrCVWH5xwsaKRVWAKxy2oFkFoh9a2PLa9WM320PjqYdoPaFua/dXFLJ1+uFj1w8d0tcXkdHU6OeR7yNrh5PJxspBvxFWt4k9igcILq9CntA8nq+n0VPG++Kc1IEkG9+2dy+nFdLpiYA1VszKYm/kGKD8PTKlt4hhZS42Wjp6sL4FtTvW6t/i4V9cvFOAme/D+dRr/r67vTfi875HxtYUKeTHT6zAHraN0yFMWD95ehJ4Wh0oD7Jn+8cVVhQ+ezmazB7GwOxfuU+AxXVa20263O/OPpS+UwYczFNylf464JC+kxSSI+ICKibyEzsBa/l0nirXRMENc4MmLhNAqKsdNYxOP1QNOSE3Fl+bruvy+WF9+q17YErqgobXBjI+oY6erPXBh9ZyA8apQqZR9rjmALUl22KSLpustAexU543RH0j54cWsBzm5Jo7tG6TBqhz9ot3gQkyyKzQEaRRVR+0IuZxqEGk+2+emRi5mb+SrnDomjWad+FYll6RuRPJYXbkXNNzzrTvWxaWBlS5HQPlkO270g5H1fj0n7i8ghxjqQtiezbvOwq5UMi3Z0FtkqM46L6DPg63t4ebFtQOnScZZeDHL9y2zR5w/eSbgxvUcbljHeaAppnM6XwFhWbvOuDKwMjrOW5GM0FXkkyyNmDVltMfal8EOVd9BqPPV/lHBdW+vQsme0orhqyGVRzRZlcJsPg/gm7bcFD2UkYkMD+w8c2AH7vdWUIcwm5GPr5AkYDHL911J16q6NEhboOBcl5QBxMihrmI2q3utE9+q4QU83MHodYhBweaf+CTbB6aW5XUUpgIfMy+hfTU2AHtsKxYg2xXlq5l15pDNFhdcZ7HpdOQyZKehPvMtaub47z5OUTNbFkoHdpqRidw0AjY7DAY2jUs55w7yBv00QMl5rneI/shJje7Iq5cZMbiboaupbfzdpUra/cbLoI8Z5rj9iRUOQEGn7uo1A8tVIsDaEJUNlRRXQDuyNgKr8NguJZWp6HrFjw1VVxJWyZ0+srevM8SrJ2FfUVBUmwpXGviEjyGOjCbITn5pHTyWRVnB0/ijFxMbHuN1Hrp/+WXqLaUKjWtqAHd5+/wXOEluYHEKyWTYAsnKzWGFtiK0iz0jIT5v3VzIa6mJzU3AThQeu6Cc9Fl/dPioExAZUsHb1GHdxrdDo5BlXh5sRrd13RZJQ5jN1RlhggMbGdJqdQ4FWdzgRfDYIZgjjrf6NquIsJhVEcd+kMM0srki3lQhGUp18P1CAz7BS5q0mCHVXIZb1iYsjFevkO5M44tYRbRN0wsyI3ksGaQzsDk6A3InIjV6Ep2MezvsfRI34JYE6J5XsWlUppKDSeDgVHi7qAJNXG3F0uG7L7yRIYzVhjCH49fOr2DUT8DCmlRFGviuIMxNAy9mCYcGYU6sjyBbwjmcGQS4pTiD27spQfgx1GVP4fbyMbtMh0d4ErolrBitc4MLp2Zu1BTTUzok9iEhQJcDRiSElF5fl6LU5HuOGdicl8olC8rY3shzVZDrDGhoFUT/RKiRD/PLqDcNFMMDi2e+vj1KMNEbbcFiljA8gzlxGbPn1yhrLVpTmzhJaT7qPoeYdQqm83sShAP22Oa5k9+ejPMl2Ec8NhLYlm+dakoKm+YhRb+G4OV1YrZcWYQ9eQuh4NVobuGDFh1z2TKdKrZ8QaATNBVvnXEB2EDe7qsG2/WEtaqKbyvsEVlQntAIBa4HhqeWT1Fzi+57YsEQzTMDbi74jktCydBjG6dlllssAtbCTXH7zrG2hFXzPHa4UVPsB0uGUwXWGB6QY6120HaofNMxm0bROFf0tTE2b3kgYUIXedYSl9JhL9Je8s+74cDC62j+YzJNNAQruLjBFTk7cMcBHo7my/ycKV2hPg5H723fjPMQ5bJMzDhFZWLzi2Y/PbE+ditoNeeN9rHeEz4HdkhOnXM+dKurih8iH05W17OTdI7ykcFyc5Q5PfXMCvmJhAnzm4EJK3NsXHKQR/YJ5XyTZWDB4JZ/ebjFHjQrC+hRbSrA/OeyzFdVyLhXL2stwUiiNsQgPQsGy8+2qcdyo+Ivo9UcNuEZbeaxDalHXpBeF2XCYw4/FccqO0u7Zds6PoxDI3i9MJ1GcUOeS+rWORp2oASbusoK80EwMivYfYMimC7YJhzzyqV8msFQv+bliTdkaHi+BihZjsBkD/MhKgPVS5BQDqRHAMuFjp32sXcsrD3vyWi1MIVgTaVerU3AGjJYNpxSiQ0umyeGImb5REpFAOuvHgc0TDhOco/MytJnwcy8Jb7jxIFd4PN7ZZ+grpFPQBio5hnEqaGCGZh4DmbDJDiD7vAG2re2Okk8LRwyywWwpCnWhD5DRquFrjw1grECq02aYk0GOw8DyzYTDyx/vkEULAlgENlxLAb7gIRJ54QsflQPq99SZjiwZy0lBIyh5bWVT2gQ3SLrG4UyqVowi7e9lrNpFAqNJ2JpSJIdZrka7ItYxAOElvmkGbpWfGTQiIZzJEV90jYB6/PYp1CPJWCvW6p8K8A22JL4pQJiEFhgqZGdS0Q5K50nuclTsGFNDJkijQzWmHQMuvxRs1gw9kCvKMMqN4kDlhsqsPmfciEP3pHXEl5vwTBSTYdy9WFF1PMbgc1KDfe1rcBF5YFdclwbdr5F/yRj2WNyjoMHS8M4jyUHeWwRbAcGCt7+1z3qW4xj4TICiyz2wOJzB7ZSFvFS2Mr09knnNjvFgAfXQxqDHNCAKIFJ3jPLBbC0CXX8m/KDZZV4bTVkP/baIt76r2Krnc6MPwf2iZ6ZUsnEcUYmBdmyTpbHZ7fZhgSWDMq4TaxLGsaBpWHSkc0skHMr7TX66UijXg6sOze6PFBpTqo9VKqWWzmMRjn75AW/ontbeJDWMbgzLRC7caNM8WBOuizUZqjBKsudorVCTlBUPawN1QmKpvk1sEuyw1A2FKriOEd0F8K8HHil5fHxmswvgwXDtCf808lm8/L2NAcWdrMoqSANTRQJr0cfGtymaNsso4zCL+BEDzeA9fk1b6TDDZYSrKU+rVZ7rpZwIxuY5LGJLhd7SqyoAtNBmBMFrCWDpUWtOOHhiW4zsJyZMlhNAVZTgCVheQlszQGb4BeM8q1XyYQbDXmxCxbGzNmgg4FUsIWNrb3O82ccrgkeg09kYQhGKnUQCNZ4CrjFRevIeaECrM7PoFOKV9pmYGX/vqXbuYGveF6SKLTnG/jAkpaA87U7GsaBpWHy6fkTlA8TMnmDfjiyCTiwzZ5trsvoGbJZO3APjGmsNby33D+hdhjU06DmZvPhCc41adGWzVNKgTchtGbx34CLo16xlw+kzrrYaE2xD+yI+LDBPaNJhMsSOj1xptykju+Bvfwy2FtkmYYiDnro/59kuzmweGVAUQtPkAp0pDKA0VgeGm5xgg/BBhwjo007CVWcOjuCJL1YANZUgw3zqNrz+Dzg8ls1BGvq3omUPtGxr+FuO/6iHlVNV65NJz6wlGM0j2UzvQOyE63JYNsIaL7XxoAd39CfB7tEaRi+IUkNCoLbOLhyR2PI9jy/hQc3o2BTtAAiywNxd/iikXlXCFjrTr5TMOzjRRk+rIZgTaWei5uBNX2xKTaHdrJPpPjdsqQx6LKoRUJIoVGwmgKsFgVs6tpAzcgtbpL9Z6x5sHgN1ZTnGPA0Hvc9sFsOHInYCAfDv01p9S7vO20IlcAiN4eA1XwzWVGfetvO0TYD6x9q0dGXRgYTI9oKNPDf1/QZmjsmvmEPdWOk7mgiHFgaxoE1SJhvrAJtj/EGjquYIdwY2J1dwdONpRihbcolAAHaMbrPEUaF2PRrufY4CsfDbUCP3Dw3pM6OW/Ltbf+tileTJR/NY32xcRuI5b5sMDimXL2sstqQ126Hw9eGkWdKiVHWgSVhhn8QCqaZS0tZTm8GCiZgzzBEcTT5pnE1E2sJj4KOW1z7wRZocu2ZQ6j03COIeM3HcALAlp59Bn9VR9qXwbLCzmumY5rc1pNXXZusH0cxHJPflHDcNChEQwHWYGDnJMzyv1M6hxk9/KNo2W54sCm8LdLju6gbPxhitSl2ZSS4JzSFbRzKV5b2iSXECgOrVbf9tueotwWwKYMjxW8lmaS546uPpJ4b446soHFro3fkWTxYEmb5PbbpZcb87bf7rciDHVXBUueFZOFeAwim5Dfecm1PKvSGa5O0GP0K7ZbWuyYgX01olkzWOkO1CwRbCh0+fUKQ383A0mVnrno3q0pmBvWckS8CrR+eU9+VvL+LCrBFFVjFUPGnm5uqYqUEMsq5xR3OhtXLP9+dHT9b7l/ye6iuTb6mwa3b5pkU/Owl2Xg+Rkk67l9cKx4KNmR56VMSiWzmsXy7Naoamk+WyQp46YjXqrckHS8ZCtFSgOUgzkkFKCnAusYVVfshbyWxvVv2iJGm6TYWpYbcHNZw6fimTm6wv/G8cvNosCQdvs9+L0mdvwh2uy57wjtspLGZ0mPR0PunRE4r9o74dfjnKveoUvU+RaB5C2YUYkkBthQRrEdCNb2TPDaV+l0taZyKVcV3IKB4io4yWPX4u2pRTPKdvzoPBbvdXvZepBHFY+/Oq55+ibF/Oz2T5qto+hZF7vNVp1REKjnnL8iVj7xkzp/FdMesQZyTsHMG+10RxnQCV3+piuhoLF8YvoBB2NqSU/W/q4Z0+ws9510Z/Eu5n/LGJ3kjFtDzuVRmItjShyLBz6ok1LBIHst9aUS+NFpqqPR6PVS2R3eKdePm3cfRz59HH79rYkKB6UYNY2oHXUipLtR+v5SQxdX8x1nAZD/gsylBD0G15fjNhCR/ftzKMQZyYlITV93ex9mWP7SNwa7RsDMaNb/X12PX6A98VSZikhLYYnFbz/cNVf/A+keiYBUlOVtqjNs/5JSrCdg4JRd/MXxRP7LeSgnYncoHtjjeBoB5z19jErBxyg+2uP/1z9fcjv3JJmBjlQJsac0pjPW6V3BNwMYrBYHij6BjMBE1UnFNwMYrFYLi/pfIKv01ARuzlAyKP7TP97O3574BcQI2fpXU+hFlZVep+Tggya2MthNFldpj0QhqLO8IRtNbNSjFxGNjVYB7gYe9bL7QOfpnPzi9BGycCgZb2t8POt4fpPfzkOQSsLEqhAQ47SZbKfelYHdNwMatULCl/fP3qO1x8238I7yWJGDjVDhYhHb8HsVrEdZQd03Axq0fa7V//rJu9/313/H+2nQSsLFqPViEdlx9D2Z7/zGu/hMhlQRsrIoCFqk6Hr/8HsnLUYPR3ds4grMmYONXRLBI+wju/tvz3dnr/f3r69nd8xsKqEakmoCNW9HBgv7Z368inEjV6v5+lAY4Absj/RObErCxaj8B+99UPjay4+/1H879r+tjPy6Nd53Vv0ujX3Fx3fY7monC9TKOB+yPXWf0r9NHHD47/sJZm0Sf1OhD+8NYiy/beb0gUWT9D35k8dku7sJ7AAAAAElFTkSuQmCC" alt=""/>
           </a>
        </Grid>
            
            
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SupportComponent;
