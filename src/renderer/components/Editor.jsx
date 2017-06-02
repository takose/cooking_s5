import React from "react";

const {Table, Column, Cell} = require('fixed-data-table');

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan'},
        {name: 'Amelia'},
        {name: 'Estevan'},
        {name: 'Florence'},
        {name: 'Tressa'},
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
        <Table
          rowsCount={this.state.myTableData.length}
          rowHeight={50}
          headerHeight={50}
          width={400}
          height={500}>
          <Column
            header={<Cell>Name</Cell>}
            cell={props => (
              <Cell {...props}>
                {this.state.myTableData[props.rowIndex].name}
              </Cell>
            )}
            width={200}
          />
          <Column
            header={<Cell>Name2</Cell>}
            cell={props => (
              <Cell {...props}>
                {this.state.myTableData[props.rowIndex].name}
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    );
  }
}
