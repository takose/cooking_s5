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
      currentStepRange: 1,
      currentStepIndex: 1,
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
  }

  handleStepAddition (body) {
    const { data } = this.state
    if (data.steps.length == this.state.currentStepIndex) {
      data.steps.push([{name: body, width: this.state.currentStepRange}])
      this.setState(data)
    } else {
      data.steps[data.steps.length-1].push({name: body, width: this.state.currentStepRange})
      this.setState(data)
    }
  }

  handleOnPlusRange () {
    const { currentStepRange } = this.state
    this.setState({ currentStepRange: currentStepRange + 1 });
  }

  handleNextStep () {
    const { currentStepIndex } = this.state
    this.setState({ currentStepIndex: currentStepIndex + 1 });
  }

  render() {
    const steps_length = this.state.data.steps.length
    const steps = this.state.data.steps.map((d, idx) => (
      <Step
        data={d}
        isLast={(idx == steps_length-1 && this.state.currentStepIndex == steps_length-1) ?  true : false}
        currentStepRange={this.state.currentStepRange}
        handleOnPlusRange={this.handleOnPlusRange}
        handleNextStep={this.handleNextStep}
      />
    ))
    const newStep = (this.state.currentStepIndex == steps_length) ? <tr><NewStepRange handleNextStep={this.handleNextStep} handleOnPlusRange={this.handleOnPlusRange} currentStepRange={this.state.currentStepRange} /></tr> : false
    return (
      <div>
        <NewMaterial addMaterial={this.handleMaterialAddition} />
        <TableStyle>
          <tbody>
            <Ingredients data={this.state.data.materials} />
            {steps}
            {newStep}
          </tbody>
        </TableStyle>
        <NewStep addStep={this.handleStepAddition}/>
      </div>
    );
  }
}
