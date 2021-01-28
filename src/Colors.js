import React, { Component } from "react";
import "./styles.css";
class Colors extends Component {
  static defaultProps = {
    colors: ["red", "blue", "purple", "green"]
  };

  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
  }

  changeColor(colorr) {
    this.setState({
      color: colorr
    });
  }
  render() {
    return (
      <div className="Colors" style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((c) => {
          let newColor = { backgroundColor: c };
          return (
            <button
              className="btn"
              style={newColor}
              onClick={this.changeColor.bind(this, c)}
            >
              Click to change
            </button>
          );
        })}
      </div>
    );
  }
}

export default Colors;
