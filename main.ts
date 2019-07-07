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


import * as process from "child_process";
let vigem = process.spawn("vigem-interface");
vigem.stdin.setDefaultEncoding("utf-8");

let d = 1;
setInterval(()=>{
    d = (d % 9) + 1;
    vigem.stdin.write("D"+d+" R"+d+" L"+d+" ");
}, 100);