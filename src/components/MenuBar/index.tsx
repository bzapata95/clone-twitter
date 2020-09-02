import React from 'react';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificaciones</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensajes</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetear</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Bryan Zapata</strong>
          <span>@bryanczapata</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
