import { useContext } from 'react';
import { AppContext } from '.';

export const useActiveMenuCategories = () => useContext(AppContext);
