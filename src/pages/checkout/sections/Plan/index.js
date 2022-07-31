import {
  Container,
  FormControl,
  FormControlLabel, Grid, Paper, Radio,
  RadioGroup,
} from '@mui/material';
import React, { useEffect } from 'react';
import { FiLayers } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import MembershipPlanRadioLabel from '../../../../components/MembershipPlanRadioLabel';
import { setSubscriptionPlan, setTotal } from '../../../../store/checkout';
import planInfo from './utils/helpers';

function SubscriptionPlanForm() {
  const selectedPlan = useSelector((state) => state.checkout.subscriptionPlan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotal());
  }, []);

  const handleChange = ({ currentTarget: { value } }) => {
    dispatch(setSubscriptionPlan(value));
    dispatch(setTotal());
  };

  return (
    <Container component="section">
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        <FiLayers />
        <span style={{ paddingLeft: '8px', paddingTop: '2px' }}>{' Plano de pagamento'}</span>
      </h2>
      <FormControl>
        <RadioGroup
          column
          aria-labelledby="form-control-subscription-plan"
          name="subscription-plan"
          defaultValue="annual"
          value={selectedPlan}
          onChange={handleChange}
        >
          <Grid container spacing={3} sx={{ paddingLeft: '12px' }}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  width: '100%', padding: '16px', backgroundColor: 'white', border: `3px solid ${selectedPlan === 'annual' ? '#4E1A3E' : 'white'}`,
                }}
                component={FormControlLabel}
                value="annual"
                elevation={selectedPlan === 'annual' ? 6 : 1}
                control={<Radio sx={{ marginRight: '16px' }} />}
                label={MembershipPlanRadioLabel(planInfo.annual)}
                labelPlacement="end"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  width: '100%', padding: '16px', backgroundColor: 'white', border: `3px solid ${selectedPlan === 'monthly' ? '#4E1A3E' : 'white'}`,
                }}
                component={FormControlLabel}
                value="monthly"
                elevation={selectedPlan === 'monthly' ? 6 : 1}
                control={<Radio sx={{ marginRight: '16px' }} />}
                label={MembershipPlanRadioLabel(planInfo.monthly)}
                labelPlacement="end"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default SubscriptionPlanForm;
