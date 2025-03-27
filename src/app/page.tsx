"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid2 as Grid } from "@mui/material";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import axios, { AxiosError } from "axios";

import lpCoverImage from "../../public/Gemini_Generated_Image_l0r6oal0r6oal0r6.jpeg";
import zIndex from "@mui/material/styles/zIndex";

export const dynamic = "force-static";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  truckQuantity: string;
  state: string;
  city: string;
};

export default function Home() {
  const [dataSent, setDataSent] = React.useState(false);

  const handleSubmit = async (data: FormDataType) => {
    try {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      const user = process.env.NEXT_PUBLIC_GITHUB_USER;
      const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;
      const url = `https://api.github.com/repos/${user}/${repo}/contents/data.json`;

      if (!token || !user || !repo) {
        console.error("Variáveis de ambiente do GitHub não configuradas.");
        return;
      }

      // Verifica se o arquivo dados.json existe
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `token ${token}` },
        });

        // Se o arquivo existe, atualiza o conteúdo
        const existingData = JSON.parse(atob(response.data.content));
        const newData = [...existingData, data];
        const content = btoa(JSON.stringify(newData));

        await axios.put(
          url,
          {
            message: "Atualizando data.json",
            content: content,
            sha: response.data.sha,
          },
          { headers: { Authorization: `token ${token}` } }
        );

        console.log("Dados atualizados com sucesso!");
        setDataSent(true);
      } catch (error) {
        // Se o arquivo não existe, cria o arquivo com os dados do formulário
        if (error instanceof AxiosError) {
          if (error.response && error.response.status === 404) {
            const content = btoa(JSON.stringify([data]));

            await axios.put(
              url,
              { message: "Criando dados.json", content: content },
              { headers: { Authorization: `token ${token}` } }
            );

            console.log("Arquivo dados.json criado com sucesso!");
            setDataSent(true);
          }
        } else {
          console.error("Erro ao persistir dados:", error);
        }
      }
    } catch (error) {
      console.error("Erro geral ao persistir dados:", error);
    }
  };

  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            container
            size={{ md: 12, lg: 8, xl: 8 }}
            spacing={2}
            offset={{ md: 0, lg: 2, xl: 2 }}
          >
            <Grid
              size={6}
            ></Grid>
            <Grid size={6}>
              {!dataSent ? (
                <Form onSubmit={handleSubmit} />
              ) : (
                <div role="status" className="success-message">
                  <p>Dados enviados com sucesso!</p>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
