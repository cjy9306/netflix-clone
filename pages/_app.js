import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <NextNProgress />
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
