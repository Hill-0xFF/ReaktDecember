import { TUser } from '@/types/user.type';

import User from './User';

type UsersProps = {
  users: TUser[];
};

export default function Users({ users }: UsersProps) {
  return (
    <section>
      {users?.[0]?.id ? (
        <User users={users} />
      ) : (
        // <p style={{ backgroundColor: 'papayawhip', color: 'black' }}>
        //   No users on the list!
        // </p>
        ''
      )}
    </section>
  );
}
