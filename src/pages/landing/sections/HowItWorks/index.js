import { Box, Container, Grid } from '@mui/material';
import * as React from 'react';
import steps from './helpers/index';

export default function HowItWorks() {
  return (
    <Container
      component="section"
    >
      <h2>Entenda como funciona:</h2>
      <p>
        No Clube Wine você recebe, todo mês, 2 rótulos escolhidos
        a dedo das melhores vinícolas do mundo!
      </p>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={2} md={3} spacing={2}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Box>
              <img src={steps.one.image} alt={steps.one.title} />
            </Box>
            <Box>
              <h2>{steps.one.title}</h2>
              <p>{steps.one.description}</p>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} md={3} spacing={2}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Box>
              <img src={steps.two.image} alt={steps.two.title} />
            </Box>
            <Box>
              <h2>{steps.two.title}</h2>
              <p>{steps.two.description}</p>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} md={3} spacing={2}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Box>
              <img src={steps.three.image} alt={steps.three.title} />
            </Box>
            <Box>
              <h2>{steps.three.title}</h2>
              <p>{steps.three.description}</p>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} md={3} spacing={2}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Box>
              <img src={steps.four.image} alt={steps.four.title} />
            </Box>
            <Box>
              <h2>{steps.four.title}</h2>
              <p>{steps.four.description}</p>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}
