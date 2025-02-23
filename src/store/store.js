import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './photo.slice';

const store = configureStore({
   reducer: {
      photos: photoReducer,
   },
});

export default store;
