import React from "react";
import CellStyle from "./CellStyle"
import NewMaterial from "./NewMaterial";

export default function Ingredients(props) {
  const cells = props.data.map((d) => <CellStyle>{d.name}</CellStyle>)
  const styles = {
    tr: {
      backgroundColor: "#dfd",
    },
  };
  return (
    <tr style={styles.tr}>
      {cells}
      <td>
        <NewMaterial addMaterial={props.handleMaterialAddition} />
      </td>
    </tr>
  )
}
