import * as vigem from "node-vigem";

class Controller {
    private target : vigem.Target;
    private client : vigem.Client;

    constructor() {
        this.client = vigem.alloc();
        this.target = vigem.target_x360_alloc();
    }
}

export default Controller;