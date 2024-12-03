import { Container } from '@mui/material';
import Timer from '@/components/Timer/Timer.tsx';
import Cat from '@/components/Cat/Cat.tsx';

const Home = () => {
  return (
    <Container className={'py'} sx={{ py: 2, position: 'relative' }}>
      {/*<Stack gap={1} my={2}>*/}
      {/*</Stack>*/}
      <Cat />
      {/*<TemplateTester />*/}
      <Timer />
      {/*<Counter />*/}
    </Container>
  );
};

export default Home;
