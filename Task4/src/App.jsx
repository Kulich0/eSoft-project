import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import UserList from './components/UserList';
const App = () => {
  return (
    <div>
      <CountdownTimer/>
      <WindowSize/>
      <UserList/>
    </div>
  );
};

export default App;
