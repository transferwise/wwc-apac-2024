import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Face6 } from '@mui/icons-material'

export default function HomePage() {
  return (
    <>
    <ResponsiveAppBar> </ResponsiveAppBar>
    <Container maxWidth={false}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3} align="center">
          <Grid xs={6}>
            <div>
            <Face6 style={{ fontSize: '10rem' }}/>
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
            <Stack spacing={2}>
            <Button variant="outlined">Transfer 1: Mabel to Saloni</Button>
            <Button variant="outlined">Transfer 2: Mabel to Justina</Button>
            <Button variant="outlined">Transfer 3: Mabel to Saloni</Button>
            </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
    </>
  );
}