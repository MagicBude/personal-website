/**
 * 网站配置文件
 * 集中管理所有配置，便于维护和切换
 */

// 路由模式配置
// 'spa': 单页应用（同页面切换）
// 'mpa': 多页应用（新开页面）
const APP_CONFIG = {
    mode: 'spa',
    
    // 页面配置
    pages: {
        home: {
            id: 'home',
            title: '首页',
            name: '首页',
            url: './',
            spaUrl: '#home'
        },
        toolbox: {
            id: 'toolbox',
            title: '工具库',
            name: '工具库',
            url: 'pages/toolbox/',
            spaUrl: '#toolbox'
        },
        blog: {
            id: 'blog',
            title: '博客',
            name: '博客',
            url: 'pages/blog/',
            spaUrl: '#blog'
        },
        portfolio: {
            id: 'portfolio',
            title: '作品集',
            name: '作品集',
            url: 'pages/portfolio/',
            spaUrl: '#portfolio'
        }
    },
    
    // 默认页面
    defaultPage: 'home',
    
    // 特殊页面（不在导航中显示或有特殊处理）
    specialPages: ['contact']
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
