import { Grid, Hidden } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlanCard from '../../../components/PlanCard';
import SubscriptionToggle from '../../../components/SubscriptionToggle';
import essenciaisImg from '../../../images/mock-essenciais.svg';
import { fetchSubscriptionData } from '../../../store/subscription';

function Plans() {
  const dispatch = useDispatch();
  const subscription = useSelector((state) => state.subscription);

  useEffect(() => {
    dispatch(fetchSubscriptionData());
  }, []);

  return (
    <section>
      {subscription?.plans && (
        <Grid container justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={3} md={4}>
            <img
              style={{ width: '100%' }}
              src={essenciaisImg}
              alt="WineBox Essenciais - Demonstrativo de garrafas do plano"
            />
          </Grid>
          <Grid item xs={4} sm={5} md={8}>
            <h1>{`WineBox ${subscription.name}`}</h1>
            <p>{subscription.description}</p>
            <Hidden smDown>
              <Grid container>
                {subscription.plans.map((plan) => (
                  <Grid item key={plan.name} sm={6}>
                    <PlanCard selectedPlan={plan} showTitle />
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
    </section>
  );
}

export default Plans;
