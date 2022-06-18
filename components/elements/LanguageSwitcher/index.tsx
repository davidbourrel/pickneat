import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.css';
import Button from '../buttons/Button';
import Link from '../Link';
import CheckMark from '../CheckMark';
import Arrow from '../Arrow';
import { ArrowDirectionEnum } from '../Arrow/types';

interface LanguageSwitcherProps {
  lang: string;
  handleLangClick: (e: MouseEvent) => void;
  ariaControlsId: string;
  dataTestButton: string;
  dataTestLangsList: string;
  dataTestLangButton: string;
  isLangSwitcherOpened: boolean;
  setIsLangSwitcherOpened: Dispatch<SetStateAction<boolean>>;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  lang,
  handleLangClick,
  ariaControlsId,
  dataTestButton,
  dataTestLangsList,
  dataTestLangButton,
  isLangSwitcherOpened,
  setIsLangSwitcherOpened,
}) => {
  const { asPath } = useRouter();

  const handleLanguageSwitcherClick = useCallback(
    () => setIsLangSwitcherOpened((c) => !c),
    [setIsLangSwitcherOpened]
  );

  const langsListClassName = useMemo(
    () =>
      `${styles.langsList} ${
        isLangSwitcherOpened ? styles.active : styles.close
      } `,
    [isLangSwitcherOpened]
  );

  const flagClassName = useMemo(
    () => `${styles.flag} ${lang === 'en' ? styles.enFlag : styles.frFlag} `,
    [lang]
  );

  const plainCountryName = useMemo(
    () => (lang === 'en' ? 'ENGLISH' : 'FRANÇAIS'),
    [lang]
  );

  return (
    <>
      <Button
        headless
        type="button"
        id={`${ariaControlsId}-button`}
        onClick={handleLanguageSwitcherClick}
        className={styles.languageSwitcherButton}
        aria-haspopup={true}
        aria-expanded={isLangSwitcherOpened}
        aria-controls={ariaControlsId}
        data-test={dataTestButton}
      >
        <span className={flagClassName} />
        <span className={styles.plainCountryName}>{plainCountryName}</span>
        <Arrow direction={ArrowDirectionEnum.Top} caret={true} />
      </Button>

      <ul
        id={ariaControlsId}
        className={langsListClassName}
        role="menu"
        aria-labelledby={`${ariaControlsId}-list`}
        data-test={dataTestLangsList}
      >
        <li
          role="menuitem"
          aria-labelledby="lang-item-English"
          className={styles.langItem}
        >
          <Link href={asPath} passHref locale="en">
            <Button
              headless
              value="en"
              onClick={handleLangClick}
              className={styles.langButton}
              data-test={`${dataTestLangButton}English`}
              aria-labelledby={`${ariaControlsId}-item-en-button`}
            >
              <span>English</span>
              <CheckMark lang="en" />
            </Button>
          </Link>
        </li>
        <li
          role="menuitem"
          aria-labelledby="lang-item-French"
          className={styles.langItem}
        >
          <Link href={asPath} passHref locale="fr">
            <Button
              headless
              value="fr"
              onClick={handleLangClick}
              className={styles.langButton}
              data-test={`${dataTestLangButton}French`}
              aria-labelledby={`${ariaControlsId}-item-fr-button`}
            >
              <span>Français</span>
              <CheckMark lang="fr" />
            </Button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LanguageSwitcher;
