import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super();
    this.state = { iscorrectAnswer: false };
  }
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ iscorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ iscorrectAnswer: true });
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((options, index) => {
              return (
                <QuizQuestionButton
                  clickHandler={this.handleClick.bind(this)}
                  button_text={options}
                  key={index}
                />
              );
            })}
          </ul>
        </section>
        {this.state.iscorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
