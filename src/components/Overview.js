import React from 'react';

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return (
        <li key={index} className='task'>{task.title}</li>
      );
    });
    return (
      <ul className='task-list'>
        {tasks}
      </ul>
    );
  }
}

export default TaskList