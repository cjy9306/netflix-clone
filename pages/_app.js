/* 
    모든 페이지가 실행될 때 실행되는 페이지
    NextNProgress를 사용함으로 페이지 이동시 프로그레스바를 보여줌
*/
import App from 'next/app';
import { Helmet } from 'react-helmet';
import NextNProgress from 'nextjs-progressbar';
import Header from '../components/Header';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Helmet>
                    <title>Netflix-clone</title>
                    <link rel="stylesheet" type="text/css" href="../static/css/reset.css" />
                </Helmet>
                <NextNProgress />
                <Header />
                <Component {...pageProps} />
            </>
        );
    }
};