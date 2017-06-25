import React from "react";

import Ingredients from "./Ingredients";
import Step from "./Step";
import NewStep from "./NewStep";
import NewStepRange from "./NewStepRange";

// styles
import styled from 'styled-components'
import NewStepButton from "./NewStepButton"
import TableStyle from './TableStyle'

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleMaterialAddition = this.handleMaterialAddition.bind(this);
    this.handleStepAddition = this.handleStepAddition.bind(this)
    this.handleOnPlusRange = this.handleOnPlusRange.bind(this)
    this.handleNextStep = this.handleNextStep.bind(this)

    this.state = {
      maxStepRange: 0,
      currentStepRange: 1,
      sumStepRange: 0,
      currentStepIndex: 0,
      data: {
        materials: [
          { name: 'carrot' },
          { name: 'potato' },
          { name: 'onion' },
          { name: 'roux' },
          { name: 'chocolate' },
        ],
        steps: [
          [
            { name: 'cut', width: '2' },
            { name: 'boil', width: '1' }
          ],
          [
            { name: 'mix', width: '3' },
          ],
        ]
      },
    }
  }

  handleMaterialAddition(name) {
    const { materials } = this.state.data;
    materials.push({ name })
    this.setState({ materials });
    this.setState({maxStepRange: this.state.maxStepRange + 1});
  }

  handleStepAddition (body) {
    const { data } = this.state
    if (data.steps.length == this.state.currentStepIndex) {
      data.steps.push([{name: body, width: this.state.currentStepRange}])
    } else {
      data.steps[data.steps.length-1].push({name: body, width: this.state.currentStepRange})
    }
      this.setState({sumStepRange: this.state.sumStepRange + this.state.currentStepRange})
    this.setState({currentStepRange: 1})
    this.setState(data)
  }

  handleOnPlusRange () {
    const { currentStepRange } = this.state
    this.setState({ currentStepRange: currentStepRange + 1 });
  }

  handleNextStep () {
    const { currentStepIndex } = this.state
    this.setState({ currentStepIndex: currentStepIndex + 1, currentStepRange: 1, sumStepRange: 0 });
  }

  render() {
    const steps_length = this.state.data.steps.length
    const steps = this.state.data.steps.map((d, idx) => (
      <Step
        data={d}
        isLast={(idx == steps_length-1 && this.state.currentStepIndex == steps_length-1) ?  true : false}
        enableAddRange={this.state.maxStepRange-1 > this.state.sumStepRange}
        currentStepRange={this.state.currentStepRange}
        handleOnPlusRange={this.handleOnPlusRange}
        handleNextStep={this.handleNextStep}
      />
    ))
    const newStepRange = (this.state.currentStepIndex == steps_length && this.state.currentStepRange < this.state.maxStepRange) ? <tr><td colSpan={this.state.currentStepRange}><NewStepRange handleOnPlusRange={this.handleOnPlusRange} /></td></tr> : false
    return (
      <div>
        <h1>Create Recipe</h1>
        <TableStyle>
          <tbody>
            <Ingredients handleMaterialAddition={this.handleMaterialAddition} data={this.state.data.materials} />
            {steps}
            {newStepRange}
          </tbody>
        </TableStyle>
        <NewStep addStep={this.handleStepAddition}/>
      </div>
    );
  }
}
