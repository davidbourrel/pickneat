import { CheckoutContext } from './checkout.types';

export const INITIAL_CHECKOUT_CONTEXT: CheckoutContext = {
  // FullName
  fullName: null as unknown as CheckoutContext['fullName'],
  setFullName: null as unknown as CheckoutContext['setFullName'],
  isFullNameInError: null as unknown as CheckoutContext['isFullNameInError'],
  setIsFullNameInError:
    null as unknown as CheckoutContext['setIsFullNameInError'],

  // Phone
  phone: null as unknown as CheckoutContext['phone'],
  setPhone: null as unknown as CheckoutContext['setPhone'],
  isPhoneInError: null as unknown as CheckoutContext['isPhoneInError'],
  setIsPhoneInError: null as unknown as CheckoutContext['setIsPhoneInError'],

  // NameOnCard
  nameOnCard: null as unknown as CheckoutContext['nameOnCard'],
  setNameOnCard: null as unknown as CheckoutContext['setNameOnCard'],
  isNameOnCardInError:
    null as unknown as CheckoutContext['isNameOnCardInError'],
  setIsNameOnCardInError:
    null as unknown as CheckoutContext['setIsNameOnCardInError'],

  // CardNumber
  cardNumber: null as unknown as CheckoutContext['cardNumber'],
  setCardNumber: null as unknown as CheckoutContext['setCardNumber'],
  isCardNumberInError:
    null as unknown as CheckoutContext['isCardNumberInError'],
  setIsCardNumberInError:
    null as unknown as CheckoutContext['setIsCardNumberInError'],

  // ExpirationDate
  expirationDate: null as unknown as CheckoutContext['expirationDate'],
  setExpirationDate: null as unknown as CheckoutContext['setExpirationDate'],
  isExpirationDateInError:
    null as unknown as CheckoutContext['isExpirationDateInError'],
  setIsExpirationDateInError:
    null as unknown as CheckoutContext['setIsExpirationDateInError'],

  // CVV
  cvv: null as unknown as CheckoutContext['cvv'],
  setCvv: null as unknown as CheckoutContext['setCvv'],
  isCvvInError: null as unknown as CheckoutContext['isCvvInError'],
  setIsCvvInError: null as unknown as CheckoutContext['setIsCvvInError'],

  // isValidForm
  isValidForm: null as unknown as CheckoutContext['isValidForm'],

  // Submit
  isSubmitted: null as unknown as CheckoutContext['isSubmitted'],
  handleCheckoutSubmit:
    null as unknown as CheckoutContext['handleCheckoutSubmit'],
};
