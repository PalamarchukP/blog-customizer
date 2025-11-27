import { Article } from './components/article/Article';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { useTheme } from './components/article-params-form/hooks/useThemeContext';
import { ArticleParamsForm } from './components/article-params-form';

export const App = () => {
	const { theme } = useTheme();
	const style: React.CSSProperties = {
		'--font-family': theme.fontFamilyOption.value,
		'--font-size': theme.fontSizeOption.value,
		'--font-color': theme.fontColor.value,
		'--container-width': theme.contentWidth.value,
		'--bg-color': theme.backgroundColor.value,
	} as React.CSSProperties;
	return (
		<main className={styles.main} style={style}>
			<ArticleParamsForm />
			<Article />
		</main>
	);
};
