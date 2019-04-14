import "./styles/index.scss";
import {h, render} from "preact"

import App from "./components/app";

const app = document.getElementById("app");

render(<App/>, document.body, app);