// src/components/features/users/types.ts
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
  };
  company: {
    name: string;
    title: string;
    department: string;
  };
  role: 'admin' | 'moderator' | 'user';
}