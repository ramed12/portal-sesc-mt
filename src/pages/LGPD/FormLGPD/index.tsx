import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function PrivacyForm() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const [selectedOption, setSelectedOption] = useState(null);

const handleRadioChange = (e: any) => {
  const value = e.target.value;

  // Se o botão de rádio clicado já está selecionado, desmarque-o
  if (value === selectedOption) {
    setSelectedOption(null);
  } else {
    setSelectedOption(value);
  }
};

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // coloque aqui o código para enviar o formulário
  };

  return (
    <Card className="mx-auto my-4 shadow-lg" style={{ width: '50rem' }}>
      <Card.Header className="fs-3 fw-bold">Formulário de Privacidade e Proteção de Dados</Card.Header>
      <Card.Body>
        <div className='fs-6 my-3'>Se você acredita que seus Dados Pessoais foram usados de maneira incompatível com nossa Política de Privacidade ou com as suas escolhas enquanto Titular de seus Dados Pessoais, ou, ainda, se você tiver dúvidas, comentários ou sugestões relacionadas a esta nossa Política, entre em contato conosco. Nós temos um Portal de Privacidade e um Encarregado (Data Protection Officer – DPO) que você pode preencher logo abaixo:</div>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group controlId="name" className="col-md-6">
              <Form.Control type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="cpf" className="col-md-6">
              <Form.Control type="text" placeholder="Digite os 5 primeiros dígitos do seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group controlId="email" className="col-md-6 my-4">
              <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="phone" className="col-md-6 my-4">
              <Form.Control type="text" placeholder="Digite seu telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
          </div>
          <h6 className='fw-bold'>Marque um dos campos abaixo, que atenda seu contato com o nosso DPO (encarregado):</h6>
          <div className="row my-3">
           {/* no render, adicione um novo botão de rádio "nenhum" e defina o onChange */}
            <Form.Group controlId="information" className="col-md-12 my-3">
              <Form.Check
              type="radio"
              label="Informação"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleRadioChange} />
            </Form.Group>
            <Form.Group controlId="access" className="col-md-12 my-3">
              <Form.Check
              type="radio"
              label="Acesso (saber os dados que temos sobre você)"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleRadioChange} />
            </Form.Group>
            <Form.Group controlId="personalData" className="col-md-12 my-3">
              <Form.Check
              type="radio"
              label="Eliminação de dados pessoais (Excluir seus dados pessoais (inclusive exclusão de cadastro), resguardados eventuais direitos e deveres de manutenção de dados pelo Sesc RS e dentro das possibilidades técnicas, nos termos da lei)."
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleRadioChange} />
            </Form.Group>
            <Form.Group controlId="other" className="col-md-12 my-3">
              <Form.Check
              type="radio"
              label="Revogação de Consentimento (Revogar os seus consentimentos dados anteriormente, inclusive solicitar a interrupção do envio de mensagens de marketing)."
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleRadioChange} />
            </Form.Group>
            <Form.Group controlId="other" className="col-md-12 my-3">
              <Form.Check
              type="radio"
              label="Outros"
              value="option5"
              checked={selectedOption === "option5"}
              onChange={handleRadioChange} />
            </Form.Group>
          </div>
          <Form.Group controlId="message">
            <Form.Label className='fw-bold'>Escreva sua mensagem:</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
          <Button className='my-3 fw-bold btn btn-warning' variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PrivacyForm;

