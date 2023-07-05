import { Home, Paid, SettingsSuggest } from '@mui/icons-material';
import { paths } from 'main/config';

export const SidebarItems = [
  {
    icon: Home,
    link: paths.dashboard,
    name: 'Dashboard'
  },
  {
    icon: SettingsSuggest,
    link: paths.dashboard,
    name: 'Visão Geral'
  },
  {
    icon: Paid,
    link: paths.dashboard,
    name: 'Finançeiro'
  }
];
