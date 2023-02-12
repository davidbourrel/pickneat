import {
  useMemo,
  useState,
  PropsWithChildren,
  useCallback,
  FormEvent,
} from 'react';
import checkoutContext from './checkout.context';
import { CheckoutContext } from './checkout.types';

const { Provider } = checkoutContext;

type CheckoutProviderProps = PropsWithChildren;

export default function CheckoutProvider({ children }: CheckoutProviderProps) {
  // FullName
  const [fullName, setFullName] = useState('');
  const [isFullNameInError, setIsFullNameInError] = useState(false);
  const isValidFullName = useCallback(
    () => !!fullName && !isFullNameInError,
    [fullName, isFullNameInError]
  );

  // Phone
  const [phone, setPhone] = useState('');
  const [isPhoneInError, setIsPhoneInError] = useState(false);
  const isValidPhone = useCallback(
    () => !!phone && !isPhoneInError,
    [phone, isPhoneInError]
  );

  // NameOnCard
  const [nameOnCard, setNameOnCard] = useState('');
  const [isNameOnCardInError, setIsNameOnCardInError] = useState(false);
  const isValidNameOnCard = useCallback(
    () => !!nameOnCard && !isNameOnCardInError,
    [nameOnCard, isNameOnCardInError]
  );

  // CardNumber
  const [cardNumber, setCardNumber] = useState('');
  const [isCardNumberInError, setIsCardNumberInError] = useState(false);
  const isValidCardNumber = useCallback(
    () => !!cardNumber && !isCardNumberInError,
    [cardNumber, isCardNumberInError]
  );

  // ExpirationDate
  const [expirationDate, setExpirationDate] = useState('');
  const [isExpirationDateInError, setIsExpirationDateInError] = useState(false);
  const isValidExpirationDate = useCallback(
    () => !!expirationDate && !isExpirationDateInError,
    [expirationDate, isExpirationDateInError]
  );

  // CVV
  const [cvv, setCvv] = useState('');
  const [isCvvInError, setIsCvvInError] = useState(false);
  const isValidCvv = useCallback(
    () => !!cvv && !isCvvInError,
    [cvv, isCvvInError]
  );

  const isValidForm = useMemo(() => {
    return (
      isValidFullName() &&
      isValidPhone() &&
      isValidNameOnCard() &&
      isValidCardNumber() &&
      isValidExpirationDate() &&
      isValidCvv()
    );
  }, [
    isValidFullName,
    isValidPhone,
    isValidNameOnCard,
    isValidCardNumber,
    isValidExpirationDate,
    isValidCvv,
  ]);

  // Submit
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (isValidForm) {
        setIsSubmitted(true);
      }
    },
    [isValidForm]
  );

  const contextValue: CheckoutContext = useMemo(
    () => ({
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
      handleSubmit,
    }),
    [
      fullName,
      isFullNameInError,
      phone,
      isPhoneInError,
      nameOnCard,
      isNameOnCardInError,
      cardNumber,
      isCardNumberInError,
      expirationDate,
      isExpirationDateInError,
      cvv,
      isCvvInError,
      isValidForm,
      isSubmitted,
      handleSubmit,
    ]
  );

  return <Provider value={contextValue}>{children}</Provider>;
}
