import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MultipleAddonsExample() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>Ingrese Nombre</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Ingrese Correo</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
    </>
  );
}

export default MultipleAddonsExample;