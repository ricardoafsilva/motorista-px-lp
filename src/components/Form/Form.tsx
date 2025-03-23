'use client'

import React, { useState } from 'react';

interface FormProps {
  onSubmit: (data: { nome: string; email: string }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome:
        </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Enviar
      </button>
    </form>
  );
};

export default Form;