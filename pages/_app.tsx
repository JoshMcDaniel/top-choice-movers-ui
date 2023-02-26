import Dashboard from '@/Components/Dashboard/Dashboard';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // for working with Tailwind Elements
  // see issue https://github.com/mdbootstrap/Tailwind-Elements/issues/1058#issuecomment-1176988692
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  );
}
