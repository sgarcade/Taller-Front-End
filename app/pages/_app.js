// import '@/styles/globals.css';
import ThemeProvider from 'utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
// components
import { StyledChart } from 'components/chart';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <StyledChart />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
