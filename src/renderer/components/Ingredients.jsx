import React from "react";
import CellStyle from "./CellStyle"

export default function Ingredients(props) {
  const cells = props.data.map((d) => <CellStyle>{d.name}</CellStyle>)
  return (
    <tr>
      {cells}
    </tr>
  )
}
