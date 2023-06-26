import React, { useState } from 'react';

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
    <div>
      <label htmlFor="min">Ritmo Cardiaco (lat/min)</label>
      <input type="number" id="min" value={ritmo} onChange={handleRitmoChange} />
      <br />
      <br />
      <button onClick={postRitmo}>Enviar Valor</button>
    </div>
  );
};

export default RandomNumberGenerator;
