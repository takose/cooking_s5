import React from "react";
import NewStepButton from "./NewStepButton"


export default class NewStepRange extends React.Component {
  constructor (props) {
    super(props)
    this.handleNextStep = this.handleNextStep.bind(this)
    this.handleOnPlusRange = this.handleOnPlusRange.bind(this)
  }

  handleOnPlusRange () {
    this.props.handleOnPlusRange()
  }

  handleNextStep () {
    this.props.handleNextStep()
  }

  render () {
    return (
      <td colSpan={this.props.currentStepRange}>
        <NewStepButton onClick={this.handleOnPlusRange}>
          +
        </NewStepButton>
        <NewStepButton onClick={this.handleNextStep}>↓</NewStepButton>
      </td>
    )
  }
}
