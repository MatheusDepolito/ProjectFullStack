import mysql from 'mysql';

class Database{
    #conexao

    getConexao() { return this.#conexao; }
    setConexao(conexao) { this.#conexao = conexao; }

    constructor(){
        this.#conexao = mysql.createConnection({
            host: 'localhost',
            database: 'db',
            user: 'root',
            password: 'root'
        });

        this.#conexao.on('connect', () => {
            console.log('Conexão estabelecida com o banco de dados');
          });
      
          // Evento de erro na conexão
        this.#conexao.on('error', (error) => {
            console.error('Erro na conexão com o banco de dados:', error);
        });
    }

    
    executaComando(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                try{
                    if(error)
                        throw error;
                    else 
                        res(results);
                } catch(error) {
                    rej(error);
                }
            });
        })
    }
    
    executaComandoNonQuery(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results.affectedRows > 0);
            });
        })
    }

    executaComandoLastInserted(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results.insertId);
            });
        })
    }    
}

export default Database