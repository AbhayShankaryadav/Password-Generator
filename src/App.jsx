
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  FormLabel,
  FormCheck,
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Clipboard } from 'react-bootstrap-icons';

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordlen, setPasswordLen] = useState(12);
  const [fPass, setPass] = useState('');

  const creratePassword = () => {
    let finalPass = '';
    let charSet = '';
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      alert('Please select at least one checkbox');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fPass);
    alert('Password copied to clipboard!');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center w-100">
        <Col md={6}>
          <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 text-primary">Password Generator</h2>

              <InputGroup className="mb-3">
                <FormControl value={fPass} readOnly />
                <Button variant="outline-primary" onClick={copyToClipboard}>
                  <Clipboard />
                </Button>
              </InputGroup>

              <Form.Group className="mb-3">
                <FormLabel>Password Length ({passwordlen})</FormLabel>
                <Form.Range
                  min={6}
                  max={20}
                  value={passwordlen}
                  onChange={(e) => setPasswordLen(e.target.value)}
                />
              </Form.Group>

              <fieldset className="mb-3">
                <legend className="text-muted">Character Options</legend>
                <Form.Group>
                  <FormCheck
                    type="checkbox"
                    label="Uppercase"
                    checked={uppercase}
                    onChange={() => setUppercase(!uppercase)}
                  />
                </Form.Group>
                <Form.Group>
                  <FormCheck
                    type="checkbox"
                    label="Lowercase"
                    checked={lowercase}
                    onChange={() => setLowercase(!lowercase)}
                  />
                </Form.Group>
                <Form.Group>
                  <FormCheck
                    type="checkbox"
                    label="Numbers"
                    checked={number}
                    onChange={() => setNumber(!number)}
                  />
                </Form.Group>
                <Form.Group>
                  <FormCheck
                    type="checkbox"
                    label="Symbols"
                    checked={symbols}
                    onChange={() => setSymbols(!symbols)}
                  />
                </Form.Group>
              </fieldset>

              <Button variant="primary" onClick={creratePassword} className="w-100">
                Generate Password
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;