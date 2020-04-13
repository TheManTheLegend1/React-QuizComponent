import React, { Component } from "react";

class QuizQuestionButton extends Component {
  render(button_text) {
    return (
      //Parent component has <ul> tag.
      <li>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
