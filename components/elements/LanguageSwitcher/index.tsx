import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.css';
import { LangEnum } from '_types/lang';
import { ArrowDirectionEnum } from '../Arrow/types';

// Static Components
import Link from '../Link';
import Arrow from '../Arrow';
import LangItem from './LangItem';
import Button from '../buttons/Button';

interface LanguageSwitcherProps {
  title: string;
  ariaControlsId: string;
  dataTestButton: string;
  dataTestLangList: string;
  dataTestLangButton: string;
}

export default function LanguageSwitcher({
  title,
  ariaControlsId,
  dataTestButton,
  dataTestLangList,
  dataTestLangButton,
}: LanguageSwitcherProps) {
  const { locale, pathname } = useRouter();
  const [isLangSwitcherOpened, setIsLangSwitcherOpened] = useState(false);

  const handleClosePopupClick = useCallback(() => {
    setIsLangSwitcherOpened(false);
  }, []);

  const handleLanguageSwitcherClick = useCallback(
    () => setIsLangSwitcherOpened((c) => !c),
    [setIsLangSwitcherOpened]
  );

  const flagClassName = useMemo(
    () =>
      `${styles.flag} ${
        locale === LangEnum.En ? styles.enFlag : styles.frFlag
      } `,
    [locale]
  );

  const plainCountryName = useMemo(
    () => (locale === LangEnum.En ? 'EN' : 'FR'),
    [locale]
  );

  const langListClassName = useMemo(
    () =>
      `${styles.langList} ${
        isLangSwitcherOpened ? styles.active : styles.close
      } `,
    [isLangSwitcherOpened]
  );

  const computedTabIndex = useMemo(
    () => (isLangSwitcherOpened ? 0 : -1),
    [isLangSwitcherOpened]
  );

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
        data-test={dataTestButton}
      >
        <span aria-hidden="true" className={flagClassName} />
        <span className={styles.plainCountryName}>{plainCountryName}</span>
        <Arrow direction={ArrowDirectionEnum.Top} caret={true} />
      </Button>

      <ul
        id={ariaControlsId}
        className={langListClassName}
        aria-labelledby={`${ariaControlsId}-list`}
        data-test={dataTestLangList}
      >
        <li className="capitalize" aria-labelledby="lang-item-English">
          <Link
            href={pathname}
            passHref
            locale={LangEnum.En}
            lang={LangEnum.En}
            onClick={handleClosePopupClick}
            className={styles.langButton}
            aria-labelledby={`${ariaControlsId}-en-button`}
            data-test={`${dataTestLangButton}English`}
            tabIndex={computedTabIndex}
          >
            <LangItem lang="English" incomingLocale={LangEnum.En} />
          </Link>
        </li>
        <li className="capitalize" aria-labelledby="lang-item-French">
          <Link
            href={pathname}
            passHref
            locale={LangEnum.Fr}
            lang={LangEnum.Fr}
            onClick={handleClosePopupClick}
            className={styles.langButton}
            aria-labelledby={`${ariaControlsId}-fr-button`}
            data-test={`${dataTestLangButton}French`}
            tabIndex={computedTabIndex}
          >
            <LangItem lang="Français" incomingLocale={LangEnum.Fr} />
          </Link>
        </li>
      </ul>
    </>
  );
}
