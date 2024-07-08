// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../src/features/todo/todoSlice';
import categoryReducer from '../src/features/todo/category/categorySlice';
import productReducer from '../src/features/product/productSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    categories: categoryReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
