import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Quote {
  quote: string,
  author: string,
  index: number | null,
}

interface QuotesState {
  quotes: Quote[],
  loading: boolean,
  error: string | null,
  currentQuote: Quote,
  backgroundColor: string
}

const initialState: QuotesState = {
  quotes: [],
  loading: false,
  error: null,
  currentQuote: { quote: '', author: '', index: null },
  backgroundColor: '',
};

const backgroundColors = [
  '#ac3b61',
  '#5783c9',
  '#b06d25',
  '#93b88f',
  '#b29bc2',
  '#750204',
];

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const fetchQuotes = createAsyncThunk<Quote[], void>(
  'quotes/fetchQuotes',
  async () => {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
    const data = await response.json();
    return data.quotes;
  });

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setQuote: (state) => {
      state.currentQuote = getRandomElement(state.quotes);
      console.log('quotes');
    },
    setBackgroundColor: (state) => {
      state.backgroundColor = getRandomElement(backgroundColors);
      console.log('backgroundColor');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
        state.currentQuote = getRandomElement(state.quotes);
        state.backgroundColor = getRandomElement(backgroundColors);
        console.log('extra');
      })
      .addCase(
        fetchQuotes.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch quotes';
        },
      );
  },
});

export const quotesReducer = quotesSlice.reducer;

export const { setQuote, setBackgroundColor } = quotesSlice.actions;
