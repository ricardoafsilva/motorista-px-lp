import React from "react";

import Image from "next/image";

import "./Header.css";

export type HeaderProps = object

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <nav>
        <div>
          <a href="#">
            <Image
              src="/logo-motorista-px-horizontal.webp"
              alt="Logo horizontal da Motorista PX"
              width={178}
              height={32}
            />
          </a>
        </div>
        <div>
          <a href="#">
            Empresas
          </a>
          <a href="https://motoristapx.com.br/motoristas/" target="_blank">
            Motoristas
          </a>
          <a href="https://ajudantepx.com.br/" target="_blank">
            Ajudantes
          </a>
          {/* <Menu>
            <MenuButton as={Fragment}>
              <a className="text-lg font-semibold text-white mr-8" href="https://motoristapx.com.br/sobre-a-px/" target="_blank">
                Sobre a PX
              </a>
            </MenuButton>
            <MenuItems anchor="bottom">
              <MenuItem>
                <a className="block data-[focus]:bg-blue-100" href="https://motoristapx.com.br/marca/" target="_blank">
                  Recursos de marca
                </a>
              </MenuItem>
            </MenuItems>
          </Menu> */}
          <a href="#">
            Atendimento
          </a>
          <a href="#">
            Blog
          </a>
          {/* <Menu>
            <MenuButton>Entrar</MenuButton>
            <MenuItems anchor="bottom">
              <MenuItem>
                <a href="/settings">
                  Sou empresa
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/settings">
                  Sou motorista
                </a>
              </MenuItem>
            </MenuItems>
          </Menu> */}
          <a
            href="#"
          >
            Agendar demonstração
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
