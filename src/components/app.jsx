import React from "react";

class SimpleButton extends React.Component {
  handleClick = () => {
    alert("Haz clic en el botón!");
  };

  render() {
    return <button onClick={this.handleClick}>Haz clic en mí</button>;
  }
}

export default SimpleButton;
