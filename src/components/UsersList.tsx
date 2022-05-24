import React from 'react';

import { UsersCards, UsersCard, UsersInformation, UsersSpan } from '../styles/UsersStyles.styled';
import { useFetch } from '../hooks/useFetch';
import { UsersData } from '../interfaces/users';
import { H1 } from '../styles/Container.styled';

export const UserList = () => {

    const { isDataLoading, usersData } = useFetch(`https://jsonplaceholder.typicode.com/users`); 

    console.log(usersData);

    return (
        <>
        <UsersCards>
            {usersData.map((res: UsersData) => (
                <UsersCard key={res.id}>

                    <UsersInformation>
                        <H1 style={{fontSize: '18px'}}>
                            Name:
                        </H1>
                        <UsersSpan>
                            {res.name}
                        </UsersSpan>
                        <H1 style={{fontSize: '18px'}}>
                            Phone number:
                        </H1>
                        <UsersSpan>
                            {res.phone}
                        </UsersSpan>
                    </UsersInformation>

                    <UsersInformation>
                        <H1 style={{fontSize: "18px"}}>
                            Email:
                        </H1>
                        <UsersSpan>
                            {res.email}
                        </UsersSpan>
                        <H1 style={{fontSize: "18px"}}>Website:</H1>
                        <UsersSpan>
                            {res.website}
                        </UsersSpan>
                    </UsersInformation>

                </UsersCard>
            ))}
        </UsersCards>
        </>
    )
}


