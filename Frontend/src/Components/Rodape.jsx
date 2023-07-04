import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className='bg-dark'  style={{ padding: '20px', position: 'fixed', bottom: '0', width: '100%' }}>
      <Container >
        <p style={{ margin: 0, textAlign: 'center', color: "white"}}>Seu Entregador - Todos os direitos reservados</p>
      </Container>
    </footer>
  );
}

export default Footer;
