import { Menu } from '@mui/material';
import { useEffect, useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import type { Dispatch, FC, MouseEvent, ReactNode, SetStateAction } from 'react';

interface SimpleMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  openElement?: ReactNode;
  side?: 'bottom' | 'left' | 'right' | 'top';
}

export const SimpleMenu: FC<SimpleMenuProps> = ({
  children,
  isOpen,
  setIsOpen,
  side,
  openElement
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    if (setIsOpen) setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isOpen !== undefined) if (!isOpen) setAnchorEl(null);
  }, [isOpen]);

  const getAnchorOrigin = (): {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'center' | 'top';
  } => {
    switch (side) {
      case 'right':
        return { horizontal: 'right', vertical: 'top' };
      case 'left':
        return { horizontal: 'left', vertical: 'top' };
      case 'bottom':
        return { horizontal: 'center', vertical: 'bottom' };
      default:
        return { horizontal: 'center', vertical: 'top' };
    }
  };

  const getTransformOrigin = (): {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'center' | 'top';
  } => {
    switch (side) {
      case 'right':
        return { horizontal: 'left', vertical: 'top' };
      case 'left':
        return { horizontal: 'right', vertical: 'top' };
      case 'bottom':
        return { horizontal: 'center', vertical: 'top' };
      default:
        return { horizontal: 'center', vertical: 'bottom' };
    }
  };

  return (
    <div>
      {openElement ? (
        <div
          className={'flex w-full'}
          onClick={(event): void => {
            handleClick(event);
          }}
        >
          {openElement}
        </div>
      ) : (
        <button
          onClick={(event): void => {
            handleClick(event);
          }}
          type={'button'}
        >
          <MoreHorizOutlinedIcon />
        </button>
      )}

      <Menu
        MenuListProps={{
          'aria-labelledby': 'button',
          sx: {
            backgroundColor: 'transparent',
            padding: '0'
          }
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'white'
          }
        }}
        anchorEl={anchorEl}
        anchorOrigin={getAnchorOrigin()}
        id={'menu'}
        onClose={handleClose}
        open={open}
        transformOrigin={getTransformOrigin()}
      >
        <div>{children}</div>
      </Menu>
    </div>
  );
};
