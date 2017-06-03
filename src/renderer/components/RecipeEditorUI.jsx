import React from "react";

import Editor from "./Editor";

export default class RecipeEditorUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}
