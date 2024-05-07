// TextInput.js
import React from 'react';

function Input11 ({ value }) {
  const inputStyle = {
    border: `1px solid ${value.length === 0 ? 'red' : 'green'}`,
    padding: '8px',
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={value}
        style={inputStyle}
      />
    </div>
  );
};

export default Input11;
