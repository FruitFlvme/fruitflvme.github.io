import { Fragment, useEffect } from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store.ts';
import { fetchQuotes, setBackgroundColor, setQuote } from '@/features/quotes/quotesSlice.ts';

const RandomQuoteMachine = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, currentQuote, backgroundColor } = useSelector((state: RootState) => state.quotes);

  const handleClick = () => {
    dispatch(setBackgroundColor());
    dispatch(setQuote());
  };

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);


  if (loading) {
    return (
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        marginTop: '10rem',
      }}>
        <Typography variant="h1" component="h1" gutterBottom>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Typography variant="h1" component="h1" gutterBottom>Error</Typography>
      </Container>
    );
  }

  const card = (
    <Fragment>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          {currentQuote.quote}
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }} align="right">
          - {currentQuote.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" sx={{ color: backgroundColor }} onClick={handleClick}>More</Button>
      </CardActions>
    </Fragment>
  );

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Card variant="elevation" sx={{
        width: {
          xs: '80%',
          sm: '50%',
          md: '33.33%',
          lg: '25%',
        },
        margin: 'auto',
      }}>{card}</Card>
    </Box>
  );
};

export default RandomQuoteMachine;