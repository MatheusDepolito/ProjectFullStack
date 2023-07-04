





class Entregador{

    #codigo
    #nomeCompleto
    #disponivel24Horas
    #veiculo
    #whatsapp
    #disponivelTipoEntrega
    

    constructor(codigo, nomeCompleto, disponivel24Horas, veiculo, whatsapp,disponivelTipoEntrega){
        this.#codigo = codigo;
        this.#nomeCompleto = nomeCompleto;
        this.#disponivel24Horas = disponivel24Horas;
        this.#veiculo = veiculo;
        this.#whatsapp = whatsapp;
        this.#disponivelTipoEntrega = disponivelTipoEntrega;
    }

    getCodigo() {
        return this.#codigo;
    }
    getNomeCompleto(){
        return this.#nomeCompleto;
    }
    getDisponivel24Horas(){
        return this.#disponivel24Horas;
    }
    getVeiculo(){
        return this.#veiculo;
    }
    getWhatsapp(){
        return this.#whatsapp;
    }
    getDisponivelTipoEntrega(){
        return this.#disponivelTipoEntrega;
    }
}

export default Entregador;