/**
 * 路由初始化
 * 在 DOM 加载完成后初始化路由管理器
 */

let router = null;

document.addEventListener('DOMContentLoaded', function() {
    // 使用配置初始化路由管理器
    router = new RouterManager(APP_CONFIG);
    
    // 监听页面加载事件
    document.addEventListener('pageLoad', function(e) {
        console.log(`页面已加载: ${e.detail.page}`);
    });
});

/**
 * 全局函数：切换应用模式
 * 用于在控制台快速切换 SPA/MPA 模式
 */
function switchAppMode(mode) {
    if (router) {
        router.switchMode(mode);
    } else {
        console.error('路由管理器未初始化');
    }
}
