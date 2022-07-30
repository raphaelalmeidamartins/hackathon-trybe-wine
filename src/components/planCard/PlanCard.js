import { Chip, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { TbGift } from 'react-icons/tb';

function PlanCard({ selectedPlan, showTitle }) {
  return (
    <Grid item xs={8} justifyContent="center">
      {showTitle && <h3>{selectedPlan.name}</h3>}
      <Chip color="secondary" label={selectedPlan.promotion} />
      <p>
        {'De '}
        <span style={{ textDecoration: 'line-through' }}>
          {`R$ ${selectedPlan.price}`}
        </span>
        {' por:'}
      </p>
      <h2>
        {`R$ ${selectedPlan.priceWithDiscount}/mês`}
      </h2>
      {selectedPlan.gift && <Chip sx={{ paddingLeft: 1, paddingRight: 1 }} icon={<TbGift sx={{ marginBottom: 4 }} size="1rem" />} label={selectedPlan.gift} />}
    </Grid>
  );
}

PlanCard.defaultProps = {
  showTitle: false,
};

PlanCard.propTypes = {
  selectedPlan: PropTypes.shape({
    name: PropTypes.string,
    promotion: PropTypes.string,
    price: PropTypes.number,
    priceWithDiscount: PropTypes.number,
    gift: PropTypes.string,
  }).isRequired,
  showTitle: PropTypes.bool,
};

export default PlanCard;
