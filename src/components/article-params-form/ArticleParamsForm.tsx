import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	OptionType,
} from 'src/constants/articleProps';
import { useTheme } from './hooks/useThemeContext';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

type LocalState = {
	fontFamily: OptionType;
	fontSize: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
};

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { setThemeOption } = useTheme();

	const [localState, setLocalState] = useState<LocalState>({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const resetState: LocalState = {
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	};

	const changeFontFamily = (option: OptionType) =>
		setLocalState((prev) => ({ ...prev, fontFamily: option }));

	const changeFontSize = (option: OptionType) => {
		setLocalState((prev) => ({ ...prev, fontSize: option }));
	};

	const changeFontColor = (option: OptionType) =>
		setLocalState((prev) => ({ ...prev, fontColor: option }));

	const changeBackgroundColor = (option: OptionType) =>
		setLocalState((prev) => ({ ...prev, backgroundColor: option }));

	const changeContentWidth = (option: OptionType) =>
		setLocalState((prev) => ({ ...prev, contentWidth: option }));

	const handleApply = (e: React.FormEvent) => {
		e.preventDefault();
		setThemeOption('fontFamilyOption', localState.fontFamily);
		setThemeOption('fontSizeOption', localState.fontSize);
		setThemeOption('fontColor', localState.fontColor);
		setThemeOption('backgroundColor', localState.backgroundColor);
		setThemeOption('contentWidth', localState.contentWidth);
	};

	const handleReset = () => {
		setThemeOption('fontFamilyOption', resetState.fontFamily);
		setThemeOption('fontSizeOption', resetState.fontSize);
		setThemeOption('fontColor', resetState.fontColor);
		setThemeOption('backgroundColor', resetState.backgroundColor);
		setThemeOption('contentWidth', resetState.contentWidth);

		setLocalState(resetState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={handleApply}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						options={fontFamilyOptions}
						selected={localState.fontFamily}
						onChange={changeFontFamily}
						title='Шрифт'
					/>

					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={localState.fontSize}
						onChange={changeFontSize}
						title='Размер шрифта'
					/>

					<Select
						options={fontColors}
						selected={localState.fontColor}
						onChange={changeFontColor}
						title='Цвет шрифта'
					/>

					<Separator color='gray' />

					<Select
						options={backgroundColors}
						selected={localState.backgroundColor}
						onChange={changeBackgroundColor}
						title='Цвет фона'
					/>

					<Select
						options={contentWidthArr}
						selected={localState.contentWidth}
						onChange={changeContentWidth}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='clear'
							htmlType='reset'
							onClick={handleReset}
						/>
						<Button title='Применить' type='apply' htmlType='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
