import { Routes, Route, Navigate } from 'react-router-dom';
import { EnterPage } from 'pages/EnterPage/EnterPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ChatPage } from 'pages/ChatPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../Redux/auth/operations';
import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
import { UserPage } from 'pages/UserPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute redirectTo="/login" component={<MainPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/main" component={<EnterPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute redirectTo="/login" component={<ChatPage />} />
            }
          />
          <Route
            path="/chat/:id"
            element={
              <PrivateRoute redirectTo="/login" component={<ChatPage />} />
            }
          />
          <Route
            path="/main"
            element={
              <PrivateRoute redirectTo="/login" component={<MainPage />} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
