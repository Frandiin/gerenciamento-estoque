/* eslint-disable unused-imports/no-unused-vars */
import { Outlet } from 'react-router-dom';
import { tokenIsExpired } from 'main/utils';
import { useState } from 'react';
import type { FC } from 'react';
import type { RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  isRedirect?: boolean;
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ isRedirect }) => {
  const [isExpired, setIsExpired] = useState(tokenIsExpired());

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const path = window.location.href.replace(window.location.origin, '');

  // useEffect(() => {
  //   const verify = async (): Promise<void> => {
  //     try {
  //       await refreshAccessToken();
  //       setIsExpired(tokenIsExpired());
  //     } catch {
  //       dispatch(setRedirect({ path }));
  //       navigate(paths.login);
  //     }
  //   };

  //   if (isRedirect) navigate(paths.login);
  //   else if (isExpired) verify();
  // }, [isExpired, navigate, dispatch, path, isRedirect]);

  // return isExpired ? null : <Outlet />;

  return <Outlet />;
};
