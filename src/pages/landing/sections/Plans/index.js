import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlanCard from '../../../../components/PlanCard';
import SubscriptionToggle from '../../../../components/SubscriptionToggle';
import essenciaisImg from '../../../../images/mock-essenciais.svg';
import { fetchSubscriptionData } from '../../../../store/subscription';
import PlansContainerBox from './style';

function Plans() {
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);

  useEffect(() => {
    dispatch(fetchSubscriptionData());
  }, []);

  return (
    <PlansContainerBox>
      <Container component="section">
        {subscription?.plans && (
        <Grid container justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={3} md={5}>
            <img
              style={{ width: '100%' }}
              src={essenciaisImg}
              alt="WineBox Essenciais - Demonstrativo de garrafas do plano"
            />
          </Grid>
          <Grid item xs={4} sm={5} md={7}>
            <span className="winebox-title">WineBox</span>
            <h1>{subscription.name}</h1>
            <p>{subscription.description}</p>
            <Hidden smDown>
              <Grid container spacing={4}>
                {subscription.plans.map((plan) => (
                  <Grid item key={plan.name} sm={6} md={5}>
                    <PlanCard selectedPlan={plan} />
                  </Grid>
                ))}
              </Grid>
            </Hidden>
          </Grid>
          {subscription.plans && (
            <Hidden smUp>
              <SubscriptionToggle />
            </Hidden>
          )}
        </Grid>
        )}
      </Container>
    </PlansContainerBox>
  );
}

export default Plans;
