import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../../../store/checkout';
import brStates from './utils/helpers';

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
    <Container component="section">
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        <IoLocationOutline />
        <span style={{ paddingLeft: '8px', paddingTop: '2px' }}>{' Endereço de entrega'}</span>
      </h2>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
        <Grid item xs={4} sm={8} md={6} sx={{ paddingLeft: '0px' }}>
          <TextField
            fullWidth
            id="outlined-helperText"
            // id="identification"
            name="identification"
            value={addressForm.identification}
            onChange={handleChange}
            label="Identificação do endereço"
          />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Nome do destinatário"
            value={addressForm.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField fullWidth id="cep" label="CEP" name="cep" value={addressForm.cep} onChange={handleChange} />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField fullWidth id="address" label="Endereço" name="address" value={addressForm.address} onChange={handleChange} />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField fullWidth id="number" label="Número" name="number" value={addressForm.number} onChange={handleChange} />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField
            fullWidth
            label="Complemento"
            id="complement"
            name="complement"
            value={addressForm.complement}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField
            fullWidth
            label="Bairro"
            id="district"
            name="district"
            value={addressForm.district}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField fullWidth id="city" label="Cidade" name="city" value={addressForm.city} onChange={handleChange} />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField
            fullWidth
            labelId="brState"
            id="brState"
            name="state"
            value={addressForm.state}
            label="Estado"
            select
            onChange={handleChange}
          >
            {brStates.map(({ value, label }) => (
              <MenuItem key={value} name="state" value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField
            fullWidth
            label="Observações"
            id="observation"
            name="observation"
            value={addressForm.observation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item component="section">
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddressForm;
