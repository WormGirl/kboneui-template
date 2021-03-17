/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        index: [
            '/(home|index)?',
            '/index.html'
        ],
    },
    redirect: {
        notFound: 'index',
        accessDenied: 'index',
    },
    generate: {
        autoBuildNpm: 'npm',
        renderVersion: 'core-v1',
        elementVersion: 'core-v1',
        appWxss: 'display'
    },
    app: {
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: '实时公交',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    projectConfig: {
        projectname: '实时公交',
        appid: 'wx624dc2cce62f7008',
    },
    runtime: {
        wxComponent: 'noprefix'
    }
}
