import { ReactNode } from 'react';

export interface InputCommonProps {
  error?: string;
  showError?: boolean;
  showErrorMessage?: boolean;
  id: string;
  label?: ReactNode;
  inputClassName?: string;
  setErrorStatus?: (inError: boolean) => void;
}