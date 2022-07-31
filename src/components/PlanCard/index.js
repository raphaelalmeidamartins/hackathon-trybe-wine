import {
  Box, Button, Chip, Grid,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { TbGift } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useElevation from '../../hooks/useElevation';
import { setSubscriptionPlan } from '../../store/checkout';
import PlanCardPaper from './style';

function PlanCard({ selectedPlan }) {
  const {
    elevation,
    handleMouseOver,
    handleMouseOut,
  } = useElevation();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubscribe = () => {
    const subscriptionType = selectedPlan.name === 'Plano Anual' ? 'annual' : 'monthly';
    dispatch(setSubscriptionPlan(subscriptionType));
    history.push('/checkout');
  };

  return (
    <Grid item xs={4} sm={12} justifyContent="center">
      <PlanCardPaper
        elevation={elevation}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span>Plano</span>
            <h2>{selectedPlan.name.split(' ')[1].toUpperCase()}</h2>
          </div>
          <Chip color="secondary" size="small" label={selectedPlan.promotion} sx={{ fontWeight: 700 }} />
        </Box>
        <p className="price">
          {'de '}
          <span style={{ textDecoration: 'line-through' }}>
            {`R$ ${selectedPlan.price}`}
          </span>
          {' por:'}
        </p>
        <p className="price-with-discount">
          {'R$ '}
          <span className="price-with-discount--bold">{selectedPlan.priceWithDiscount}</span>
          /mês
        </p>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chip
            sx={{ paddingLeft: 1, paddingRight: 1 }}
            disabled={!selectedPlan.gift}
            icon={<TbGift sx={{ marginBottom: 4 }} size="1rem" />}
            label={selectedPlan.gift || 'nenhum brinde disponível'}
            color="primary"
          />
        </Box>
        <Button variant="contained" onClick={handleSubscribe} disableElevation>
          {`Assinar ${selectedPlan.name.split(' ')[1].toLowerCase()}`}
        </Button>
      </PlanCardPaper>
    </Grid>
  );
}

PlanCard.propTypes = {
  selectedPlan: PropTypes.shape({
    name: PropTypes.string,
    promotion: PropTypes.string,
    price: PropTypes.number,
    priceWithDiscount: PropTypes.number,
    gift: PropTypes.string,
  }).isRequired,
};

export default PlanCard;
