import React from 'react';
import NextLink from 'next/link';


const Navigate = () => {
    return (
        <div>
            <NextLink
                as={'/'}
                href={'/'}
            >
                Главная
            </NextLink> &nbsp;
            <NextLink
                as={'/articles'}
                href={'/articles'}
            >
                Статьи
            </NextLink>
        </div>
    )
};


export default Navigate;