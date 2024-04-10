import React from "react";

class SimpleButton extends React.Component {
  state = {
    count: 0,
    backgroundColor: "#1b1c23",
  };

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      backgroundColor: prevState.count % 2 === 0 ? "#1b1c23" : "#f4f4f4",
    }));
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        Click me ({this.state.count})
      </button>
    );
  }
}

export default SimpleButton;
