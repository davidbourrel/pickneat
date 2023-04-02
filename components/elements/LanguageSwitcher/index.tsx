import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.css';
import { LangEnum } from '_types/lang';
import { ArrowDirectionEnum } from '../Arrow/types';
import { LanguageSwitcherProps } from './types';

// Static Components
import Link from '../Link';
import Arrow from '../Arrow';
import LangItem from './LangItem';
import Button from '../buttons/Button';

const LanguageSwitcher = ({
  title,
  ariaControlsId,
  dataTestButton,
  dataTestLangList,
  dataTestLangButton,
}: LanguageSwitcherProps) => {
  const { locale, pathname, query } = useRouter();
  const [isLangSwitcherOpened, setIsLangSwitcherOpened] = useState(false);

  const href = {
    pathname,
    query,
  };

  const handleClosePopupClick = () => setIsLangSwitcherOpened(false);

  const handleLanguageSwitcherClick = () => setIsLangSwitcherOpened((c) => !c);

  const flagClassName = `${styles.flag} ${
    locale === LangEnum.En ? styles.enFlag : styles.frFlag
  } `;

  const plainCountryName = locale === LangEnum.En ? 'EN' : 'FR';

  const langListClassName = `${styles.langList} ${
    isLangSwitcherOpened ? styles.active : styles.close
  } `;

  const computedTabIndex = isLangSwitcherOpened ? 0 : -1;

  return (
    <>
      <Button
        headless
        type="button"
        onClick={handleLanguageSwitcherClick}
        className={styles.languageSwitcherButton}
        title={title}
        aria-label={title}
        aria-haspopup={true}
        aria-expanded={isLangSwitcherOpened}
        aria-controls={ariaControlsId}
        data-test={dataTestButton}>
        <span aria-hidden="true" className={flagClassName} />
        <span className={styles.plainCountryName}>{plainCountryName}</span>
        <Arrow direction={ArrowDirectionEnum.Top} caret={true} />
      </Button>

      <ul
        id={ariaControlsId}
        className={langListClassName}
        aria-labelledby={`${ariaControlsId}-list`}
        data-test={dataTestLangList}>
        <li className="capitalize" aria-labelledby="lang-item-English">
          <Link
            href={href}
            passHref
            locale={LangEnum.En}
            lang={LangEnum.En}
            onClick={handleClosePopupClick}
            className={styles.langButton}
            aria-labelledby={`${ariaControlsId}-en-button`}
            data-test={`${dataTestLangButton}English`}
            tabIndex={computedTabIndex}>
            <LangItem lang="English" incomingLocale={LangEnum.En} />
          </Link>
        </li>
        <li className="capitalize" aria-labelledby="lang-item-French">
          <Link
            href={href}
            passHref
            locale={LangEnum.Fr}
            lang={LangEnum.Fr}
            onClick={handleClosePopupClick}
            className={styles.langButton}
            aria-labelledby={`${ariaControlsId}-fr-button`}
            data-test={`${dataTestLangButton}French`}
            tabIndex={computedTabIndex}>
            <LangItem lang="Français" incomingLocale={LangEnum.Fr} />
          </Link>
        </li>
      </ul>
    </>
  );
};
export default LanguageSwitcher;
