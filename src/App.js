import React from 'react';
import './App.css';
import TaskOverview from './components/Overview';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TaskOverview />
      </div>
    );
  }
}

export default App;
