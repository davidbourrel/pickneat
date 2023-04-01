import { useContext } from 'react';
import appContext from '.';
import { AppContext } from './app.types';

type UseHandleSetAppResult = AppContext['activeMenuCategory'];

const useActiveMenuCategories = (): UseHandleSetAppResult => {
  const { activeMenuCategory } = useContext(appContext);
  return activeMenuCategory;
};

export default useActiveMenuCategories;
