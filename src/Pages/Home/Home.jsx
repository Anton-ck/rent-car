import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Welcome to your personal PhoneBook</div>
      <br />
      <div>
        You can <NavLink to="/register">Register</NavLink> <br />
        or
        <br /> <NavLink to="/login">Log in</NavLink>
      </div>
    </>
  );
};

export default Home;
