import { Container } from '@mui/material';
import catGif from '@/assets/pump-fun.gif';

const Cat = () => {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <img src={catGif} alt={'Black-Cat'} />
    </Container>
  );
};

export default Cat;