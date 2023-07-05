import { MobileHeader } from './mobile';
import { dimensions } from 'main/config';
import { useWindowDimensions } from 'data/hooks';
import type { FC } from 'react';

export const Header: FC = () => {
  const { width } = useWindowDimensions();

  if (width > dimensions.laptop) return null;

  return <MobileHeader />;
};
