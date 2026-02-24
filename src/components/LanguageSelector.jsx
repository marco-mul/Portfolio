import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    return (
        <div className="language-selector">
            {i18n.language !== 'en' && (
                <button onClick={() => i18n.changeLanguage('en')}>🇬🇧</button>
            )}
            {i18n.language !== 'fr' && (
                <button onClick={() => i18n.changeLanguage('fr')}>🇫🇷</button>
            )}
        </div>
    );
}