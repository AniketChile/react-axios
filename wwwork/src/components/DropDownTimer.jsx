import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleTimer,
  setActivity,
  stopTimer,
  incrementTime
} from '../redux/timerSlice';

function DropdownTimer() {
  const dispatch = useDispatch();
  const { isRunning, selectedActivity, time } = useSelector(state => state.timer);

  const [localActivity, setLocalActivity] = useState('');

  const handleSelect = (e) => {
    const value = e.target.value;
    if (isRunning) return; // prevent change during timer
    setLocalActivity(value);
    dispatch(setActivity(value));
  };

  const handleToggle = () => {
    if (!selectedActivity) return alert("Please select an activity first.");
    if (isRunning) {
      dispatch(stopTimer());
    } else {
      dispatch(toggleTimer());
    }
  };

  // Simulate timer
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  return (
    <div className="flex items-center gap-4 justify-center mt-4">
      <select
        className="p-2 border rounded-md bg-white"
        value={localActivity}
        onChange={handleSelect}
        disabled={isRunning}
      >
        <option value="">Select Activity</option>
        <option value="Core">Core Activities</option>
        <option value="Non-Core">Non-Core Activities</option>
      </select>

      <button
        onClick={handleToggle}
        className={`px-4 py-2 rounded-md font-semibold ${
          isRunning ? 'bg-red-400' : 'bg-green-400'
        }`}
      >
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>

      <span className="text-lg font-mono">{time}s</span>
    </div>
  );
}

export default DropdownTimer;
