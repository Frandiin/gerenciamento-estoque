import { Input } from '@mui/material';
import { MonetaryInput } from './monetary';
import { NumericFormat } from 'react-number-format';
import type { TextFieldProps } from '@mui/material';
import type { UseFormRegisterReturn } from 'react-hook-form';

import type { FC } from 'react';

type NumericInputProps = Pick<TextFieldProps, 'error' | 'onBlur' | 'onFocus' | 'placeholder'> & {
  type?: 'monetary' | 'percentage' | 'time';
  register?: UseFormRegisterReturn;
  onChange?: (event: { formattedValue: string; value: string; floatValue?: number }) => void;
  defaultValue?: string;
  suffix?: string;
  prefix?: string;
  value?: string;
};

export const NumericInput: FC<NumericInputProps> = ({ type, onChange, ...props }) => {
  if (type === 'monetary') return <MonetaryInput {...props} onChange={onChange} />;

  const getSuffix = (): string | undefined => {
    if (type === 'percentage') return ' %';
    if (type === 'time') return ' horas';
    return props.suffix;
  };

  return (
    <NumericFormat
      {...props}
      customInput={Input}
      decimalScale={2}
      decimalSeparator={','}
      onValueChange={onChange}
      suffix={getSuffix()}
      thousandSeparator={'.'}
    />
  );
};
