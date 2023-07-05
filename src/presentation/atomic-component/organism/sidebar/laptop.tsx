import { ListItemButton } from '@mui/material';
import { SidebarItems } from 'main/mock';
import { logout } from 'store/auth/slice';
import { paths } from 'main/config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const LaptopSidebar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={'flex flex-col justify-between h-full w-[200px] py-4 pr-2'}>
      <div className={'flex flex-col gap-3'}>
        <div>
          <h1>Nome da Empresa</h1>
        </div>

        {SidebarItems.map((sidebarItem) => (
          <ListItemButton
            key={sidebarItem.link}
            onClick={(): void => {
              navigate(sidebarItem.link);
            }}
          >
            <span className={'text-white flex gap-3'}>
              <sidebarItem.icon />
              {sidebarItem.name}
            </span>
          </ListItemButton>
        ))}
      </div>

      <div>
        <ListItemButton
          onClick={(): void => {
            dispatch(logout());
            navigate(paths.login);
          }}
        >
          <span className={'text-white'}>Sair</span>
        </ListItemButton>
      </div>
    </div>
  );
};
