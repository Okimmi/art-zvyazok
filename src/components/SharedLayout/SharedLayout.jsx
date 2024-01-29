import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Wrapper } from 'components/Global/Global.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
    </>
  );
};
