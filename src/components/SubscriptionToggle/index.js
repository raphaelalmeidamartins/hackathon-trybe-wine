import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PlanCard from '../PlanCard';
import SubscriptionButtonGroup from './style';

function SubscriptionToggle() {
  const [subscriptionType, setSubscriptionType] = useState('0');

  const handleSubscriptionChange = ({ target }) => {
    setSubscriptionType(target.value);
  };

  const subscription = useSelector((state) => state.subscription);
  const selectedPlan = subscription?.plans?.[subscriptionType];

  return (
    <>
      <Grid item xs={12} sx={{ marginBottom: 2 }}>
        <SubscriptionButtonGroup
          exclusive
          value={subscriptionType}
          onChange={handleSubscriptionChange}
        >
          <ToggleButton value="0" sx={{ borderRadius: '16px 0 0 16px' }}>Anual</ToggleButton>
          <ToggleButton value="1" sx={{ borderRadius: '0 16px 16px 0' }}>Mensal</ToggleButton>
        </SubscriptionButtonGroup>
      </Grid>
      <PlanCard selectedPlan={selectedPlan} />
    </>
  );
}

export default SubscriptionToggle;
