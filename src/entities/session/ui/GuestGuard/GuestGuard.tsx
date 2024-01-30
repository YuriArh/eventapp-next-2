import { ReactNode } from "react";
// import { Navigate } from 'react-router-dom';
// import { ROUTE_CONSTANTS } from '~shared/config/routes';

type GuestGuardProps = {
  isAuth: boolean;
  children: ReactNode;
};

export function GuestGuard(props: GuestGuardProps) {
  const { isAuth, children } = props;

  // if (!isAuth) return <Navigate to={ROUTE_CONSTANTS.HOME} />;

  return <> {children} </>;
}
