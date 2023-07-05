import { Inventory, MonetizationOn, Person } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import type { FC } from 'react';

export const DashboardContent: FC = () => (
  <div className={'flex flex-col '}>
    <div className={'flex tablet:justify-between flex-col tablet:flex-row gap-3'}>
      <div className={'flex-col flex  pl-3 mt-2 min-w-max'}>
        <h1 className={'font-bold tablet:text-[26px] uppercase'}>Dashboard demonstrativo</h1>
        <p className={'text-[15px] font-light'}>Análise dos principais indicadores</p>
      </div>

      <div className={'flex gap-2  w-full tablet:justify-center   '}>
        <ListItemButton sx={{ background: 'white', borderRadius: '16px', maxWidth: '160px' }}>
          <MonetizationOn />
          Vendas
        </ListItemButton>

        <ListItemButton sx={{ background: 'white', borderRadius: '16px', maxWidth: '160px' }}>
          <Inventory />
          Estoque
        </ListItemButton>

        <ListItemButton sx={{ background: 'white', borderRadius: '16px', maxWidth: '160px' }}>
          <Person />
          Clientes
        </ListItemButton>
      </div>
    </div>
  </div>
);
