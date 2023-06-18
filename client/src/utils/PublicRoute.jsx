import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children, isAuth, isPublicOnly }) => {
  return (
    isAuth && isPublicOnly ? <Navigate to={'/'} /> : children
  );
}

export default PublicRoute;