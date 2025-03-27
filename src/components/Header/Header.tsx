import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Button, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import horizontalLogo from "../../../public/logo-motorista-px-horizontal.webp";

import "./Header.scss";

export type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    menu: number
  ) => {
    switch (menu) {
      case 1:
        setAnchorEl1(event.currentTarget);
        break;
      case 2:
        setAnchorEl2(event.currentTarget);
        break;
      case 3:
        setAnchorEl3(event.currentTarget);
        break;
    }
  };

  const handleMenuClose = (menu: number) => {
    switch (menu) {
      case 1:
        setAnchorEl1(null);
        break;
      case 2:
        setAnchorEl2(null);
        break;
      case 3:
        setAnchorEl3(null);
        break;
    }
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
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            justifyContent: "flex-end",
          }}
        >
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
              <MenuItem onClick={() => handleMenuClose(1)}>
                <Link
                  href="https://motoristapx.com.br/marca/"
                  passHref
                  target="_blank"
                >
                  <Button color="inherit">Recursos de marca</Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link
            href="https://motoristapx.com.br/atendimento/"
            passHref
            target="_blank"
          >
            <Button color="inherit">Atendimento</Button>
          </Link>
          <Link
            href="https://motoristapx.com.br/blog/"
            passHref
            target="_blank"
          >
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
              <MenuItem onClick={() => handleMenuClose(2)}>
                <Link
                  href="https://app.motoristapx.com.br/"
                  passHref
                  target="_blank"
                >
                  <Button color="inherit">Sou empresa</Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(2)}>
                <Link
                  href="https://app.motoristapx.com.br/deep-link?_gl=1*4foui3*_gcl_au*OTc2OTUyMjY3LjE3NDI3NzQ3ODQ.*_ga*MTM2MjcwMjg5MC4xNzQyNzc0Nzg0*_ga_6V5VYBW7QT*MTc0MzA4MDE3Ni4xNS4xLjE3NDMwODAzNjEuMjIuMC4w"
                  passHref
                  target="_blank"
                >
                  <Button color="inherit">Sou motorista</Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Button variant="contained" color="primary">
            Agendar demonstração
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
            justifyContent: "flex-end",
          }}
        >
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, 3)}
            size="large"
          >
            <MenuIcon />
          </Button>
          <Menu
            anchorEl={anchorEl3}
            open={Boolean(anchorEl3)}
            onClose={() => handleMenuClose(3)}
          >
            <MenuItem onClick={() => handleMenuClose(3)}>
              <Link
                href="https://motoristapx.com.br/empresas/"
                passHref
                target="_blank"
              >
                <Button color="inherit">Empresas</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>
              <Link
                href="https://motoristapx.com.br/motoristas/"
                passHref
                target="_blank"
              >
                <Button color="inherit">Motoristas</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>
              <Link
                href="https://motoristapx.com.br/sobre-a-px/"
                passHref
                target="_blank"
              >
                <Button color="inherit">Sobre a PX</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>
              <Link
                href="https://motoristapx.com.br/atendimento/"
                passHref
                target="_blank"
              >
                <Button color="inherit">Atendimento</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>
              <Link
                href="https://motoristapx.com.br/blog/"
                passHref
                target="_blank"
              >
                <Button color="inherit">Blog</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>Entrar</MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>
              <Button variant="contained" color="primary">
                Agendar demonstração
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
