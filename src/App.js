import React from 'react';
import './App.css';
import TaskList from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <TaskList />
      </div>
    );
  }
}

export default App;
