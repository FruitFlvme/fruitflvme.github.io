import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '10',
      }}
    >
      <Typography variant="h1" gutterBottom>
        {seconds}
      </Typography>
    </Container>
  );

};

export default Timer;