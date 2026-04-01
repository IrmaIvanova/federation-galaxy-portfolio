import React, { ChangeEvent, useCallback, useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import { Section, Grid, Card, Button, Typography, Input, Container } from '@packages/shared/src'
import { useFetch } from '@/hooks/useFetch';
import { useSearch } from '@/hooks/useSearch';
import { Avatar } from '@packages/shared/src/components/ui/Avatar';

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

    const handleSearch = (value: string) => {
        setQuery(value)
    }
    return (

        <Section>
            <Typography variant='h2' children="Список пользователей" />

            <Section>

                <Input
                    type="search"
                    onSearch={handleSearch}
                    placeholder="Найти"
                    leftIcon="/src/assets/svg/Search.svg"
                    debounceMs={500}
                />

            </Section>


            {(loading || searchLoading) && <div> loading ...</div>}
            {(error || searchError) && <div> error:{error || searchError}</div>}

            {!loading && !query && <ul className='flex gap-6 flex-col'>
                {
                    data.map(
                        (user: any) => <Card key={user.id} className="flex gap-6">

                            <Avatar src={user.image} rounded='sm' />
                            <div>
                                <Typography variant='h5'> {user.firstName} {user.lastName} {user.maidenName}</Typography>
                                <Typography variant='small'> {user.birthDate} </Typography>
                            </div>
                            <div>

                            </div>
                        </Card>
                    )
                }
            </ul>}
            {!searchLoading && query && <ul className='flex gap-6 flex-col'>
                {
                    searchData && searchData.map(
                        (user: any) => <Card key={user.id} className="flex gap-6">

                            <Avatar src={user.image} rounded='sm' />
                            <div>
                                <Typography variant='h5'> {user.firstName} {user.lastName} {user.maidenName}</Typography>
                                <Typography variant='small'> {user.birthDate} </Typography>
                            </div>
                            <div>

                            </div>
                        </Card>
                    )
                }
            </ul>}


        </Section>


    )
}

export default UserList;