import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = { quiz_position: 1 };
	} // End of constructor.

	render() {
		const isQuizEnd =
			this.state.quiz_position - 1 === quizData.quiz_questions.length;
		if (isQuizEnd) {
			return <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />;
		}
		return (
			<div id="questionContainer">
				{/* Render the QuizQuestion component */}
				<QuizQuestion
					quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
					showNextQuestionHandler={this.showNextQuestion.bind(this)}
				/>
			</div>
		);
	} // End of render

	handleResetClick() {
		this.setState({
			quiz_position: 1,
		});
	} // End of handleResetClick

	showNextQuestion() {
		this.setState({
			quiz_position: this.state.quiz_position + 1,
		});
	} // End of showNextQuestion
}
// Always needed.
export default Quiz;
