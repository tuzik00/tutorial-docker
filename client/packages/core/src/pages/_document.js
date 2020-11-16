import React from 'react';
import _Document, { Html, Head, Main, NextScript } from 'next/document';


class Document extends _Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => <App {...props} />
                });

            const initialProps = await _Document.getInitialProps(ctx);

            return {
                ...initialProps
            }
        } catch (e) {
            return {}
        }
    }

    render() {
        return (
            <Html lang={'ru'}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default Document;