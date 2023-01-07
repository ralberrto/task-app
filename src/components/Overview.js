import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <li className="test">Hello, planet {this.props.planet}</li>
    );
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <ul className='task-list'>
        <Task planet='Mars' />
      </ul>
    );
  }
}

export default TaskList