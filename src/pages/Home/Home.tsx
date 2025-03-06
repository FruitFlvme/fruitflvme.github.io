import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import NavBar from '@/components/NavBar/NavBar.tsx';

const Home = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={12}>
      <Grid size="auto">
        <NavBar />
      </Grid>
      <Grid container spacing={8}>
        <Grid size="auto">
          <Typography variant="h1" component="h1" gutterBottom>Welcome to the Home Page</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
