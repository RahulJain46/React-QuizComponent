import React, { Component } from "react";

class QuizQuestionsButton extends Component {
  render() {
    return (
      <li>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionsButton;
