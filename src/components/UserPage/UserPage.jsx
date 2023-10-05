import { useSelector } from 'react-redux';

function UserPage() {
  const user = useSelector((store) => store.user);
  
  return (
    <div className="container">
      <p>Welcome, {user.username}! Your ID is: {user.id}</p>
    </div>
  );
}

export default UserPage;
