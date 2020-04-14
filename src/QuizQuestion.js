import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

//Class decleration
class QuizQuestion extends Component {
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  }
  render(quiz_question) {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {/* Render the QuizQuestionButton component */}
            {this.props.quiz_question.answer_options.map(
              (answer_options, index) => (
                <QuizQuestionButton
                  button_text={answer_options}
                  key={index}
                  clickHandler={this.handleClick.bind(this)}
                />
              )
            )}
          </ul>
        </section>
      </main>
    );
  }
}

// Always needed.
export default QuizQuestion;
