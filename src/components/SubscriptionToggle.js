import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PlanCard from './PlanCard';

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
        <ToggleButtonGroup color="primary" sx={{ display: 'flex', justifyContent: 'center' }} exclusive value={subscriptionType} onChange={handleSubscriptionChange}>
          <ToggleButton value="0">Anual</ToggleButton>
          <ToggleButton value="1">Mensal</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <PlanCard selectedPlan={selectedPlan} />
    </>
  );
}

export default SubscriptionToggle;
