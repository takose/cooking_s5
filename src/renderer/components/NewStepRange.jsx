import React from "react";
import NewStepButton from "./NewStepButton"
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


export default class NewStepRange extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnPlusRange = this.handleOnPlusRange.bind(this)
  }

  handleOnPlusRange () {
    this.props.handleOnPlusRange()
  }

  render () {
    const styles = {
      button: {
        margin: 12,
      },
    };

    return (
      <RaisedButton onClick={this.handleOnPlusRange}
        style={styles.button}
        icon={<FontIcon className="material-icons">add</FontIcon>}
      />
    )
  }
}
