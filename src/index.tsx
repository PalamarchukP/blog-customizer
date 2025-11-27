import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './components/article-params-form/hooks/useThemeContext';
import { App } from './App';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);
