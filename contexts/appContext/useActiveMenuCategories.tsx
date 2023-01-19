import { useContext, useMemo } from 'react';
import appContext from '.';
import { AppContextInterface } from './app.types';

type UseHandleSetAppResult = AppContextInterface['activeMenuCategory'];

const useActiveMenuCategories = (): UseHandleSetAppResult => {
  const { activeMenuCategory } = useContext(appContext);
  return useMemo(() => activeMenuCategory, [activeMenuCategory]);
};

export default useActiveMenuCategories;
