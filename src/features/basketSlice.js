import { createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  books: [],
  amount: 0
};


export const fetchGetBasketBooks = createAsyncThunk(
  "books/fetchGetBasketBooks",
  async (_id,thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/basket/getBasket`);
      const data = await res.json();
      return data
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const deletBasketBooks = createAsyncThunk(
  "books/deletBasketBooks",
  async (_id,thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/basket/delete/${_id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const inc = createAction("inc");
export const dec = createAction("dec");

export const basketBookSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBasketBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      builder.addCase(deletBasketBooks.fulfilled, (state, action) => {
        state.books = state.bookId.filter(
          (item) => item._id !== action.payload._id
        );
      });
      builder.addCase(dec, (state, action) => {
        state.books = state.books.map((item) => {
          if (item.bookId === action.payload && item.amount > 1 ) {
            item.amount -= 1;
            state.books = state.books.map(book => {
              if(book.id === action.payload){
                book.left += 1
              }
              return book
            })
          }
          return item
        });
    
      });
      builder.addCase(inc, (state, action) => {
        state.books = state.books.map(book => {
          if(book.id === action.payload && book.left){
            book.left -= 1
            state.books = state.books.map(item => {
              if(item.productId === action.payload){
                item.amount += 1
              }
              return item
            })
          }
          return book
        })
      })
      

  },
});

export default basketBookSlice.reducer;