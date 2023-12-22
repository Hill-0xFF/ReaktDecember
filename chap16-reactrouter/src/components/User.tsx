import { TUser } from '@/types/user.type';

type UserProps = {
  users: TUser[];
};

export default function User({ users }: UserProps) {
  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id} className="item">
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.address?.street}</p>
          <p>{user.address?.suite}</p>
          <p>{user.address?.city}</p>
          <p>{user.address?.zipcode}</p>
          <p>{user.address?.geo?.lat}</p>
          <p>{user.address?.geo?.lng}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company?.bs}</p>
          <p>{user.company?.catchPhrase}</p>
          <p>{user.company?.name}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
 */
