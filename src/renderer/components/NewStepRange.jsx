import React from "react";
import NewStepButton from "./NewStepButton"
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


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
    const styles = {
      button: {
        margin: 12,
      },
    };

    return (
      <td colSpan={this.props.currentStepRange}>
        <RaisedButton onClick={this.handleOnPlusRange}
          style={styles.button}
          icon={<FontIcon className="material-icons">add</FontIcon>}
        />
        <RaisedButton onClick={this.handleNextStep}
          style={styles.button}
          icon={<FontIcon className="material-icons">keyboard_return</FontIcon>}
        />
      </td>
    )
  }
}
