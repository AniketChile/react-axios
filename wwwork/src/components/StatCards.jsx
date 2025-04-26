import React from 'react';
import { useSelector } from 'react-redux';

function StatCards() {
  const { cases, processed, rejected } = useSelector(state => state.cases);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="bg-lime-300 p-4 rounded-lg text-center">
        <h2 className="font-bold">Processing</h2>
        <p>{cases.length} Cases</p>
      </div>
      <div className="bg-orange-300 p-4 rounded-lg text-center">
        <h2 className="font-bold">Processed</h2>
        <p>{processed} Cases</p>
      </div>
      <div className="bg-red-300 p-4 rounded-lg text-center">
        <h2 className="font-bold">Rejected</h2>
        <p>{rejected} Cases</p>
      </div>
    </div>
  );
}

export default StatCards;
