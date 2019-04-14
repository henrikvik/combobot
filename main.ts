import { app, BrowserWindow } from "electron";
let win : BrowserWindow;

app.on("ready", () => {
    win = new BrowserWindow({
        width: 800,
        height: 400,
        frame: false,
        resizable: true,
    });

    win.loadFile(`${__dirname}/index.html`);
});

app.on("window-all-closed", () => {
    app.quit();
});