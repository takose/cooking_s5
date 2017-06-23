import React from "react";

import Editor from "./Editor";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

export default class RecipeEditorUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Editor />
        </MuiThemeProvider>
      </div>
    );
  }
}
