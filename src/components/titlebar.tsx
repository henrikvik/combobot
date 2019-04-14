import "./titlebar.scss";

import { h, Component } from "preact";
import { remote } from "electron";

class TitleBar extends Component {
    render() {
        return <div class="titlebar">
            <span>&nbsp;combobot</span>
            <span>Config | Edit</span>
            <button class="titlebar-close" onClick={()=> remote.app.quit()}>X</button>
        </div>;
    }
};

export default TitleBar;