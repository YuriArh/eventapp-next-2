import { ReactNode } from "react";
// import { Navigate } from 'react-router-dom';
// import { ROUTE_CONSTANTS } from '~shared/config/routes';

type AuthGuardProps = {
  isAuth: boolean;
  children: ReactNode;
};

export function AuthGuard(props: AuthGuardProps) {
  const { isAuth, children } = props;

  // if (isAuth) return <Navigate to={ROUTE_CONSTANTS.HOME} />;

  return <> {children} </>;
}
