import React from 'react';
import _App from 'next/app';

import Navigate from '../containers/Navigate';


class App extends _App {
    static async getInitialProps({ Component, ctx }) {
        const {
            pathname,
        } = ctx;

        return {
            pageProps: {
                ...Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {},
                pathname,
            },
        };
    }

    render() {
        const {
            Component,
            pageProps,
        } = this.props;

        return (
            <>
                <Navigate />
                <Component {...pageProps} />
            </>
        )
    }
}


export default App;
