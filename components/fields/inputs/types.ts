import { HTMLProps, ReactNode } from 'react';
import { ClassNameProps } from '_types/components';

export interface InputCommonProps {
  error?: string;
  showError?: boolean;
  showErrorMessage?: boolean;
  id: string;
  label?: ReactNode;
  inputClassName?: string;
  setErrorStatus?: (inError: boolean) => void;
}

export interface UseInputClassNamesResult {
  labelClassName: string;
  inputClassName: string;
}

export interface TextInputProps
  extends ClassNameProps,
    InputCommonProps,
    Omit<
      HTMLProps<HTMLInputElement>,
      'onChange' | 'multiple' | 'id' | 'type' | 'label'
    >,
    Pick<HTMLProps<HTMLInputElement>, 'onChange'> {
  max?: number;
  value: string;
}
