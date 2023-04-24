import type { AppProps } from 'next/app'
import '@styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = ({ Component, pageProps }: AppProps) => (
   <Component {...pageProps} />
)

export default App