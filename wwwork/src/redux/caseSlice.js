import { createSlice } from '@reduxjs/toolkit';

const caseSlice = createSlice({
  name: 'cases',
  initialState: {
    cases: [],
    queries: [],
    processed: 0,
    rejected: 0,
  },
  reducers: {
    addCase(state) {
      state.cases.push({
        id: state.cases.length + 1,
        case: `Case No ${500 + state.cases.length}`,
        stage: 'Processing',
      });
    },
    addQuery(state) {
      state.queries.push({
        id: state.queries.length + 1,
        query: `Query No ${500 + state.queries.length}`,
        stage: 'Checking',
      });
    },
    processCase(state) {
      state.processed += 1;
    },
    rejectCase(state) {
      state.rejected += 1;
    },
  },
});

export const { addCase, addQuery, processCase, rejectCase } = caseSlice.actions;
export default caseSlice.reducer;
