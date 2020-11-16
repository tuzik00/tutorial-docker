const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
    '@my-project'
]);


const nextConfig = {
    env: {},
    publicRuntimeConfig: {
        staticFolder: '/static',
    },
    useFileSystemPublicRoutes: false,
    webpack(conf) {
        return conf;
    },
};


module.exports = withPlugins([
    withTM,
], nextConfig);
