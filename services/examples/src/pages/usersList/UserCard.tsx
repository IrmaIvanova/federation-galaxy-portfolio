// src/components/features/users/UserCard.tsx
import React from 'react';
import { Card, Typography,Avatar  } from '@packages/shared/src/index';
import { IUser } from './types';

interface UserCardProps {
  user: IUser;
  variant?: 'default' | 'compact';
  onClick?: (user: IUser) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  variant = 'default',
  onClick,
}) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  if (variant === 'compact') {
    return (
      <Card
        className="flex gap-3 p-3 items-center cursor-pointer hover:shadow-lg transition-all"
        // onClick={() => onClick?.(user)}
      >
        <Avatar src={user.image} rounded="full" size="sm" />
        <div className="flex-1">
          <Typography variant="small" className="font-medium">
            {fullName}
          </Typography>
          <Typography variant="small" className="text-gray-500">
            {user.email}
          </Typography>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="flex gap-6 p-4 cursor-pointer hover:shadow-lg transition-all"
    //   onClick={() => onClick?.(user)}
    >
      <Avatar src={user.image} rounded="sm" />
      <div className="flex-1">
        <Typography variant="h5" className="mb-1">
          {fullName} {user.maidenName && `(${user.maidenName})`}
        </Typography>
        <Typography variant="small" className="text-gray-500 block">
          {user.email} • {user.phone}
        </Typography>
        <Typography variant="small" className="text-gray-400">
           {user.birthDate} • {user.age} лет •  {user.company?.title}
        </Typography>
      </div>
      <div className="text-right">
        <Typography variant="small" className="text-gray-400 capitalize">
          {user.role}
        </Typography>
      </div>
    </Card>
  );
};