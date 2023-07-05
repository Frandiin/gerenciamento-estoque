/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';
import type { TextFieldProps } from '@mui/material';

type MonetaryInputProps = Pick<TextFieldProps, 'error' | 'onBlur' | 'onFocus'> & {
  onChange?: (event: { formattedValue: string; value: string; floatValue?: number }) => void;
  defaultValue?: string;
};

export const MonetaryInput: FC<MonetaryInputProps> = ({ onChange, defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement> | any): void => {
    event.preventDefault();

    let newValue = event.target.value.replace(/\D/gu, '');

    if (newValue.length === 0) {
      setValue('');
      return;
    }
    if (newValue.length <= 10) newValue = String(Number(newValue));

    setValue(`${newValue.slice(0, -2)},${newValue.slice(-2)}`);

    if (onChange)
      onChange({
        floatValue: Number(`${newValue.slice(0, -2)}.${newValue.slice(-2)}`),
        formattedValue: `R$ ${newValue.slice(0, -2)},${newValue.slice(-2)}`,
        value: `R$ ${newValue.slice(0, -2)},${newValue.slice(-2)}`
      });
  };

  return (
    <NumericFormat
      {...props}
      allowNegative={false}
      customInput={Input}
      decimalScale={6}
      decimalSeparator={','}
      id={'monetary-input'}
      onChange={handleChange}
      prefix={'R$ '}
      thousandSeparator={'.'}
      value={value}
    />
  );
};
