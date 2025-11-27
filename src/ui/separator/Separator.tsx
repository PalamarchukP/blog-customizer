import clsx from 'clsx';
import styles from './index.module.scss';

type ColorProps = {
	color?: 'gray';
};

export const Separator = (props: ColorProps) => {
	return (
		<div className={clsx(styles.separator, styles[props.color || ''])}></div>
	);
};
