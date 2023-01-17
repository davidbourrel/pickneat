import { createContext } from 'react';
import { INITIAL_APP_CONTEXT } from './app.const';

const appContext = createContext(INITIAL_APP_CONTEXT);

export default appContext;
