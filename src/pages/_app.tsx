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
    className='fixed top-0 left-0 w-full h-full object-cover z-0 animate-fade-in-out'
    src="/images/animation.mp4"
    autoPlay
    muted
    playsInline
  >
    Your browser does not support the video tag.
  </video>
    </div>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
