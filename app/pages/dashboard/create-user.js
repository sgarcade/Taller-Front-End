import { useRouter } from 'next/navigation';
import DashboardLayout from 'layouts/DashboardLayout';
import { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

export default function CreateUserPage() {
  const [userData, setUserData] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [isError, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const data = {
      UserName: event.target.UserName.value,
      email: event.target.email.value,
      Password: event.target.Password.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = 'http://localhost:8000/api/v1/usernew/';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': 'THIS IS MY SECRET TOKEN',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 201) {
      const result = await response.json();
      console.log(`Response: ${JSON.stringify(result)}`);
      setUserData(result);
      router.push('/dashboard/users');
    } else {
      setError(true);
    }
    setSubmitting(false);
  };

  return (
    <DashboardLayout>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                >
                  <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                  >
                    Crear Usuario
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="UserName">Nombre Usuario*</InputLabel>
                        <OutlinedInput
                          id="UserName"
                          type="TextField"
                          value={userData.UserName}
                          name="UserName"
                          placeholder="Nombre"
                          fullWidth
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="email">Email*</InputLabel>
                        <OutlinedInput
                          fullWidth
                          id="email"
                          type="email"
                          value={userData.email}
                          name="email"
                          placeholder="john.doe@email.com"
                          inputProps={{}}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="Password">Contraseña*</InputLabel>
                        <OutlinedInput
                          fullWidth
                          id="Password"
                          type="password"
                          value={userData.Password}
                          name="Password"
                          placeholder="****"
                          inputProps={{}}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        disableElevation
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Crear Usuario
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </main>
    </DashboardLayout>
  );
}
