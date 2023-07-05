import { LoginForm } from 'presentation/atomic-component/molecule/form';
import { Paper } from '@mui/material';
import type { FC } from 'react';

export const AuthContent: FC = () => (
  <Paper
    className={
      'flex flex-col relative justify-center items-center p-5 pt-10 gap-3 w-[90%] h-min overflow-auto laptop:max-w-[450px]'
    }
  >
    <LoginForm />
  </Paper>
);
