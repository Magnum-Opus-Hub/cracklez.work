import Layout from '../components/layout/Layout';
import '../styles/globals.scss';
import AnimatedCursor from 'react-animated-cursor';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.classList.add('ovfn');
    setTimeout(() => {
      document.body.classList.remove('ovfn');
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <>
      <video
        src="/images/animation.mp4"
        autoPlay
        muted
        className={!loading ? 'videonot' : 'video'}
      />
      <Layout>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          hasBlendMode={true}
          outerStyle={{
            border: '3px solid var(--black)',
          }}
          innerStyle={{
            backgroundColor: 'var(--black)',
          }}
        />
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
