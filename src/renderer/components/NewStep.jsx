import React from "react";
import TextField from 'material-ui/TextField';

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
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <TextField hintText="Add Step.." onChange={this.handleOnChange} value={this.state.body} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
