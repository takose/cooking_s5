import React from "react";

export default function Row(props) {
  const cells = props.data.map((d) => <td>{d.name}</td>)
  return (
    <tr>
      {cells}
    </tr>
  )
}
