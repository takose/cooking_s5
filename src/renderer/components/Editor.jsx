import React from "react";

import NewMaterial from "./NewMaterial";
import Row from "./Row";
import NewStep from "./NewStep";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleMaterialAddition = this.handleMaterialAddition.bind(this);
    this.handleOnPlusWidth = this.handleOnPlusWidth.bind(this)

    this.state = {
      width: 0,
      data: [
        {
          category: 'materials',
          body: [
            { name: 'carrot' },
            { name: 'potato' },
            { name: 'onion' },
            { name: 'apple' },
            { name: 'chocolate' },
          ]
        },
        {
          category: 'steps',
          body: [
            { name: 'cut' },
            { name: 'bake' },
            { name: 'scheam' },
            { name: 'boil' },
          ]
        }
      ],
    }
  }

  handleMaterialAddition(name) {
    const { data } = this.state;
    data[0].body.push({ name })
    this.setState({ data });
  }

  handleOnPlusWidth() {
    console.log(this.state.width)
    const { width } = this.state
    this.setState({ width: width + 1 });
  }

  render() {
    const rows = this.state.data.map((d) => <Row data={d.body} category={d.category} />)
    return (
      <div>
        <NewMaterial addMaterial={this.handleMaterialAddition} />
        <table>
          {rows}
          <tr>
            <td colSpan={this.state.width}>
              <buttin onClick={this.handleOnPlusWidth}>+</buttin>
            </td>
          </tr>
        </table>
        <NewStep />
      </div>
    );
  }
}
