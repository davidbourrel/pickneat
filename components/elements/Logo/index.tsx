import Link from '../Link';
import styles from './Logo.module.css';

interface LogoProps {
  closeMenu: () => void;
}

export default function Logo({ closeMenu }: LogoProps) {
  return (
    <Link
      href="/"
      className={styles.logo}
      onClick={closeMenu}
      aria-label="PickN`Eat Logo"
      data-test="mainLogo"
    >
      <span>PickN`Eat</span>
    </Link>
  );
}
