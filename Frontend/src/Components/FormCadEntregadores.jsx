import { Card, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";

export default function FormCadUsuarios() {
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [nomeVacina, setNomeVacina] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [cadastroErro, setCadastroErro] = useState(false);

  async function manipulaSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      setValidado(false);

      // Limpar os campos do formulário após o envio
      setCodigo("");
      setNomeVacina("");
      setQuantidade("");
      setValor("");

      // Enviar dados para o backend
      enviarDados();
    } else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();

    document.body.style.overflow = "hidden";
    document.body.style.overflow = "auto";
  }

  function handleCodigoChange(event) {
    setCodigo(event.target.value);
  }

  function handleNomeVacinaChange(event) {
    setNomeVacina(event.target.value);
  }

  function handleQuantidadeChange(event) {
    setQuantidade(event.target.value);
  }

  function handleValorChange(event) {
    setValor(event.target.value);
  }


  async function enviarDados() {
    try {
      const response = await axios.post("http://localhost:4000/entregador", {
        codigo,
        nomeVacina,
        quantidade,
        valor
      });
      console.log(response.data); // Exibe a resposta do backend (opcional)
      exibirMensagemSucesso();
    } catch (error) {
      console.error(error);
      exibirMensagemErro();
    }
  }

  function exibirMensagemSucesso() {
    setCadastroSucesso(true);
    setTimeout(() => {
      setCadastroSucesso(false);
    }, 3000); // Exibir a mensagem de sucesso por 3 segundos
  }

  function exibirMensagemErro() {
    setCadastroErro(true);
    setTimeout(() => {
      setCadastroErro(false);
    }, 3000); // Exibir a mensagem de erro por 3 segundos
  }
  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100">

      <Card className="text-center">
        <Card.Body>
          <Card.Title className="mb-4">Comprar vacina</Card.Title>
          {cadastroSucesso && (
            <Alert variant="success">Cadastro realizado com sucesso!</Alert>
          )}
          {cadastroErro && (
            <Alert variant="danger">Ocorreu um erro ao comprar. Por favor, tente novamente.</Alert>
          )}
          <Form noValidate validated={validado} onSubmit={manipulaSubmissao}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCodigo">
                <Form.Control
                  type="text"
                  placeholder="Código"
                  value={codigo}
                  onChange={handleCodigoChange}
                  isInvalid={validado && codigo === ""}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, informe o código.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridNomeVacina">
                <Form.Control
                  type="text"
                  placeholder="Nome Vacina"
                  value={nomeVacina}
                  onChange={handleNomeVacinaChange}
                  isInvalid={validado && nomeVacina === ""}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, informe o nome da vacina.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridQuantidade">
                <InputMask
                  maskPlaceholder={null}
                  className="form-control"
                  placeholder="Quantidade"
                  value={quantidade}
                  onChange={handleQuantidadeChange}
                  isInvalid={validado && quantidade === ""}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, informe a quantidade.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridValor">
                <InputMask
                  type="text"
                  maskPlaceholder={null}
                  className="form-control"
                  placeholder="Valor"
                  value={valor}
                  onChange={handleValorChange}
                  isInvalid={validado && valor === ""}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, informe o valor da vacina.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button className="mt-3" variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
