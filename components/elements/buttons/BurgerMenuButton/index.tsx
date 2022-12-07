import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next/types';
import { pick } from 'lodash';
import { ClassNameComponentProps } from '_types/components';
import Button from '../Button';
import styles from './BurgerMenuButton.module.css';

interface BurgerMenuButtonProps extends ClassNameComponentProps {
  handleToggleMenu?: () => void;
  closeMenu?: () => void;
  isMobileNavOpened: boolean;
  title?: string;
  dataTest: string;
}

export default function BurgerMenuButton({
  handleToggleMenu,
  closeMenu,
  isMobileNavOpened,
  title,
  className,
  dataTest,
}: BurgerMenuButtonProps) {
  const t = useTranslations('Navigation');

  const computedButtonClassName = useMemo(
    () => (className ? `${styles.button} ${className}` : styles.button),
    [className]
  );

  const computedTitle = useMemo(
    () => (title ? <span className={styles.menuTitle}>{title}</span> : null),
    [title]
  );

  const computedClickEvent = useMemo(
    () => (closeMenu ? closeMenu : handleToggleMenu),
    [closeMenu, handleToggleMenu]
  );

  const ariaLabel = useMemo(
    () =>
      isMobileNavOpened ? t('closeBurgerMenuTitle') : t('openBurgerMenuTitle'),
    [isMobileNavOpened, t]
  );

  const ariaExpanded = useMemo(
    () => (isMobileNavOpened ? 'true' : 'false'),
    [isMobileNavOpened]
  );

  const bar1ClassName = useMemo(
    () => `${styles.bar} ${styles.bar1}
      ${isMobileNavOpened && styles.bar1Active}`,
    [isMobileNavOpened]
  );
  const bar2ClassName = useMemo(
    () => `${styles.bar} ${styles.bar2}
      ${isMobileNavOpened && styles.bar2Active}`,
    [isMobileNavOpened]
  );
  const bar3ClassName = useMemo(
    () => `${styles.bar} ${styles.bar3}
      ${isMobileNavOpened && styles.bar3Active}`,
    [isMobileNavOpened]
  );

  return (
    <Button
      headless
      className={computedButtonClassName}
      onClick={computedClickEvent}
      title={ariaLabel}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls="mobile-navigation"
      data-test={dataTest}
    >
      {computedTitle}
      <div className={styles.barsContainer}>
        <span className={bar1ClassName} aria-hidden="true" />
        <span className={bar2ClassName} aria-hidden="true" />
        <span className={bar3ClassName} aria-hidden="true" />
      </div>
    </Button>
  );
}

BurgerMenuButton.messages = ['Navigation'];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../../messages/${locale}.json`),
        BurgerMenuButton.messages
      ),
    },
  };
}
