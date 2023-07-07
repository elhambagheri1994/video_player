import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { FavoriteAddress } from './components/favorite-address';
import { Login } from './components/login';
import { UserInfo } from './components/user-info';
import { PrivateRoute } from './shared/config/protected-route';
import { routes } from './shared/constants/routes';

function App() {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route
            path={routes.FAVORITE_ADDRESS}
            element={
              <PrivateRoute>
                <FavoriteAddress />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.USER}
            element={
              <PrivateRoute>
                <UserInfo />
              </PrivateRoute>
            }
          />
          <Route path={routes.DASHBOARD} element={<Dashboard />} />
          <Route path={routes.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
