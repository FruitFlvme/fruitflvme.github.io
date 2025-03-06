import { Fragment, useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';

interface Quote {
  quote: string,
  author: string,
  index: number | null,
}

interface Data {
  quotes: Quote[];
}

const RandomQuoteMachine = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quote, setQuote] = useState<Quote>({
    quote: '',
    author: '',
    index: null,
  });
  const [backgroundColor, setBackgroundColor] = useState('');

  const src = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const randomQuote = () => {
    if (data !== null) {
      const randomizer = Math.floor(Math.random() * data.quotes.length);
      const quoteObj = data['quotes'][randomizer];
      setQuote({
        quote: quoteObj.quote,
        author: quoteObj.author,
        index: randomizer,
      });
    }
  };

  const randomColor = () => {
    const backgroundColors = [
      '#ac3b61',
      '#5783c9',
      '#b06d25',
      '#93b88f',
      '#b29bc2',
      '#750204'];

    const index = Math.floor(Math.random() * backgroundColors.length);
    setBackgroundColor(backgroundColors[index]);
  };

  const handleClick = () => {
    randomQuote();
    randomColor();
  };

  useEffect(() => {
    fetch(src)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => {
        setData(data);
        setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
        randomColor();
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [src]);

  if (loading) {
    return (
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
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
          {quote.quote}
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }} align="right">
          - {quote.author}
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
      <Card variant="elevation" sx={{ width: '400px' }}>{card}</Card>
    </Box>
  );
};

export default RandomQuoteMachine;