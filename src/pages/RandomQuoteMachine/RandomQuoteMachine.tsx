import NavBar from '@/components/NavBar/NavBar.tsx';
import Grid from '@mui/material/Grid2';
import RandomQuoteMachineComponent from '@/components/RandomQuoteMachine/RandomQuoteMachine.tsx';

const RandomQuoteMachine = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={8}>
      <Grid size="auto">
        <NavBar />
      </Grid>
      <Grid container spacing={8}>
        <Grid size="auto">
          <RandomQuoteMachineComponent />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default RandomQuoteMachine;