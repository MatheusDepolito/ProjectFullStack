import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Components/Layout";

export default function App() {
    /*const [dataList, setDataList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/entregador')
        .then((response) => { 
            setDataList(response.data)
        }) 
        .catch((error) =>{ console.log(error) })
    })*/
    return (
        <>
            <Layout/>
        </>
    )
}
/*
       <div>
          {dataList.map((data) => (
            <div key={data.codigo}>
              Codigo: {data.codigo}, Nome Completo: {data.nomeCompleto}, Disponivel 24hrs: {data.disponivel24horas}, Veiculo: {data.veiculo}, Whatsapp: {data.whatsapp} e Disponivel Tipo Entrega: {data.disponivelTipoEntrega}
            </div>
          ))}
        </div>*/