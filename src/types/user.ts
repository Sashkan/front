export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export interface InvoiceDTO {
  id: string;
  amount: number;
  date: string;
  userId: string;
}
