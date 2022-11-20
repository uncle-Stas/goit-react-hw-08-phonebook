import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperation, authSelectors } from 'Redux/auth';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Appbar from 'components/Appbar/Appbar';
import PrivatRoute from 'pages/PrivatRoute/PrivatRoute';
import PublicRoute from 'pages/PublicRoute/PublicRoute';

const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

function App() {
  const dispatch = useDispatch();
  const isLoadingCurrenUser = useSelector(
    authSelectors.selectIsLoadingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperation.current());
  }, [dispatch]);

  if (isLoadingCurrenUser) {
    return (
      <SkeletonTheme highlightColor="#000000">
        <Skeleton />
      </SkeletonTheme>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route element={<PublicRoute />}>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
          <Route element={<PrivatRoute />}>
            <Route path="phonebook" element={<PhonebookPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
