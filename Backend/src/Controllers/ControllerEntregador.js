import Database from "../utils/database.js";

const db = new Database();

class ControllerEntregador{

    constructor() {}

    async getTodosEntregadores(_req, res){
        try 
        {
            const sql = "SELECT * FROM comprarvacina";
            const resultado = await db.executaComando(sql);
            res.status(200).json(resultado);
        } 
        catch (err) 
        {
            console.error("Erro ao buscar dados da tabela:", err);
            res.status(500).json({ error: "Método não permitido." });
        }  
    }
    
    async getEntregadorByCodigo(req, res) {
        try {
          const sql = "SELECT * FROM comprarvacina WHERE codigo = ?";
          const valor = [req.params.codigo];
          const resultado = await db.executaComando(sql, valor);
      
          if (resultado.length > 0) {
            res.status(200).json(resultado);
          } else {
            res.status(404).json({ error: "Código não encontrado." });
          }
        } 
        catch (err) 
        {
          console.error("Erro ao buscar entregador por código:", err);
          res.status(500).json({ error: "Erro ao buscar entregador por código." });
        }
    }
      
    async postEntregador(req, res) {
        try {
            const {codigo, nomeVacina, quantidade, valor} = req.body;
    
            const sql = "INSERT INTO comprarvacina (codigo, nomeVacina, quantidade, valor) VALUES (?, ?, ?, ?)";
            const valores = [codigo, nomeVacina, quantidade, valor];
    
            await db.executaComandoNonQuery(sql, valores);
    
            res.status(200).json({ status: true, message: "Compra vacina cadastrado com sucesso!" });
        } catch (err) {
            console.error("Erro ao cadastrar comprar vacina:", err);
            res.status(500).json({ status: false, error: "Erro ao cadastrar compra vacina." });
        }
    }

    async deleteEntregador(req, res) {
        try {
          const { codigo } = req.body;
      
          const sql = "DELETE FROM comprarvacina WHERE codigo = ?";
          const valores = [codigo];
      
          const resultado = await db.executaComandoNonQuery(sql, valores);
      
          if (resultado) {
            res.status(200).json({ status: true, message: "Compra vacina deletado com sucesso!" });
          } else {
            res.status(404).json({ status: false, error: "ComprarVacina não encontrado." });
          }
        } catch (err) {
          console.error("Erro ao deletar entregador:", err);
          res.status(500).json({ status: false, error: "Erro ao deletar entregador." });
        }
      }
     
    async putEntregador(req, res) {
        try {
            const { codigo, nomeVacina, quantidade, valor } = req.body;
        
            const sql = "UPDATE comprarvacina SET nomeVacina = ?, quantidade = ?, valor = ? WHERE codigo = ?";
            const valores = [nomeVacina, quantidade, valor, codigo];
        
            await db.executaComandoNonQuery(sql, valores);
        
            res.status(200).json({ status: true, message: "Entregador atualizado com sucesso!" });
          } catch (err) {
            console.error("Erro ao atualizar entregador:", err);
            res.status(500).json({ status: false, error: "Erro ao atualizar entregador." });
          }
    }  
}

export default ControllerEntregador;