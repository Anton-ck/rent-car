import SharedLayot from './SharedLayout/SharedLayout';
import Home from '../Pages/Home/Home';
import PhoneBook from '../Pages/PhoneBook/PhoneBook';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';

import { fetchContacts } from 'redux/contacts/operations';
import { refreshUser } from 'redux/auth/operationsWithUser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayot />}>
        <Route index element={<Home />} />
        <Route path="phonebook" element={<PhoneBook />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
