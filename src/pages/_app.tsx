import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

import { PageLayout } from '@/components/PageLayout'

export default function App({ Component, pageProps }) {
	return (
		<PageLayout>
			<NextNProgress />
			<Component {...pageProps} />
		</PageLayout>
	)
}
