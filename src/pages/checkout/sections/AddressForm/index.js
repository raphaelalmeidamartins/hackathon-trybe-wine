import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import {
  Container,
  FormControlLabel,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField as Input,
  Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import brStates from './utils/helpers';
import { setAddress } from '../../../../store/checkout';

function AddressForm() {
  const [addressForm, setAddressForm] = useState({
    identification: '',
    username: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    observation: '',
    concierge: false,
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'concierge') {
      const concierge = !addressForm.concierge;
      setAddressForm({ ...addressForm, concierge });
      dispatch(setAddress({ ...addressForm, concierge }));
    } else {
      setAddressForm({ ...addressForm, [name]: value });
      dispatch(setAddress({ ...addressForm, [name]: value }));
    }
  };

  return (
    <Container component="section" maxWidth="lg">
      <h2>
        <IoLocationOutline />
        {' Endereço de entrega'}
      </h2>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="identification">Identificação do endereço</InputLabel>
          <Input
            id="identification"
            name="identification"
            value={addressForm.identification}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="username">Nome do destinatário</InputLabel>
          <Input
            id="username"
            name="username"
            value={addressForm.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="cep">CEP</InputLabel>
          <Input id="cep" name="cep" value={addressForm.cep} onChange={handleChange} />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="address">Endereço</InputLabel>
          <Input id="address" name="address" value={addressForm.address} onChange={handleChange} />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="number">Número</InputLabel>
          <Input id="number" name="number" value={addressForm.number} onChange={handleChange} />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="complement">Complemento</InputLabel>
          <Input
            id="complement"
            name="complement"
            value={addressForm.complement}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="district">Bairro</InputLabel>
          <Input
            id="district"
            name="district"
            value={addressForm.district}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="city">Cidade</InputLabel>
          <Input id="city" name="city" value={addressForm.city} onChange={handleChange} />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel id="brState">Estado</InputLabel>
          <Select
            labelId="brState"
            id="brState"
            name="state"
            value={addressForm.state}
            label="Estado"
            onChange={handleChange}
          >
            {brStates.map(({ value, label }) => (
              <MenuItem key={value} name="state" value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <InputLabel htmlFor="observation">Complemento</InputLabel>
          <Input
            id="observation"
            name="observation"
            value={addressForm.observation}
            onChange={handleChange}
          />
        </Grid>
        <Box component="section">
          <FormControlLabel
            control={(
              <Switch
                checked={addressForm.concierge}
                name="concierge"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            )}
            label="Portaria 24h?"
          />
        </Box>
      </Grid>
    </Container>
  );
}

export default AddressForm;
