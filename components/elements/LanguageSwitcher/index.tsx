import { FC, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.css';
import Button from '../buttons/Button';
import Link from '../Link';
import Arrow from '../Arrow';
import { ArrowDirectionEnum } from '../Arrow/types';
import useLang from 'contexts/i18nContext/useLang';
import useLangPopup from 'contexts/i18nContext/useLangPopup';
import LangItem from './LangItem';

interface LanguageSwitcherProps {
  title: string;
  ariaControlsId: string;
  dataTestButton: string;
  dataTestLangList: string;
  dataTestLangButton: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  title,
  ariaControlsId,
  dataTestButton,
  dataTestLangList,
  dataTestLangButton,
}) => {
  const { asPath } = useRouter();
  const { lang, handleLangClick } = useLang();
  const { isLangSwitcherOpened, setIsLangSwitcherOpened } = useLangPopup();

  const handleLanguageSwitcherClick = useCallback(
    () => setIsLangSwitcherOpened((c) => !c),
    [setIsLangSwitcherOpened]
  );

  const flagClassName = useMemo(
    () => `${styles.flag} ${lang === 'en' ? styles.enFlag : styles.frFlag} `,
    [lang]
  );

  const plainCountryName = useMemo(() => (lang === 'en' ? 'EN' : 'FR'), [lang]);

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
            href={asPath}
            passHref
            locale="en"
            lang="en"
            onClick={handleLangClick}
            className={styles.langButton}
            aria-labelledby={`${ariaControlsId}-en-button`}
            data-test={`${dataTestLangButton}English`}
            tabIndex={computedTabIndex}
          >
            <LangItem countryLang="English" locale="en" />
          </Link>
        </li>
        <li className="capitalize" aria-labelledby="lang-item-French">
          <Link
            href={asPath}
            passHref
            locale="fr"
            lang="fr"
            onClick={handleLangClick}
            className={styles.langButton}
            aria-labelledby={`${ariaControlsId}-fr-button`}
            role="option"
            data-test={`${dataTestLangButton}French`}
            tabIndex={computedTabIndex}
          >
            <LangItem countryLang="Français" locale="fr" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LanguageSwitcher;
