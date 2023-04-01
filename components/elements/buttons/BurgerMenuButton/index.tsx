import { useTranslations } from 'next-intl';
import styles from './BurgerMenuButton.module.css';
import { BurgerMenuButtonProps } from './types';

// Static components
import Button from '../Button';
import BurgerMenuIcon from './BurgerMenuIcon';

const BurgerMenuButton = ({
  onToggleMenu,
  onCloseMenu,
  isMobileNavOpened,
  title,
  className = '',
  dataTest,
}: BurgerMenuButtonProps) => {
  const t = useTranslations('Navigation');

  const computedButtonClassName = `${styles.button} ${className}`;

  const handleClick = onCloseMenu ? onCloseMenu : onToggleMenu;

  const ariaLabel = isMobileNavOpened
    ? t('closeBurgerMenuTitle')
    : t('openBurgerMenuTitle');

  const ariaExpanded = isMobileNavOpened ? 'true' : 'false';

  const computedTitle = !!title && (
    <span className={styles.menuTitle}>{title}</span>
  );

  return (
    <Button
      headless
      className={computedButtonClassName}
      onClick={handleClick}
      title={ariaLabel}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls="mobile-navigation"
      data-test={dataTest}
    >
      {computedTitle}
      <BurgerMenuIcon isMobileNavOpened={isMobileNavOpened} />
    </Button>
  );
};
export default BurgerMenuButton;
