'use client'

import React from 'react';
import Form from '../components/Form/Form';
import axios from 'axios';

export const dynamic = 'force-static';

export default function Home() {
  const handleSubmit = (data: { nome: string; email: string }) => {
    const token = 'SEU_TOKEN_DO_GITHUB'; // Substitua pelo seu token
    const url = 'https://api.github.com/repos/SEU_USUARIO/SEU_REPOSITORIO/contents/dados.json'; // Substitua pelo seu usuário e repositório
    const message = 'Adicionando novo envio de formulário';

    axios.get(url, { headers: { Authorization: `token ${token}` } })
      .then((response) => {
        const existingData = JSON.parse(atob(response.data.content));
        const newData = [...existingData, data];
        const content = btoa(JSON.stringify(newData));
        return axios.put(url, { message, content, sha: response.data.sha }, { headers: { Authorization: `token ${token}` } });
      })
      .then(() => {
        console.log('Dados enviados com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <div>
      <h1>Minha Landing Page</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
