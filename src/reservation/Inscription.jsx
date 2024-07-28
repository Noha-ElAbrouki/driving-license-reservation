import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useAtom } from 'jotai';
import * as React from 'react';
import { UserAtom } from '../espaceUser/userAtom';

export default function Inscription() {
  const [user, setUser] = useAtom(UserAtom);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
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
            name="name"
            label={!user?.name && 'name'}
            type="name"
            id="name"
            onChange={handleChange}
            value={user?.name}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label={!user?.email && 'Email Address'}
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={user?.email}
          />
          <TextField
            margin="normal"
            fullWidth
            id="phone"
            label={!user?.phone && 'number phone'}
            name="phone"
            autoComplete="phone"
            onChange={handleChange}
            value={user?.phone}
          />
          <TextField
            margin="normal"
            fullWidth
            id="adresse"
            label={!user?.adresse && 'adresse'}
            name="adresse"
            autoComplete="adresse"
            onChange={handleChange}
            value={user?.adresse}
          />
        </Box>
      </Box>
    </Container>
  );
}
