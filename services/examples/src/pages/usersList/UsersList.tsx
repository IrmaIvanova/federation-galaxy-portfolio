import React, { ChangeEvent, useCallback, useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import { Section, Grid, Card, Button, Typography } from '@packages/shared/src'
import { useFetch } from '@/hooks/useFetch';
import { useSearch } from '@/hooks/useSearch';

const UserList: React.FC = () => {
    const usersUrl = "https://dummyjson.com/users";



    // стабилизируем  Inline-функции через useCallback, чтобы их identity оставалась неизменной между рендерами.
    const getUserSearchUrl = useCallback(
        (q: string) => `${usersUrl}/search?q=${q}`,
        [usersUrl]
    )

    const mapUsers = useCallback(
        (res: any) => res.users,
        []
    )

    const { data, error, loading } = useFetch(usersUrl, mapUsers)


    const { query, error: searchError, loading: searchLoading, setQuery, data: searchData } = useSearch(
        getUserSearchUrl,
        300,
        mapUsers
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    return (

        <Section>
            <Typography variant='h2' children="Список поьзователей" />

            <input type="text" value={query} onChange={handleChange} placeholder="search" />

            {(loading || searchLoading) && <div> loading ...</div>}
            {(error || searchError) && <div> error:{error || searchError}</div>}

            {!loading && !query && <ul>
                {data.map((user: any) => <li key={user.id}>
                    <p> {user.firstName}</p>
                </li>)}
            </ul>}
            {!searchLoading && query && <ul>
                {searchData && searchData.map((user: any) => <li key={user.id}>
                    <p> {user.firstName}</p>
                </li>)}
            </ul>}


        </Section>


    )
}

export default UserList;