import React from 'react';
import { useSelector } from 'react-redux';

function Tables() {
  const { cases, queries } = useSelector(state => state.cases);

  return (
    <div className="p-4 space-y-6">
      {/* Cases Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-cyan-200">
            <tr>
              <th className="py-2 px-4">Sr No</th>
              <th className="py-2 px-4">Test Cases</th>
              <th className="py-2 px-4">Stage</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.case}</td>
                <td className="py-2">{item.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Queries Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-cyan-200">
            <tr>
              <th className="py-2 px-4">Sr No</th>
              <th className="py-2 px-4">Query</th>
              <th className="py-2 px-4">Stage</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.query}</td>
                <td className="py-2">{item.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
