"use client";

import React, { useEffect, useState } from "react";

import { Box, Button, Grid2 as Grid, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

import axios from "axios";

import "./Form.scss";

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

interface StateType {
  id: number;
  sigla: string;
  nome: string;
}

interface CityType {
  id: number;
  nome: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [truckQuantity, setTruckQuantity] = useState("");
  const [state, setState] = useState<number>(0);
  const [city, setCity] = useState<number>(0);
  const [allStates, setAllStates] = useState<
    Array<{ id: number; sigla: string; nome: string }>
  >([]);
  const [allCities, setAllCities] = useState<
    Array<{ id: number; nome: string }>
  >([]);
  const allRoles = [
    { id: 1, name: "Diretor de logística", value: "logdir" },
    { id: 2, name: "Gestor de frota", value: "fleetmgr" },
    { id: 3, name: "Motorista", value: "driver" },
    { id: 4, name: "Proprietário", value: "owner" },
    { id: 5, name: "RH", value: "hr" },
  ];
  const allTruckQuantities = [
    { id: 1, name: "De 1 a 10", value: "range1" },
    { id: 2, name: "De 11 a 25", value: "range2" },
    { id: 3, name: "De 26 a 50", value: "range3" },
    { id: 4, name: "De 51 a 100", value: "range4" },
    { id: 5, name: "Acima de 100", value: "range5" },
  ];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        setAllStates(
          response.data.sort((a: StateType, b: StateType) =>
            a.nome.localeCompare(b.nome)
          )
        );
      } catch (erro) {
        console.error("Erro ao buscar estados:", erro);
      }
    }

    fetchStates();
  }, []);

  async function fetchCities(stateId: number) {
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`
      );
      setAllCities(
        response.data.sort((a: CityType, b: CityType) =>
          a.nome.localeCompare(b.nome)
        )
      );
    } catch (erro) {
      console.error("Erro ao buscar cidades:", erro);
    }
  }

  function handleStateChange(event: { target: { value: string } }) {
    const stateId = Number(event.target.value);

    setState(stateId);
    fetchCities(stateId);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    await onSubmit({
      name,
      email,
      phone,
      companyName,
      role:
        allRoles.find(
          (currentRole: { value: string; name: string }) =>
            currentRole.value === role
        )?.name || "",
      truckQuantity:
        allTruckQuantities.find(
          (currentTruckQuantity: { value: string; name: string }) =>
            currentTruckQuantity.value === truckQuantity
        )?.name || "",
      state:
        allStates.find((currentState: StateType) => currentState.id === state)
          ?.sigla || "",
      city:
        allCities.find((currentCity: CityType) => currentCity.id === city)
          ?.nome || "",
    });
    setLoading(false);
  };

  return (
    <div>
      <Box
        className="form-container"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": {
            m: 1,
          },
        }}
      >
        <Grid container sx={{ flexGrow: 1 }} rowSpacing={0} columnSpacing={2}>
          <Grid container size={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid size={12} container>
            <TextField
              sx={{ width: "100%" }}
              required
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid size={6} container>
            <TextField
              sx={{ width: "100%" }}
              required
              id="phone"
              name="phone"
              label="Telefone (com DDD)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid size={6} container>
            <TextField
              sx={{ width: "100%" }}
              required
              id="companyName"
              name="companyName"
              label="Nome da empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
          <Grid size={6} container>
            <FormControl sx={{ width: "100%", margin: "8px" }} required>
              <InputLabel id="role-select-label">Cargo</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                value={role}
                label="Cargo"
                onChange={(e) => setRole(e.target.value)}
              >
                {allRoles.map((role, index) => (
                  <MenuItem
                    key={role.id + index}
                    value={role.value}
                    selected={index === 0}
                  >
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6} container>
            <FormControl sx={{ width: "100%", margin: "8px" }} required>
              <InputLabel id="truck-qty-select-label">
                Quantidade de caminhões
              </InputLabel>
              <Select
                labelId="truck-qty-select-label"
                id="truck-qty-select"
                value={truckQuantity}
                label="Quantidade de caminhões"
                onChange={(e) => setTruckQuantity(e.target.value)}
              >
                {allTruckQuantities.map((quantity, index) => (
                  <MenuItem
                    key={quantity.id + index}
                    value={quantity.value}
                    selected={index === 0}
                  >
                    {quantity.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6} container>
            <FormControl sx={{ width: "100%", margin: "8px" }} required>
              <InputLabel id="state-select-label">Estado</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                value={state.toString()}
                label="Estado"
                onChange={handleStateChange}
              >
                <MenuItem value="">Selecione um estado</MenuItem>
                {allStates.map((currentState) => (
                  <MenuItem
                    key={currentState.sigla + currentState.id}
                    value={currentState.id}
                  >
                    {currentState.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6} container>
            <FormControl sx={{ width: "100%", margin: "8px" }} required>
              <InputLabel id="city-select-label">Cidade</InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                value={city}
                label="Cidade"
                onChange={(e) => setCity(Number(e.target.value))}
              >
                <MenuItem value="">Selecione uma cidade</MenuItem>
                {allCities.map((currentCity) => (
                  <MenuItem key={currentCity.id} value={currentCity.id}>
                    {currentCity.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12} container>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              sx={{
                width: "100%",
                margin: "8px",
              }}
            >
              Agendar demonstração
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Form;
