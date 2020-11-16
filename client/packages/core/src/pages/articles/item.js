import React, { Component } from 'react';

import * as articlesApi from '@my-project/api/methods/articles';


class Item extends Component {
    static async getInitialProps(ctx) {
        const { id } = ctx.query;

        const item = await articlesApi.getById(id);

        console.log(item);

        return {
            id,
        }
    }

    render() {
        const {
            id
        } = this.props;

        return (
            <h1>
                Статья {id}
            </h1>
        )
    }
}


export default Item
