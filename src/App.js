import randomColor from 'randomcolor';
import React, { useState } from 'react';

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
      {Boolean(color) && (
        <div
          style={{
            marginTop: '30px',
          }}
        >
          Generated Color: {color}
        </div>
      )}
    </div>
  );
}
