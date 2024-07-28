import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useAtom } from 'jotai';
import * as React from 'react';
import { PaiementAtom } from '../espaceUser/userAtom';

const Paiement = () => {
  const [paiement, setPaiement] = useAtom(PaiementAtom);

  const handleChange = (event) => {
    setPaiement({ ...paiement, [event.target.name]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            name="numeroCarte"
            label={!paiement?.numeroCarte && 'numeroCarte'}
            type="numeroCarte"
            id="numeroCarte"
            onChange={handleChange}
            value={paiement?.numeroCarte}
          />
          <TextField
            margin="normal"
            fullWidth
            id="montant"
            label={!paiement?.montant && 'montant'}
            name="montant"
            autoComplete="montant"
            onChange={handleChange}
            value={paiement?.montant}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Paiement;
