import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

export const AuthTemplate: FC = () => (
  <div
    className={'flex flex-col w-full h-screen justify-center items-center overflow-hidden '}
    style={{
      backgroundImage: 'url(/fundo.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <Outlet />
  </div>
);
