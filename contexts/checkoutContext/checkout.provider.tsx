import { useState, PropsWithChildren, FormEvent } from 'react';
import checkoutContext from './checkout.context';
import { CheckoutContext } from './checkout.types';

const { Provider } = checkoutContext;

type CheckoutProviderProps = PropsWithChildren;

export default function CheckoutProvider({ children }: CheckoutProviderProps) {
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

  const contextValue: CheckoutContext = {
    // FullName
    fullName,
    setFullName,
    isFullNameInError,
    setIsFullNameInError,

    // Phone
    phone,
    setPhone,
    isPhoneInError,
    setIsPhoneInError,

    // NameOnCard
    nameOnCard,
    setNameOnCard,
    isNameOnCardInError,
    setIsNameOnCardInError,

    // CardNumber
    cardNumber,
    setCardNumber,
    isCardNumberInError,
    setIsCardNumberInError,

    // ExpirationDate
    expirationDate,
    setExpirationDate,
    isExpirationDateInError,
    setIsExpirationDateInError,

    // CVV
    cvv,
    setCvv,
    isCvvInError,
    setIsCvvInError,

    // isValidForm
    isValidForm,

    // Submit
    isSubmitted,
    handleCheckoutSubmit,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}
