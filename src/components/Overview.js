import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <h1 className="test">Hello, planet {this.props.planet}</h1>
    );
  }
}

export default Task