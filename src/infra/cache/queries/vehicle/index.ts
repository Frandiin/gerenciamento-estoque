/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFindQuery } from 'infra/cache/queries/default-query';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindVehicleQuery = ({ ...props }: useFindQueryProps): UseQueryResult<any> =>
  useFindQuery<any>({ ...props, route: 'vehicle' });

export const useFindOneVehicleQuery = ({ ...props }: useFindQueryProps): UseQueryResult<any> =>
  useFindQuery<any>({ ...props, route: 'vehicle' });
