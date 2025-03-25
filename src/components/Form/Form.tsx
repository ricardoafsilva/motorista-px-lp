'use client'

import React, { useState } from 'react';

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  truckQuantity: string;
  state: string;
  city: string;
}

interface FormProps {
  onSubmit: (data: FormDataType) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [truckQuantity, setTruckQuantity] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, email, phone, companyName, role, truckQuantity, state, city });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone:
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name da Empresa:
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cargo:
        </label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Quantidade de Caminhões:
        </label>
        <input
          type="number"
          value={truckQuantity}
          onChange={(e) => setTruckQuantity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Estado:
        </label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <br />
      <div className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cidade:
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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