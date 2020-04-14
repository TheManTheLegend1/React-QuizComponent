import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

//Class decleration
class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  } // end of Constructor

  render(quiz_question) {
    return (
      <main>
        <section className="questions">
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {/* Render the QuizQuestionButton component.
                Uses map function to loop through object */}
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
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  } //End of render

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
    //Set incorrect answer state
    if (this.state.incorrectAnswer) {
      this.setState({
        incorrectAnswer: false,
      });
    } else {
      this.setState({
        incorrectAnswer: true,
      });
    }
  } // End of handleClick
}
// Always needed.
export default QuizQuestion;
