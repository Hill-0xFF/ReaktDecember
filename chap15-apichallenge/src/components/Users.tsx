import { User } from '@/types/user.type';

type UsersProps = {
  users: User[];
};

export default function Users({ users }: UsersProps) {
  return <div>{users?.[0]?.id ?? users?.[0]}</div>;
}
