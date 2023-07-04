import { Routes, Route } from "react-router-dom";
import FormCadUsuarios from "./FormCadEntregadores";
import TabelaEntregadores from "./TabelaEntregadores";

export default function Rotas() {
    return(
            <Routes>
                <Route path="/home" element={<h1>home</h1>}/>
                <Route path="/cadastrarEntregadores" element={<FormCadUsuarios/>}/>
                <Route path="/visualizarEntregadores" element={<TabelaEntregadores/>}/>
            </Routes>
    )
}

