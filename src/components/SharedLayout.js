import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
