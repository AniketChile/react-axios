import React from 'react';
import { useDispatch } from 'react-redux';
import { addCase, addQuery } from '../redux/caseSlice';

function ActionButtons() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-4 p-4">
      <button
        onClick={() => dispatch(addCase())}
        className="bg-cyan-400 text-black font-bold px-6 py-3 rounded-md"
      >
        Pull Case
      </button>

      <button
        onClick={() => dispatch(addQuery())}
        className="bg-pink-400 text-black font-bold px-6 py-3 rounded-md"
      >
        Pull Query
      </button>
    </div>
  );
}

export default ActionButtons;
