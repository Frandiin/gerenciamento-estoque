import { ListItemButton } from '@mui/material';
import { ToggleMenu } from 'presentation/atomic-component/atom';
import { paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const MobileHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className={
        'flex sticky z-50 top-0 bg-white gap-5 justify-around items-center p-4 w-full border-b-2 border-gray-100 h-[80px]'
      }
    >
      <ListItemButton
        onClick={(): void => {
          navigate(paths.dashboard);
        }}
      >
        Logo do site
      </ListItemButton>

      <ToggleMenu />
    </div>
  );
};
