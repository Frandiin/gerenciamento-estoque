import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { dimensions } from './config';
import { queryClient } from 'infra/lib';
import { useWindowDimensions } from 'data/hooks';
import Router from './routes';
import type { FC } from 'react';

const App: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />

      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        limit={4}
        pauseOnHover
        position={width >= dimensions.laptop ? 'bottom-right' : 'top-right'}
        style={{
          padding: '12px'
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
