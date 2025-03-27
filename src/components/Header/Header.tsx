import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import horizontalLogo from "../../../public/logo-motorista-px-horizontal.webp";

import "./Header.scss";

export type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    menu: number
  ) => {
    return menu === 1
      ? setAnchorEl1(event.currentTarget)
      : setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose = (menu: number) => {
    return menu === 1 ? setAnchorEl1(null) : setAnchorEl2(null);
  };

  return (
    <AppBar position="static" className="header-container">
      <Toolbar>
        <Image
          src={horizontalLogo}
          alt="Logo"
          width={178}
          height={32}
          className="header-logo"
        />
        <Link
          href="https://motoristapx.com.br/empresas/"
          passHref
          target="_blank"
        >
          <Button color="inherit">Empresas</Button>
        </Link>
        <Link
          href="https://motoristapx.com.br/motoristas/"
          passHref
          target="_blank"
        >
          <Button color="inherit">Motoristas</Button>
        </Link>
        <Link href="https://ajudantepx.com.br/" passHref target="_blank">
          <Button color="inherit">Ajudantes</Button>
        </Link>
        <Box>
          <Button color="inherit" onClick={(e) => handleMenuOpen(e, 1)}>
            Sobre a PX <KeyboardArrowDownIcon />
          </Button>
          <Menu
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={() => handleMenuClose(1)}
          >
            <MenuItem onClick={() => handleMenuClose(1)}>Recursos de marca</MenuItem>
          </Menu>
        </Box>
        <Link href="https://motoristapx.com.br/atendimento/" passHref target="_blank">
          <Button color="inherit">Atendimento</Button>
        </Link>
        <Link href="https://motoristapx.com.br/blog/" passHref target="_blank">
          <Button color="inherit">Blog</Button>
        </Link>
        <Box>
          <Button color="inherit" onClick={(e) => handleMenuOpen(e, 2)}>
            Entrar <KeyboardArrowDownIcon />
          </Button>
          <Menu
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => handleMenuClose(2)}
          >
            <MenuItem onClick={() => handleMenuClose(2)}>Sou empresa</MenuItem>
            <MenuItem onClick={() => handleMenuClose(2)}>Sou motorista</MenuItem>
          </Menu>
        </Box>
        <Button variant="contained" color="primary">
          Agendar demonstração
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
