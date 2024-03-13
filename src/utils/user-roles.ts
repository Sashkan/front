import { InvoiceDTO, User, UserRole } from '../types/user';

const fakeUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@email.com',
  phone: '123-456-7890',
  website: 'https://johndoe.com',
  role: UserRole.USER,
};

const fakeAdmin: User = {
  id: '2',
  name: 'Jane Doe',
  email: 'janedoe@email.com',
  phone: '123-456-7890',
  website: 'https://janedoe.com',
  role: UserRole.ADMIN,
};

// fake user database
const users: User[] = [fakeUser, fakeAdmin];

export function createInvoice(data: InvoiceDTO) {
  // find user role. We'll mock it here
  const user = users.find((user) => user.id === data.userId);

  const newInvoice = {
    ...data,
    status: 'created',
  };

  if (user?.role === UserRole.ADMIN) {
    return newInvoice;
  }

  return 'Unauthorized';
}
