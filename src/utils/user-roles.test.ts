import { createInvoice } from './user-roles';

describe('createInvoice', () => {
  it('should create invoice if user is an admin', () => {
    expect(
      createInvoice({
        amount: 100,
        date: '2021-01-01',
        id: '1',
        userId: '2',
      })
    ).toStrictEqual({
      amount: 100,
      date: '2021-01-01',
      id: '1',
      status: 'created',
      userId: '2',
    });
  });

  it('should not create invoice if user is not admin', () => {
    expect(
      createInvoice({
        amount: 100,
        date: '2021-01-01',
        id: '1',
        userId: '1',
      })
    ).toBe('Unauthorized');
  });
});
