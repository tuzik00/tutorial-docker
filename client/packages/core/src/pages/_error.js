function Error({statusCode}) {
    const renderError = (code) => {
        switch (code) {
            case 404:
                return (
                    <h1>
                        404 - Страница не найдена
                    </h1>
                );

            default:
                return (
                    <h1>
                        Возникла непредвиденная ошибка.
                    </h1>
                )
        }
    };

    return renderError(statusCode)
}


export default Error