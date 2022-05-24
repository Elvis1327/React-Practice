import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    padding: 0px 40px;
    background-color: #212529;
    color: #fff;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const H1 = styled.h1`
    font-size: 25px;
`;

export const NavUl = styled.ul`
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    gap: 5px;
    list-style: none;
`;

export const NavLi = styled.li`
   margin: 0px;
   padding: 10px;
   font-size: 18px;
   cursor: pointer;
   transition: all 300ms;
   border-radius: 10px;
   &:hover {
       padding: 10px;
       background-color: #9BA3EB;
   }
`;

export const UsersMainContainer = styled.section`
   width: 100%;
   padding: 30px;
`






