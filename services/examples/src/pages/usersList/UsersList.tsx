import React, { ChangeEvent, useCallback, useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import { Section, Grid, Card, Button, Typography, Input, Container, ListHeader, List, useListData } from '@packages/shared/src'
import { useFetch } from '@/hooks/useFetch';
import { useSearch } from '@/hooks/useSearch';
import { Avatar } from '@packages/shared/src/components/ui/Avatar';
import { IUser } from './types';
import { UserCard } from './UserCard';
const USERS_URL = 'https://dummyjson.com/users';

const mapUsers = (response: any): IUser[] => {
    return response.users.map((user: any) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        maidenName: user.maidenName,
        age: user.age,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        birthDate: user.birthDate,
        image: user.image,
        address: {
            address: user.address.address,
            city: user.address.city,
            state: user.address.state,
            country: user.address.country,
        },
        company: {
            name: user.company.name,
            title: user.company.title,
            department: user.company.department,
        },
        role: user.role,
    }));
};

export const UserList: React.FC = () => {

      const searchUrlBuilder = useCallback(
    (q: string) => `${USERS_URL}/search?q=${encodeURIComponent(q)}`,
    []
  );

  const { data, loading, error, query, handleSearch } = useListData<IUser>({
    fetchUrl: USERS_URL,
    searchUrlBuilder,
    mapData: mapUsers,
    debounceMs: 500,
  });

   const renderUserCard = useCallback(
    (user: IUser) => <UserCard user={user} variant="default" />,
    []
  );

    return (

        <Section>
            <Typography variant='h2' children="Список пользователей" />

            <ListHeader
                onSearch={handleSearch}
                debounceMs={500}
                placeholder="Найти пользователя..."
            />
            <List
                title="Список пользователей"
                data={data}
                renderItem={renderUserCard}
                loading={loading}
                error={error}
                query={query}
                onSearch={handleSearch}
                searchPlaceholder="Найти пользователя..."
            />
        </Section>
    )
}
