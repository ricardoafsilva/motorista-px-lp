'use client'

import React from 'react';
import Form from '../components/Form/Form';
import axios from 'axios';

export const dynamic = 'force-static';

export default function Home() {
  const handleSubmit = (data: { nome: string; email: string }) => {
    const token = process.env.GITHUB_TOKEN;
    const user = process.env.GITHUB_USER;
    const repo = process.env.GITHUB_REPO;
    const url = `https://api.github.com/repos/${user}/${repo}/contents/data.json`;
    const message = 'Adicionando novo envio de formulário';

    if (!token || !user || !repo) {
      console.error('Variáveis de ambiente do GitHub não configuradas.');
      return;
    }

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
