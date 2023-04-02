import { useState, PropsWithChildren, FormEvent } from 'react';
import { CheckoutContext, CheckoutDispatchContext } from './context';

export const CheckoutProvider = ({ children }: PropsWithChildren) => {
  // FullName
  const [fullName, setFullName] = useState('');
  const [isFullNameInError, setIsFullNameInError] = useState(false);
  const isValidFullName = !!fullName && !isFullNameInError;

  // Phone
  const [phone, setPhone] = useState('');
  const [isPhoneInError, setIsPhoneInError] = useState(false);
  const isValidPhone = !!phone && !isPhoneInError;

  // NameOnCard
  const [nameOnCard, setNameOnCard] = useState('');
  const [isNameOnCardInError, setIsNameOnCardInError] = useState(false);
  const isValidNameOnCard = !!nameOnCard && !isNameOnCardInError;

  // CardNumber
  const [cardNumber, setCardNumber] = useState('');
  const [isCardNumberInError, setIsCardNumberInError] = useState(false);
  const isValidCardNumber = !!cardNumber && !isCardNumberInError;

  // ExpirationDate
  const [expirationDate, setExpirationDate] = useState('');
  const [isExpirationDateInError, setIsExpirationDateInError] = useState(false);
  const isValidExpirationDate = !!expirationDate && !isExpirationDateInError;

  // CVV
  const [cvv, setCvv] = useState('');
  const [isCvvInError, setIsCvvInError] = useState(false);
  const isValidCvv = !!cvv && !isCvvInError;

  const isValidForm =
    isValidFullName &&
    isValidPhone &&
    isValidNameOnCard &&
    isValidCardNumber &&
    isValidExpirationDate &&
    isValidCvv;

  // Submit
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValidForm) {
      setIsSubmitted(true);
    }
  };

  const contextValue = {
    // FullName
    fullName,
    isFullNameInError,

    // Phone
    phone,
    isPhoneInError,

    // NameOnCard
    nameOnCard,
    isNameOnCardInError,

    // CardNumber
    cardNumber,
    isCardNumberInError,

    // ExpirationDate
    expirationDate,
    isExpirationDateInError,

    // CVV
    cvv,
    isCvvInError,

    // isValidForm
    isValidForm,

    // Submit
    isSubmitted,
  };

  const DispatchContextValue = {
    // FullName
    setFullName,
    setIsFullNameInError,

    // Phone
    setPhone,
    setIsPhoneInError,

    // NameOnCard
    setNameOnCard,
    setIsNameOnCardInError,

    // CardNumber
    setCardNumber,
    setIsCardNumberInError,

    // ExpirationDate
    setExpirationDate,
    setIsExpirationDateInError,

    // CVV
    setCvv,
    setIsCvvInError,

    // Submit
    handleCheckoutSubmit,
  };

  return (
    <CheckoutContext.Provider value={contextValue}>
      <CheckoutDispatchContext.Provider value={DispatchContextValue}>
        {children}
      </CheckoutDispatchContext.Provider>
    </CheckoutContext.Provider>
  );
};
