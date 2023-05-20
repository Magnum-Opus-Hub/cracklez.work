import Layout from '../components/layout/Layout';
import '../styles/globals.scss';
import AnimatedCursor from "react-animated-cursor"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <AnimatedCursor innerSize={8}
                        outerSize={35}
                        innerScale={1}
                        outerScale={1.7}
                        outerAlpha={0}
                        hasBlendMode={true}
                        outerStyle={{
                            border: '3px solid var(--black)'
                        }}
                        innerStyle={{
                            backgroundColor: 'var(--black)'
                        }} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
