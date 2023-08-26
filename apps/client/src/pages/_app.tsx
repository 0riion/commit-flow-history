import '../styles/globals.css';
import PageLayout from '../layouts/page';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ReduxProvider } from '../redux/provider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ReduxProvider>
			<ThemeProvider enableSystem={true} attribute='class'>
				<PageLayout>
					<Component {...pageProps} />
				</PageLayout>
			</ThemeProvider>
		</ReduxProvider>
	);
}
