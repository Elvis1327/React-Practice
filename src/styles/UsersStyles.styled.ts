import styled from 'styled-components';


export const UsersCards = styled.section`
    width: 100%
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const UsersCard = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 300ms;
    justify-content: space-between;
    &:hover, focus{
        background-color: #9BA3EB;
    } 
    &:focus{
        background: #9BA3EB
    }
`;

export const UsersInformation = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

export const UsersSpan = styled.span`
    font-size: 16px;
`


