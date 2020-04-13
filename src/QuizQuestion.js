import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

//Class decleration
class QuizQuestion extends Component {
  render(quiz_question) {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton
              button_text={this.props.quiz_question.answer_options[0]}
            />
          </ul>
        </section>
      </main>
    );
  }
}

// Always needed.
export default QuizQuestion;