// routes/PrivateRoute.tsx
// import { getToken } from '../utils/token.tsx';
import { useTokenStore } from "../store/auth.store";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  // const token = getToken();

  const { accessToken } = useTokenStore()
  const token = accessToken;
  if (!token) {
    window.location.href = '/login';
  }

  return children;
};

export default PrivateRoute;
