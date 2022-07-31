import { Container, Grid, Typography } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import PropTypes from 'prop-types';
import React from 'react';
import BenefitBox from '../../../../components/BenefitBox';
import { benefits } from './utils/helpers';

function Benefits({ headingToggle }) {
  const theme = useTheme();
  return (
    <section style={{
      padding: '48px 0', width: '100vw', backgroundColor: theme.palette.background.wineBox, borderTop: `1px solid ${theme.colors.borderGrey}`,
    }}
    >
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: '"Sniglet", cursive',
            fontWeight: 700,
            marginBottom: '48px',
          }}
        >
          {headingToggle
            ? 'Como Sócio Wine você garante benefícios exclusivos'
            : 'Seus benefícios de pessoa Sócia Wine'}
        </Typography>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={{ xs: 2, sm: 2, md: 2 }}
        >
          {benefits.map(({ pContent, imgAlt, imgSrc }) => (
            <Grid key={pContent} item xs={4} sm={4} md={3}>
              <BenefitBox pContent={pContent} imgAlt={imgAlt} imgSrc={imgSrc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

Benefits.propTypes = {
  headingToggle: PropTypes.bool.isRequired,
};

export default Benefits;
