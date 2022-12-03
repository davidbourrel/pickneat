import MainNavigation from '../MainNavigation';
import styles from './Header.module.css';
import BurgerMenuButton from 'components/elements/buttons/BurgerMenuButton';
import Logo from 'components/elements/Logo';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next/types';
import { pick } from 'lodash';

interface HeaderProps {
  isSideNavOpened: boolean;
  closeMenu: () => void;
  handleToggleMenu: () => void;
}

export default function Header({
  isSideNavOpened,
  closeMenu,
  handleToggleMenu,
}: HeaderProps) {
  const t = useTranslations('Navigation');

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <Logo closeMenu={closeMenu} />
        <MainNavigation />
        <BurgerMenuButton
          isSideNavOpened={isSideNavOpened}
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
  ...MainNavigation.messages,
  ...BurgerMenuButton.messages,
];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: pick(
        await import(`../../../messages/${locale}.json`),
        Header.messages
      ),
    },
  };
};
