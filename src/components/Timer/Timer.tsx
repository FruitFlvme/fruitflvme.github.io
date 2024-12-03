import { Button, Container, IconButton, Typography } from '@mui/material';
import { changeMode } from '@/features/user/userSlice.ts';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppDispatch, useAppSelector } from '@/app/store.ts';
import { useEffect, useState } from 'react';

const Timer = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.user.mode);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // height: '100vh',
      }}
    >
      <IconButton onClick={() => dispatch(changeMode())} sx={{ position: 'absolute', top: 10, right: 10 }}>
        <Brightness4Icon
          sx={{
            transition: 'transform 0.4s',
            transform: mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        Таймер: {seconds} секунд
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStart} disabled={isActive} sx={{ mb: 2 }}>
        Запустить
      </Button>
      <Button variant="contained" color="secondary" onClick={handleStop} disabled={!isActive} sx={{ mb: 2 }}>
        Остановить
      </Button>
      <Button variant="contained" onClick={handleReset}>
        Сбросить
      </Button>
    </Container>
  );

};

export default Timer;