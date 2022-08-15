import { createContext } from 'react';
import { INITIAL_I18N_CONTEXT } from './i18n.const';

const i18nContext = createContext(INITIAL_I18N_CONTEXT);

export default i18nContext;
