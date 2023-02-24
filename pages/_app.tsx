import Dashboard from '@/Components/Dashboard/Dashboard';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}
