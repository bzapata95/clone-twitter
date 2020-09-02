import React from 'react';
import SickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar en Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <SickyBox>
        <Body>
          <List
            title="Talvéz conozcas"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaemgl"
              />,
            ]}
          />
          <List
            title="Talvéz conozcas"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Talvéz conozcas"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvéz conozcas"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvéz conozcas"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </SickyBox>
    </Container>
  );
};

export default SideBar;
