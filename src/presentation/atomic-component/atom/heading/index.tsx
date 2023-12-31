import Divider from '@mui/material/Divider';
import type { FC, ReactNode } from 'react';

interface HeadingProps {
  title: ReactNode | string;
  startElement?: ReactNode;
  endElement?: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ title, startElement, endElement }) => (
  <div className={'flex justify-around items-center gap-2'}>
    {startElement || null}

    {typeof title === 'string' ? (
      <h2 className={'uppercase z-10 font-semibold text-lg text-gray-700 min-w-max'}>{title}</h2>
    ) : (
      <div>{title}</div>
    )}

    <span className={'w-full'}>
      <Divider
        className={'bg-gray-700 border-0 p-[1px] rounded-md'}
        sx={{
          border: '0'
        }}
      />
    </span>

    {endElement || null}
  </div>
);
