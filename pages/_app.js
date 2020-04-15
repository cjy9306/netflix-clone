import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import ResetCss from '../static/css/reset.css';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Netflix-clone</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Netflix clone site for portfolio"
                />
                <meta property="og:title" content="netflix-clone" />
                <meta
                    property="og:url"
                    content="http://cjy9306.iptime.org:3000"
                />
                <meta property="og:description" content="Netflix-clone" />
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
