import React from "react";
import TextField from 'material-ui/TextField';

export default class NewMaterial extends React.Component {
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
    const { addMaterial } = this.props;
    if (!addMaterial || !this.state.body.length) return;
    addMaterial(this.state.body);
    this.setState({ body: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <TextField hintText="Add Material.." onChange={this.handleOnChange} value={this.state.body} />
        <button>Add</button>
      </form>
    );
  }
}
