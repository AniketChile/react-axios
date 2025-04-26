import React from 'react';
import { useSelector } from 'react-redux';

function GraphRanking() {
  const { processed, cases } = useSelector(state => state.cases);
  
  const percentage = cases.length > 0 ? Math.floor((processed / cases.length) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-4">
      <div className="bg-purple-300 p-4 rounded-lg text-center">
        <h2 className="font-bold">Graph</h2>
        <div className="text-4xl mt-2">{percentage}%</div>
      </div>

      <div className="bg-indigo-300 p-4 rounded-lg text-center">
        <h2 className="font-bold">Ranking</h2>
        <p className="mt-2">#1 (John Doe)</p>
      </div>
    </div>
  );
}

export default GraphRanking;
