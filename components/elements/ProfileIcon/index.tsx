import { FC } from 'react';
import UserIcon from 'components/images/icons/UserIcon';
import styles from './ProfileIcon.module.css';

const ProfileIcon: FC = () => {
  return <UserIcon className={styles.userIcon} />;
};

export default ProfileIcon;
