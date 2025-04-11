// routes/PrivateRoute.tsx
import { getToken } from '../utils/token.tsx';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const token = getToken();

  if (!token) {
    window.location.href = '/login';
  }

  return children;
};

export default PrivateRoute;
