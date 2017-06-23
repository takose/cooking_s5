import { app } from "electron";
import createMainWindow from "./createMainWindow";

let mainWindow = null;

app.on("ready", async () => {

  mainWindow = createMainWindow();
  if (process.env.NODE_ENV !== 'development') {
    const install = () => {
      const {
        default: installer,
        REACT_DEVELOPER_TOOLS,
      } = require('electron-devtools-installer')
      const extensions = [
        REACT_DEVELOPER_TOOLS,
      ]

      return Promise.all(extensions.map(ext => installer(ext, true)))
        .catch(console.log)
    }
    await install()
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})

app.on("activate", (_e, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    mainWindow = createMainWindow();
  }
})
