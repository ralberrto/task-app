import React from 'react';

class TaskForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='add-task'>Add Taks</label>
        <input id='add-task' type='text' />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

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

export { TaskForm, TaskList };