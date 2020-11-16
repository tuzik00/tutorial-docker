import React, {Component} from 'react';
import NextLink from 'next/link';

import * as articlesApi from '@my-project/api/methods/articles';


class Index extends Component {
    static async getInitialProps() {
        const list = await articlesApi.getList();

        console.log(list);

        return {}
    }

    render() {
        return (
            <div>
                <h1>Статьи</h1>

                <div>
                    <NextLink
                        as={'/articles/1'}
                        href={{
                            pathname: '/articles/item',
                            query: {
                                id: 1,
                            }
                        }}
                    >
                        Телевизоры
                    </NextLink>
                </div>
            </div>
        )
    }
}


export default Index
