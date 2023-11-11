import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import DashboardLayout from 'layouts/DashboardLayout';
import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
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
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setSubmitting(true);
    // Get data from the form.
    const data = {
      // This is the object expected by the API
      firstName: event.target.firstname.value,
      lastName: event.target.lastname.value,
      username: event.target.username.value,
      password: 'secretpassword',
      email: event.target.email.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = 'http://localhost:8080/api/v1/users';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': 'THIS IS MY SECRET TOKEN', // Don't forget your secret token :)
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON, if you receive the expected status code (200 or 201)
    if (response.status === 201) {
      const result = response.status === 201 ? await response.json() : {};
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
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
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
                    Create a new user
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="firstname">First Name*</InputLabel>
                        <OutlinedInput
                          id="firstname"
                          type="firstname"
                          value={userData.firstName}
                          name="firstname"
                          placeholder="John"
                          fullWidth
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="lastname">Last Name*</InputLabel>
                        <OutlinedInput
                          fullWidth
                          id="lastname"
                          type="lastname"
                          value={userData.lastName}
                          name="lastname"
                          placeholder="Doe"
                          inputProps={{}}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="username">Username*</InputLabel>
                        <OutlinedInput
                          id="username"
                          type="username"
                          value={userData.username}
                          name="username"
                          placeholder="john.doe"
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
                        Create User
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
