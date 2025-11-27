import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
	defaultArticleState,
	ArticleStateType,
	OptionType,
} from '../../../constants/articleProps';

interface ThemeContextProps {
	theme: ArticleStateType;
	setThemeOption: (key: keyof ArticleStateType, option: OptionType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: defaultArticleState,
	setThemeOption: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ArticleStateType>(defaultArticleState);

	const setThemeOption = (key: keyof ArticleStateType, option: OptionType) => {
		setTheme((prev) => ({ ...prev, [key]: option }));
	};

	return (
		<ThemeContext.Provider value={{ theme, setThemeOption }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
