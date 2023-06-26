import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const RandomNumberGenerator = () => {
  const [ritmo, setRitmo] = useState('');

  const handleRitmoChange = (event) => {
    setRitmo(event.target.value);
  };

  const postRitmo = () => {
    const payload = {
      value: ritmo
    };

    fetch('https://o48w0ezi87.execute-api.us-east-1.amazonaws.com/desarrollo/taller', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          // La llamada a la API fue exitosa
          console.log('Número aleatorio enviado correctamente');
        } else {
          // La llamada a la API falló
          console.log('Error al enviar el número aleatorio');
        }
      })
      .catch(error => {
        // Error en la llamada a la API
        console.log('Error en la llamada a la API:', error);
      });
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group controlId="ritmo">
              <Form.Label>Ritmo Cardiaco (lat/min)</Form.Label>
              <Form.Control type="number" value={ritmo} onChange={handleRitmoChange} />
            </Form.Group>
            <Button variant="primary" onClick={postRitmo} className="mt-2">Enviar Valor</Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <img src="https://s3.amazonaws.com/media.thecrimson.com/photos/2022/01/31/203310_1353836.gif" alt="Máquina trotadora" style={{ width: '100%', height: 'auto' }}/>
        </Col>
      </Row>
    </Container>
  );
};

export default RandomNumberGenerator;
