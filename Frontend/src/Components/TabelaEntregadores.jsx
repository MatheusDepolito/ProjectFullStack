import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function TabelaEntregadores() {
  const [entregadores, setEntregadores] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    const fetchEntregadores = async () => {
      try {
        const response = await Axios.get("http://localhost:4000/entregador");
        setEntregadores(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntregadores();
  }, []);


  const handleEdit = (codigo) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [codigo]: true,
    }));
  };

  const handleConfirmEdit = async (codigo) => {
    try {
      const entregador = entregadores.find((e) => e.codigo === codigo);
      const response = await Axios.put(
        "http://localhost:4000/entregador",
        {
          ...entregador,
        }
      );
      console.log("Compra Vacina atualizada:", response.data);

      setEditMode((prevEditMode) => ({
        ...prevEditMode,
        [codigo]: false,
      }));
    } catch (error) {
      console.error("Erro ao atualizar o entregador:", error);
    }
  };

  const handleCancelEdit = (codigo) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [codigo]: false,
    }));
  };

// ...

const handleDelete = async (codigo) => {
    try {
      const entregador = entregadores.find((e) => e.codigo === codigo);
      await Axios({
        method: "DELETE",
        url: `http://localhost:4000/entregador`,
        data: entregador, // Envia o objeto entregador no corpo da requisição DELETE
      });
      setEntregadores((prevEntregadores) =>
        prevEntregadores.filter((entregador) => entregador.codigo !== codigo)
      );
      console.log("Entregador removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover o entregador:", error);
    }
  };
  
  // ...
  

  const renderEditActions = (codigo) => {
    return (
      <>
        <Button
          variant="success"
          className="mr-2"
          onClick={() => handleConfirmEdit(codigo)}
        >
          Confirmar
        </Button>{" "}
        <Button variant="secondary" onClick={() => handleCancelEdit(codigo)}>
          Cancelar
        </Button>
      </>
    );
  };

  const renderNormalActions = (codigo) => {
    return (
      <>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={() => handleEdit(codigo)}
        >
          <BsPencilSquare /> {/* Ícone de edição */}
        </Button>{" "}
        <Button variant="danger" onClick={() => handleDelete(codigo)}>
          <BsTrash /> {/* Ícone de exclusão */}
        </Button>
      </>
    );
  };

  return (
    <div>
      <br />
      <Link to="/cadastrarEntregadores">
        <Button variant="dark" className="mb-3">
          Cadastrar nova Compra
        </Button>
      </Link>

      <Table striped bordered hover variant="dark" className="text-center">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome Vacina</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {entregadores.map((entregador) => (
            <tr key={entregador.codigo}>
              <td>{entregador.codigo}</td>
              <td>
                {editMode[entregador.codigo] ? (
                  <Form.Control
                    type="text"
                    value={entregador.nomeVacina}
                    onChange={(e) =>
                      setEntregadores((prevEntregadores) =>
                        prevEntregadores.map((prevEntregador) =>
                          prevEntregador.codigo === entregador.codigo
                            ? {
                                ...prevEntregador,
                                nomeVacina: e.target.value,
                              }
                            : prevEntregador
                        )
                      )
                    }
                  />
                ) : (
                  entregador.nomeVacina
                )}
              </td>
              <td>
                {editMode[entregador.codigo] ? (
                  <Form.Control
                    type="text"
                    value={entregador.quantidade}
                    onChange={(e) =>
                      setEntregadores((prevEntregadores) =>
                        prevEntregadores.map((prevEntregador) =>
                          prevEntregador.codigo === entregador.codigo
                            ? {
                                ...prevEntregador,
                                quantidade: e.target.value,
                              }
                            : prevEntregador
                        )
                      )
                    }
                  />
                ) : (
                  entregador.quantidade
                )}
              </td>
              <td>
              {editMode[entregador.codigo] ? (
                  <Form.Control
                    type="text"
                    value={entregador.valor}
                    onChange={(e) =>
                      setEntregadores((prevEntregadores) =>
                        prevEntregadores.map((prevEntregador) =>
                          prevEntregador.codigo === entregador.codigo
                            ? {
                                ...prevEntregador,
                                valor: e.target.value,
                              }
                            : prevEntregador
                        )
                      )
                    }
                  />
                ) : (
                  entregador.valor
                )}
              </td>
              <td>
                {editMode[entregador.codigo]
                  ? renderEditActions(entregador.codigo)
                  : renderNormalActions(entregador.codigo)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
