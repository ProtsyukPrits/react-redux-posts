import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <Link className="userLink" to={`/user/${user.id}`}>
        {user.name}
      </Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      <ol>{renderedUsers}</ol>
    </section>
  );
};

export default UsersList;
