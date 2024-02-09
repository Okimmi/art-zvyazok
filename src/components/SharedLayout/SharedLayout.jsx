import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Wrapper } from 'components/Global/Global.styled';
import { useSelector } from 'react-redux';
import { selectIsAuthLoading } from 'Redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  const isAuthLoading = useSelector(selectIsAuthLoading);

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
      {isAuthLoading && <Loader />}
    </>
  );
};
