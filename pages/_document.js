/* 
    index.html 템플릿 페이지
    Main은 리액트에서 사용하는 컴포넌트가 마운트되는 최초 요소, <div id="root"></div>
    NextScript는 
*/
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class RootDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Netflix clone site for portfolio" />
                    <meta property="og:title" content="netflix-clone" />
                    <meta property="og:url" content="http://localhost:3000" />
                    <meta property="og:description" content="Netflix-clone" />
                    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic|Roboto&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />    
                    <NextScript />
                </body>
            </Html>
        );
    }
}