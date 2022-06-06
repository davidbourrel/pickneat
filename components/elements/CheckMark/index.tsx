import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import styles from './CheckMark.module.css';

interface CheckMarkProps {
  lang: string;
  className?: string;
}

const CheckMark: FC<CheckMarkProps> = ({ lang, className = '' }) => {
  const { locale } = useRouter();

  const computedClassName = useMemo(
    () => `${styles.checkMark}${className}`,
    [className]
  );
  return lang === locale ? (
    <span className={computedClassName}>&#10003;</span>
  ) : null;
};

export default CheckMark;
