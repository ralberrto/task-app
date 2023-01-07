import React from 'react';
import './App.css';
import TaskList from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          title: 'Check the terminal of the car\'s battery',
          date: new Date()
        },
        {
          title: 'Do purchases checklist',
          date: new Date()
        },
        {
          title: 'Get money from the back',
          date: new Date()
        },
        {
          title: 'Actually make purchases',
          date: new Date()
        },
        {
          title: 'Ship purchases',
          date: new Date()
        },
        {
          title: 'Make customer\'s receipt',
          date: new Date()
        }
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
