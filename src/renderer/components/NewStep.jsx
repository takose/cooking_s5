import React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

export default class NewStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: '' }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(e) {
    this.setState({ body: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { addStep } = this.props;
    if (!addStep || !this.state.body.length) return;
    addStep(this.state.body);
    this.setState({ body: '' });
  }

  render() {
    const styles = {
      button: {
        margin: 12,
      },
    };

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <TextField hintText="Add Step.." onChange={this.handleOnChange} value={this.state.body} />
          <RaisedButton
            style={styles.button}
            icon={<FontIcon className="material-icons">add</FontIcon>}
          />
        </form>
      </div>
    );
  }
}
