import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Bryan Zapata</h1>
        <h2>@bryanczapata</h2>

        <p>
          Developer at <a href="https://idbi.pe">@idbi</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Lima, Perú
          </li>
          <li>
            <CakeIcon />
            Nacido(a) en 13 de abril de 1995
          </li>
        </ul>

        <Followage>
          <span>
            siguiendo <strong>94</strong>
          </span>

          <span>
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
