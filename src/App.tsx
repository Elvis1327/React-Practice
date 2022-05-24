import React from 'react';
import { UserList } from './components/UsersList';
import { Container, H1, NavLi, NavUl, UsersMainContainer } from './styles/Container.styled';

export function App() {

  return (
    <>
    <Container>
      <H1>
        Page
      </H1>
      <NavUl>
        <NavLi>
          Users
        </NavLi>
        <NavLi>
          Commets
        </NavLi>
      </NavUl>
    </Container>

    <UsersMainContainer>
      <UserList />
    </UsersMainContainer>
    </>
  );
};


