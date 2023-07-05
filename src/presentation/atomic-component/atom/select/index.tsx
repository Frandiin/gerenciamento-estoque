/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Autocomplete, Chip, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import type { Dispatch, FC, ReactNode, RefCallback, SetStateAction } from 'react';
import type { Noop } from 'react-hook-form';
import type { OverridableComponent } from '@mui/types';
import type { SvgIconTypeMap, TextFieldProps } from '@mui/material';

export interface Values {
  label: number | string;
  value: number | string;
}

type SelectProps = TextFieldProps & {
  isMultiple?: boolean;
  options: Values[];
  valueInput?: Values | Values[] | null;
  setValue?: Dispatch<SetStateAction<Values | Values[]>>;
  field?: {
    name?: string;
    onBlur?: Noop;
    onChange: any;
    value?: (number | undefined)[] | (string | undefined)[] | number | string;
  };
  change?: (value: Values | Values[] | undefined) => void;
  changeValue?: (event: { target: { value: string } }) => void;
  reference?: RefCallback<HTMLInputElement>;
  defaultValue?: Values | Values[];
  StartIcon?: OverridableComponent<SvgIconTypeMap>;
  isHideClearButton?: boolean;
  isLoading?: boolean;
  renderOptions?: ReactNode;
  onClear?: () => void;
  onSearch?: (value: string) => void;
};

interface OptionProps {
  label: string;
}

const defaultFunction = (): null => null;

export const Select: FC<SelectProps> = ({
  isMultiple,
  options,
  field,
  change,
  reference,
  setValue,
  changeValue,
  StartIcon,
  valueInput,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Autocomplete
      clearOnEscape
      clearText={'Limpar'}
      closeText={'Fechar'}
      defaultValue={props.defaultValue}
      disableClearable={props.isHideClearButton}
      disableCloseOnSelect={isMultiple}
      fullWidth
      isOptionEqualToValue={(option: Values, value: Values): boolean =>
        option?.value === value?.value
      }
      loading={props.isLoading}
      loadingText={'Carregando...'}
      multiple={isMultiple}
      noOptionsText={'Nenhum dado encontrado'}
      onChange={(event, data): void => {
        if (isMultiple) {
          const customData = data as Values[];

          if (change)
            if (customData) change(customData.map((item) => item));
            else change(undefined);
          if (setValue) setValue(customData);
        } else {
          const customData = data as Values;

          if (change)
            if (customData?.value) change(customData);
            else change(undefined);
          if (setValue) setValue(customData);
        }

        if (data === null && props.onClear) props.onClear();
      }}
      onChangeCapture={(event: any): void => {
        if (props.onSearch) props.onSearch((event.target?.value as string) ?? '');
      }}
      onClose={(): void => setOpen(false)}
      onOpen={(): void => setOpen(true)}
      open={open}
      openText={'Abrir'}
      options={options}
      renderInput={({ InputProps, ...params }): ReactNode => {
        const { startAdornment, ...rest } = InputProps as any;

        return (
          <>
            <TextField
              InputProps={{
                ...rest,
                startAdornment: StartIcon ? (
                  <div
                    className={`${
                      startAdornment?.props?.children.length >= 1 && open
                        ? 'grid grid-cols-[2rem_95%] w-[80%]'
                        : ''
                    }`}
                  >
                    <InputAdornment
                      position={'start'}
                      style={{
                        marginTop:
                          startAdornment?.props?.children.length >= 1 && open ? '12px' : '',
                        paddingLeft: '0.3rem'
                      }}
                    >
                      <StartIcon />
                    </InputAdornment>

                    {open ? (
                      <p className={'flex w-full truncate max-w-[100%] gap-2'}>
                        {startAdornment?.props?.children
                          ?.map((item: any) => (
                            <span
                              key={item.key}
                              className={'bg-primary rounded-full p-1 px-2 text-xs font-bold'}
                            >
                              {item.key}
                            </span>
                          ))
                          .reverse()}
                      </p>
                    ) : (
                      <div
                        className={'w-full h-[30px] top-0 left-0 absolute'}
                        onClick={(): void => setOpen(true)}
                      />
                    )}
                  </div>
                ) : (
                  <div
                    className={`${
                      startAdornment?.props?.children.length >= 1 && open
                        ? 'grid grid-cols-[95%] w-[80%]'
                        : ''
                    }`}
                  >
                    {open ? (
                      <p className={'flex w-full truncate max-w-[100%] gap-2'}>
                        {startAdornment?.props?.children
                          ?.map((item: any) => (
                            <span
                              key={item.key}
                              className={'bg-primary rounded-full p-1 px-2 text-xs font-bold'}
                            >
                              {item.key}
                            </span>
                          ))
                          .reverse()}
                      </p>
                    ) : (
                      <div
                        className={'w-full h-[30px] top-0 left-0 absolute'}
                        onClick={(): void => setOpen(true)}
                      />
                    )}
                  </div>
                )
              }}
              {...params}
              {...props}
              {...field}
              inputRef={reference}
              onChange={changeValue || defaultFunction}
              onClick={(): void => setOpen(true)}
              placeholder={
                startAdornment?.props?.children.length >= 1 && open ? undefined : props?.placeholder
              }
            />

            <TextField InputProps={{ startAdornment }} color={'isSelect'} />
          </>
        );
      }}
      renderOption={(renderProps, option: Values, state): ReactNode => (
        <li
          {...renderProps}
          style={{
            backgroundColor: state.selected ? '#ffc10745' : ''
          }}
        >
          {option.label}
        </li>
      )}
      renderTags={(params, getTagProps): ReactNode => (
        <div className={'max-h-[90px] overflow-auto'}>
          {params.map((option, index) => {
            const customOption = option as OptionProps;

            return (
              <Chip
                deleteIcon={<CloseIcon />}
                {...getTagProps({ index })}
                key={customOption.label}
                label={customOption.label}
              />
            );
          })}
        </div>
      )}
      value={valueInput}
    />
  );
};
