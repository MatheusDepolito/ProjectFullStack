import BaseRouter from "./BaseRouter.js";
import ControllerEntregador from "../Controllers/ControllerEntregador.js";

class RouteEntregador extends BaseRouter{
    constructor(){
        super();    
        this._controller = new ControllerEntregador();
        
        this._router.get("/", this._controller.getTodosEntregadores);
        this._router.get("/:codigo", this._controller.getEntregadorByCodigo);
        this._router.post("/", this._controller.postEntregador);
        this._router.delete("/", this._controller.deleteEntregador);
        this._router.put("/", this._controller.putEntregador);
    }
}

export default RouteEntregador