import { useContext, useMemo } from 'react';
import appContext from '.';
import { AppContextInterface } from './app.types';

type UseHandleSetAppResult = Pick<
  AppContextInterface,
  'activeMenuCategory' | 'setActiveMenuCategory'
>;

const useMenuCategories = (): UseHandleSetAppResult => {
  const { activeMenuCategory, setActiveMenuCategory } = useContext(appContext);
  return useMemo(
    () => ({ activeMenuCategory, setActiveMenuCategory }),
    [activeMenuCategory, setActiveMenuCategory]
  );
};

export default useMenuCategories;
