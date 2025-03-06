import NavBar from '@/components/NavBar/NavBar.tsx';
import CatComponent from '@/components/Cat/Cat.tsx';
import Timer from '@/components/Timer/Timer.tsx';
import Grid from '@mui/material/Grid2';

const Cat = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={12}>
      <Grid size="auto">
        <NavBar />
      </Grid>
      <Grid container direction="column" spacing={8}>
        <Grid size="auto">
          <CatComponent />
        </Grid>
        <Grid size="auto">
          <Timer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cat;