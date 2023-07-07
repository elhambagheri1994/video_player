import { Navigate } from 'react-router-dom';
import { isAuth } from '@/shared/utils/is-auth';
import { routes } from '../constants/routes';

function PrivateRoute({ children }: { children: any }) {
  return isAuth() ? children : <Navigate to={routes.LOGIN} />;
}
export { PrivateRoute };
