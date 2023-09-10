import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <h1> ClassComponent</h1>
        <h2>Count: {this.state.value}</h2>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
export default ClassComponent;
