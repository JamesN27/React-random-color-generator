import randomColor from 'randomcolor';
import React, { useState } from 'react';
import oddspedia from './oddspedia.png';

export default function App() {
  const [color, setColor] = useState('');

  function generateColor() {
    const newColor = randomColor();
    setColor(newColor);
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          height: '150px',
          marginTop: '250px',
          backgroundColor: color,
        }}
      >
        <button
          style={{
            color: '#ffffff',
            backgroundColor: '#142793',
          }}
          onClick={generateColor}
        >
          Generate
        </button>
      </div>

      <div
        style={{
          marginTop: '30px',
        }}
      >
        Generated Color: {color}
      </div>

      <footer
        style={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#888',
        }}
      >
        <p>Data powered by Oddspedia</p>
        <a href="https://oddspedia.com/">
          <img src={oddspedia} alt="Logo" width={250} height={50} />
        </a>
      </footer>
    </div>
  );
}
