import  express  from 'express';

// Classe base para evitar redundancia de codigo nas outras classes
class BaseRouter{
    _router; // definido dentro da classe para ser acessado pelos metodos da classe
    _controller;    
    getRouter() {
        return this._router;
    }

    setRouter(router) {
        this._router = router;
    }
    
    getController() {
        return this._controller;
    }
    
    setController(controller) {
        this._controller = controller;
    }
    constructor(){
        this._router = express.Router();
        this._controller = null;
    }
}

export default BaseRouter