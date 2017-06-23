import React from "react";
import NewStepRange from "./NewStepRange";

import CellStyle from "./CellStyle"
export default class Step extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const cells = this.props.data.map((d) => <CellStyle colSpan={d.width}>{d.name}</CellStyle>)
    const newStep = this.props.isLast ? <NewStepRange {...this.props} /> : false
    return (
      <tr>
        {cells}
        {newStep}
      </tr>
    )
  }
}
