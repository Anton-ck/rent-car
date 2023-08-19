import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operationsWithUser';

import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';

import SharedLayot from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../Pages/Home/Home'));
const PhoneBook = lazy(() => import('../Pages/PhoneBook/PhoneBook'));
const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const UpdateAvatar = lazy(() => import('../Pages/UpdateAvatar/UpdateAvatar'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayot />}>
        <Route index element={<Home />} />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />

        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
          }
        ></Route>

        <Route
          path="profile"
          element={<PrivateRoute redirectTo="/login" component={<Profile />} />}
        ></Route>
        <Route
          path="profile/update"
          element={
            <PrivateRoute redirectTo="/login" component={<UpdateAvatar />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
