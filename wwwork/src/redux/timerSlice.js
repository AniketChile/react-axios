import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    running: false,
    time: 0,
    activityType: '',
  },
  reducers: {
    toggleTimer(state) {
      state.running = !state.running;
    },
    incrementTime(state) {
      if (state.running) {
        state.time += 1;
      }
    },
    resetTimer(state) {
      state.time = 0;
    },
    setActivity(state, action) {
      state.activityType = action.payload;
    },
    stopTimer(state) {
      state.running = false;
    },
  },
});

export const { toggleTimer, incrementTime, resetTimer, setActivity, stopTimer } = timerSlice.actions;
export default timerSlice.reducer;
