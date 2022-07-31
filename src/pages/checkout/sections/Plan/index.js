import React from 'react';
import { FiLayers } from 'react-icons/fi';
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import planInfo from './utils/helpers';
import MembershipPlanRadioLabel from '../../../../components/MembershipPlanRadioLabel';
import { setSubscriptionPlan } from '../../../../store/checkout';

function SubscriptionPlanForm() {
  const selectedPlan = useSelector((state) => state.checkout.subscriptionPlan);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { value } }) => {
    dispatch(setSubscriptionPlan(value));
  };

  return (
    <Container component="section" maxWidth="lg">
      <FormControl>
        <FormLabel id="membership-plan-form">
          <FiLayers />
          {' Plano de pagamento'}
        </FormLabel>
        <RadioGroup
          column
          aria-labelledby="form-control-subscription-plan"
          name="subscription-plan"
          defaultValue="annual"
          value={selectedPlan}
          onChange={handleChange}
        >
          <FormControlLabel
            value="annual"
            control={<Radio />}
            label={MembershipPlanRadioLabel(planInfo.annual)}
            labelPlacement="start"
          />
          <FormControlLabel
            value="monthly"
            control={<Radio />}
            label={MembershipPlanRadioLabel(planInfo.monthly)}
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default SubscriptionPlanForm;
