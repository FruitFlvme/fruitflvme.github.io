import { Container, Stack } from '@mui/material';
import Cat from '@/components/Cat/Cat.tsx';
import Timer from '@/components/Timer/Timer.tsx';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={6} my={2}>
        <Cat />
        <Timer />
      </Stack>
    </Container>
  );
};

export default Home;
