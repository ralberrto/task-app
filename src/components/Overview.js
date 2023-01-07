import React from 'react';

class TaskOverview extends React.Component {
  constructor(props) {
    super(props);
    this.onTaskSubmit = this.onTaskSubmit.bind(this);
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
          title: 'Get money from the bank',
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

  onTaskSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const newTask = {title: data.get('title'), date: new Date()};
    const tasks = [...this.state.tasks].concat(newTask);
    this.setState({tasks: tasks});

    form.reset();
  }

  render() {
    return (
      <div id='task-overview'>
        <TaskForm onSubmit={this.onTaskSubmit}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

class TaskForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit} >
        <label htmlFor='add-task'>Add Taks</label>
        <input id='add-task' type='text' name='title' required />
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

export default TaskOverview;