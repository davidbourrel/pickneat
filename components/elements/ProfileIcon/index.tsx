import { useTranslations } from 'next-intl';
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from './ProfileIcon.module.css';

// Static Components
import UserIcon from 'components/images/icons/UserIcon';
import Link from '../Link';
import Image from 'next/image';

const ProfileIcon = () => {
  const { user } = useUser();

  const t = useTranslations('Navigation');

  return user && user.picture ? (
    <Link href="/profile" title={t('profile')} data-test="profileIcon">
      <Image
        src={user.picture}
        alt="User profile icon"
        width={32}
        height={32}
        className={styles.userIcon}
      />
    </Link>
  ) : (
    <Link href="/api/auth/login" title={t('login')} data-test="profileIcon">
      <UserIcon className={styles.userIcon} />
    </Link>
  );
};
export default ProfileIcon;
