import "../styles/button_creator.scss";

import { h, Component } from "preact";
import { remote } from "electron";

class Button_creator extends Component {
    Checkbox = props => (
        <input type="checkbox" {...props} />
      )

      state = { checked: true }

      handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked })

    render() {
        return <div class="button_creator">
        <div class="directional_buttons">
            <button class="button" id="7" onClick={()=> alert("up-left!")}>7</button>
            <button class="button" id="8" onClick={()=> alert("up!")}>8</button>
            <button class="button" id="9" onClick={()=> alert("up-right!")}>9</button>
            <button class="button" id="4" onClick={()=> alert("left!")}>4</button>
            <button class="button" id="5" onClick={()=> alert("neutral!")}>5</button>
            <button class="button" id="6" onClick={()=> alert("right!")}>6</button>
            <button class="button" id="1" onClick={()=> alert("down-left!")}>1</button>
            <button class="button" id="2" onClick={()=> alert("down!")}>2</button>
            <button class="button" id="3" onClick={()=> alert("down-right!")}>3</button>
        </div>
        <div class="checkbox">
            <label>
            <this.Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
            />
            <span>D-Pad/Num-Pad</span>
            </label>
        </div>
            

        </div>;
    }

    
};

export default Button_creator;