import React, { useEffect } from 'react';
import Header from './components/Header';
import DropdownTimer from './components/DropDownTimer';
import StatCards from './components/StatCards';
import GraphRanking from './components/GraphRanking';
import ActionButtons from './components/ActionButtons';
import Tables from './components/Tables';
import { useDispatch, useSelector } from 'react-redux';
import { incrementTime } from './redux/timerSlice';

function App() {
  const dispatch = useDispatch();
  const running = useSelector(state => state.timer.running);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header username="JohnDoe" />
      <DropdownTimer />
      <StatCards />
      <GraphRanking />
      <ActionButtons />
      <Tables />
    </div>
  );
}

export default App;
