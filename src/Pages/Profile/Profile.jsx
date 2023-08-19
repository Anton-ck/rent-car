import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/userSelectors';
import { Link } from 'react-router-dom';
const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Name: {user.name} </p>
      <p>Email: {user.email}</p>
      <p>Avatar:</p>
      <div>
        <img
          src={
            user.avatar.includes('gravatar')
              ? user.avatar
              : `http://localhost:8000/${user.avatar}`
          }
          alt="Avatar"
          width="200"
        />
        <br />
        <Link to={'update'}>Update avatar</Link>
      </div>
    </div>
  );
};

export default Profile;
