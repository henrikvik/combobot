import { app, BrowserWindow } from "electron";
let win : BrowserWindow;

app.on("ready", () => {
    win = new BrowserWindow({
        width: 800,
        height: 200,
        frame: false,
        resizable: false,
    });

    win.loadFile(`${__dirname}/index.html`);
});

app.on("window-all-closed", () => {
    app.quit();
});