import React from "react";
import NewStepButton from "./NewStepButton"
import SteoForward from "./StepForward"
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


export default class StepForward extends React.Component {
  constructor (props) {
    super(props)
    this.handleNextStep = this.handleNextStep.bind(this)
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
        <RaisedButton
          onClick={this.handleNextStep}
          style={styles.button}
          icon={<FontIcon className="material-icons">keyboard_return</FontIcon>}
        />
    )
  }
}
