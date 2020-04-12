import Head from 'next/head';
import styled from 'styled-components/macro';
import NextNProgress from 'nextjs-progressbar';
import ResetCss from '../static/css/reset.css';
import Header from '../components/common/Header';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href={ResetCss} />
            </Head>
            <NextNProgress />
            <Header />
            <Component {...pageProps} />
        </>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default MyApp;
