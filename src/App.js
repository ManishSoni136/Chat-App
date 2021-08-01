import React, { lazy, Suspense } from 'react';
import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch } from 'react-router';
import Home from './pages/Home/index';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import { ErrorBoundary } from './components/ErrorBoundary';

const SignIn = lazy(() => import('./pages/SignIn'));

function App() {
  return (
    <ErrorBoundary>
      <ProfileProvider>
        <Switch>
          <PublicRoute path="/signin">
            <Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>
          </PublicRoute>

          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </ProfileProvider>
    </ErrorBoundary>
  );
}

export default App;
