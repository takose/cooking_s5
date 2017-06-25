import React from "react";
import NewStepRange from "./NewStepRange";
import StepForward from "./StepForward"

import CellStyle from "./CellStyle"
export default class Step extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const styles = {
      td: {
        // backgroundColor: "#fdd",
      },
    };
    const cells = this.props.data.map((d) => <CellStyle colSpan={d.width}>{d.name}</CellStyle>)
    const stepForward = this.props.isLast ? <StepForward handleNextStep={this.props.handleNextStep} /> : false
    const addRange = (stepForward && this.props.enableAddRange) ? <NewStepRange handleOnPlusRange={this.props.handleOnPlusRange} /> : false
    return (
      <tr>
        {cells}
        <td style={styles.td} colspan={this.props.currentStepRange}>
          {addRange}
          {stepForward}
        </td>
      </tr>
    )
  }
}
