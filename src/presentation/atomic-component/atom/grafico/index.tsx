import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import type { FC } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

interface GraficoProps {
  type: 'bar' | 'line';
  datasets: {
    backgroundColor: string;
    data: number[];
    label: string;
    borderColor: string;
  }[];
}

export const Grafico: FC<GraficoProps> = ({ datasets, type }) => (
  <Chart
    data={{
      datasets,

      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ]
    }}
    options={{
      plugins: {
        legend: {
          position: 'top' as const
        }
      }
    }}
    type={type}
  />
);
