import React, { Component } from "react";

class QuizQuestionButton extends Component {
	render() {
		return (
			//Parent component has <ul> tag.
			<li>
				<button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
			</li>
		);
	} // end of render

	handleClick() {
		this.props.clickHandler(this.props.button_text);
	} // End of handleClick
}

export default QuizQuestionButton;
