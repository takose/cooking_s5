import React from "react";

export default function Row(props) {
  const cells = props.data.map((d) => <td>{d.name}</td>)
  console.log({cells})
  return (
    <tr>
      {cells}
    </tr>
  )
}
