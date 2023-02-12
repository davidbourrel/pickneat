import { Dispatch, FormEvent, SetStateAction } from 'react';

export interface CheckoutContext {
  // FullName
  fullName: string;
  setFullName: Dispatch<SetStateAction<string>>;
  isFullNameInError: boolean;
  setIsFullNameInError: Dispatch<SetStateAction<boolean>>;

  // Phone
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  isPhoneInError: boolean;
  setIsPhoneInError: Dispatch<SetStateAction<boolean>>;

  // NameOnCard
  nameOnCard: string;
  setNameOnCard: Dispatch<SetStateAction<string>>;
  isNameOnCardInError: boolean;
  setIsNameOnCardInError: Dispatch<SetStateAction<boolean>>;

  // CardNumber
  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<string>>;
  isCardNumberInError: boolean;
  setIsCardNumberInError: Dispatch<SetStateAction<boolean>>;

  // ExpirationDate
  expirationDate: string;
  setExpirationDate: Dispatch<SetStateAction<string>>;
  isExpirationDateInError: boolean;
  setIsExpirationDateInError: Dispatch<SetStateAction<boolean>>;

  // CVV
  cvv: string;
  setCvv: Dispatch<SetStateAction<string>>;
  isCvvInError: boolean;
  setIsCvvInError: Dispatch<SetStateAction<boolean>>;

  // isValidForm
  isValidForm: boolean;

  // Submit
  isSubmitted: boolean;
  handleSubmit: (e: FormEvent) => void;
}
