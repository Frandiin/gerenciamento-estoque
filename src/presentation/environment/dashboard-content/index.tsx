import { Button, ListItemButton } from '@mui/material';
import { Grafico } from 'presentation/atomic-component/atom/grafico';
import { Inventory, MonetizationOn, Person } from '@mui/icons-material';

import { type FC, useState } from 'react';

export const DashboardContent: FC = () => {
  const year2020 = [
    {
      backgroundColor: '#00008fc4',
      borderColor: 'black',
      data: [2, 4, 6, 8, 20, 45],
      label: 'Lucros'
    },
    {
      backgroundColor: '#00ff00c3',
      borderColor: 'black',
      data: [2, 4, 6, 8, 20, 45],
      label: 'Estoque'
    },
    {
      backgroundColor: '#ff0000c3',
      borderColor: 'black',
      data: [2, 4, 6, 8, 20, 45],
      label: 'Clientes'
    }
  ];
  const year2021 = [
    {
      backgroundColor: '#725362',
      borderColor: 'black',
      data: [54, 23, 31, 22],
      label: 'Lucros'
    },
    {
      backgroundColor: '#827342',
      borderColor: 'black',
      data: [12, 24, 36, 28, 20, 45],
      label: 'Estoque'
    },
    {
      backgroundColor: '#ff0000c3',
      borderColor: 'black',
      data: [12, 42, 63, 82, 20, 45],
      label: 'Clientes'
    }
  ];
  const [selectedYear, setSelectedYear] = useState(year2020);

  return (
    <div className={'flex flex-col overflow-auto '}>
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

          <ListItemButton sx={{ background: 'white', borderRadius: '16px', maxWidth: '160px' }}>
            <Person />
            Clientes
          </ListItemButton>
        </div>
      </div>

      <div className={'flex flex-col gap-4 bg-secondary p-5 mt-5 tablet:grid tablet:grid-cols-4 '}>
        <div className={'col-span-4 ml-8 bg-white p-6 flex flex-col gap-4'}>
          <h1 className={'text-center uppercase'}>Grafico Geral</h1>
          <Grafico datasets={selectedYear} type={'bar'} />

          <div className={'flex justify-center gap-5'}>
            <Button
              onClick={(): void => {
                setSelectedYear(year2020);
              }}
            >
              2020
            </Button>

            <Button
              onClick={(): void => {
                setSelectedYear(year2021);
              }}
            >
              2021
            </Button>
          </div>
        </div>

        <div className={'col-span-2 ml-8  bg-white rounded-md '}>
          <h1>Graficos de Estoque</h1>

          <Grafico
            datasets={[
              {
                backgroundColor: '#dcdcdcc3',
                borderColor: 'blue',
                data: [5, 8, -3, 4],
                label: 'Estoque'
              }
            ]}
            type={'line'}
          />
        </div>

        <div className={'col-span-2 ml-8  bg-white rounded-md '}>
          <h1>Grafico de Clientes</h1>
        </div>

        <div className={'col-span-2 ml-8 bg-white rounded-md '} />
      </div>
    </div>
  );
};
