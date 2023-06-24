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
    {/* the video is not working on mobile, so i have to fix that */}
    <div className={!loading ? 'videonot' : 'video'}>
  <video
    className='fixed top-0 left-0 w-full h-full object-cover z-0'
    src="/images/animation.mp4"
    autoPlay
    muted
    playsInline
  >
    Your browser does not support the video tag.
  </video>
    </div>

      <Layout>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          // hasBlendMode={true}
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
