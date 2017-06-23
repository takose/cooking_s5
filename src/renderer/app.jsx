import React from "react";
import { render } from "react-dom";

import injectTapEventPlugin from 'react-tap-event-plugin';
import RecipeEditorUI from "./components/RecipeEditorUI";

injectTapEventPlugin();
render(
  <RecipeEditorUI />, document.getElementById("app")
);
