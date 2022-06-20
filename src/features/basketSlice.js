import { createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  books: [],
  basket: [],
  amount: 0
};


export const fetchGetBasketBooks = createAsyncThunk(
  "booksGet/fetchGetBasketBooks",
  async (id,thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/basket/getBasket/${id}`);
      const data = await res.json();
      return data
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postBookToBasket = createAsyncThunk(
  "books/BookToBasket",
  async ({basketId, bookId}, thunkAPI) => {
    try {
      const state = thunkAPI.getState()
      const res = await fetch(`http://localhost:3001/basket/add/${basketId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        
        body: JSON.stringify( {bookId} ),
      });
      const data = await res.json();
      console.log(data);
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)

export const deletBasketBooks = createAsyncThunk(
  "books/deletBasketBooks",
  async ({basketId, bookId, amount},thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/basket/delete/${basketId}`, {
        method: 'PATCH',
        body: JSON.stringify({ bookId }),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        
      });
      const data = await res.json();
      return {
        data,
        bookId,
        amount
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const decrement = createAsyncThunk(
  "books/decrementBasketBooks",
  async ({bookId, amount, price},thunkAPI) => {
   // console.log(amount);
    try {
      const res = await fetch(`http://localhost:3001/books/decrement/${bookId}`, {
        method: 'PATCH',
        body: JSON.stringify(amount > 0 && {amount : amount - 1}),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        
      });
      const data = await res.json();
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const increment = createAsyncThunk(
  "books/incrementBasketBooks",
  async ({bookId, amount, price},thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/books/increment/${bookId}`, {
        method: 'PATCH',
        body: JSON.stringify(amount < 10 && {amount : amount +1}),
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        
      });
      const data = await res.json();
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);



export const basketBookSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBasketBooks.fulfilled, (state, action) => {
        state.basket = action.payload;
      })
      .addCase(postBookToBasket.fulfilled, (state, action) => {
        state.books = action.payload
      })
      .addCase(deletBasketBooks.fulfilled, (state, action) => {
        state.books = state.books.map((item) =>{
         if(item._id !== action.payload.bookId){
          return item
         }
         action.payload.amount = 0
        })
        
      })
      .addCase(decrement.fulfilled, (state, action) => {
       
      })
      .addCase(increment.fulfilled, (state, action) => {

      })
      

  },
});

export default basketBookSlice.reducer;