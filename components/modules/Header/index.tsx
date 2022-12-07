import { GetStaticPropsContext } from 'next/types';
import { useTranslations } from 'next-intl';
import DesktopNavigation from '../Navigation/DesktopNavigation';
import styles from './Header.module.css';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import Logo from 'components/elements/Logo';
import { pick } from 'lodash';

interface HeaderProps {
  isMobileNavOpened: boolean;
  closeMenu: () => void;
  handleToggleMenu: () => void;
}

export default function Header({
  isMobileNavOpened,
  closeMenu,
  handleToggleMenu,
}: HeaderProps) {
  const t = useTranslations('Navigation');

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Logo closeMenu={closeMenu} />
        <DesktopNavigation />
        <BurgerMenuButton
          isMobileNavOpened={isMobileNavOpened}
          handleToggleMenu={handleToggleMenu}
          title={t('openBurgerMenu')}
          dataTest="openBurgerMenuButton"
        />
      </div>
    </header>
  );
}

Header.messages = [
  'Navigation',
  ...DesktopNavigation.messages,
  ...BurgerMenuButton.messages,
];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        await import(`../../../messages/${locale}.json`),
        Header.messages
      ),
    },
  };
}
