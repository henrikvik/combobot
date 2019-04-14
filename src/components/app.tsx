import {h} from "preact";
import TitleBar from "./titlebar";
import button_creator from "./button_creator"
import Button_creator from "./button_creator";

export default ()=>{
    return <div id="app"><TitleBar/>
    <Button_creator/>
    </div>;
};