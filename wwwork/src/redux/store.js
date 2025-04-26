import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import caseReducer from './caseSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    cases: caseReducer,
  },
});

export default store;
