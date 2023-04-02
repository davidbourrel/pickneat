import { Dispatch, FormEvent, SetStateAction } from 'react';

export interface CheckoutContextValue {
  // FullName
  fullName: string;
  isFullNameInError: boolean;

  // Phone
  phone: string;
  isPhoneInError: boolean;

  // NameOnCard
  nameOnCard: string;
  isNameOnCardInError: boolean;

  // CardNumber
  cardNumber: string;
  isCardNumberInError: boolean;

  // ExpirationDate
  expirationDate: string;
  isExpirationDateInError: boolean;

  // CVV
  cvv: string;
  isCvvInError: boolean;

  // isValidForm
  isValidForm: boolean;

  // Submit
  isSubmitted: boolean;
}
export interface CheckoutDispatchContextValue {
  // FullName
  setFullName: Dispatch<SetStateAction<string>>;
  setIsFullNameInError: Dispatch<SetStateAction<boolean>>;

  // Phone
  setPhone: Dispatch<SetStateAction<string>>;
  setIsPhoneInError: Dispatch<SetStateAction<boolean>>;

  // NameOnCard
  setNameOnCard: Dispatch<SetStateAction<string>>;
  setIsNameOnCardInError: Dispatch<SetStateAction<boolean>>;

  // CardNumber
  setCardNumber: Dispatch<SetStateAction<string>>;
  setIsCardNumberInError: Dispatch<SetStateAction<boolean>>;

  // ExpirationDate
  setExpirationDate: Dispatch<SetStateAction<string>>;
  setIsExpirationDateInError: Dispatch<SetStateAction<boolean>>;

  // CVV
  setCvv: Dispatch<SetStateAction<string>>;
  setIsCvvInError: Dispatch<SetStateAction<boolean>>;

  // Submit
  handleCheckoutSubmit: (e: FormEvent) => void;
}
