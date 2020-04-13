import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd";
import QuizQuestionButton from "./QuizQuestionButton.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    if (isQuizEnd) {
      return <QuizEnd />;
    }
    return (
      <div>
        {/*Render the QuizQuestionButton */}
        <QuizQuestionButton />
        {/* Render the QuizQuestion component */}
        <QuizQuestion
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
}

export default Quiz;
