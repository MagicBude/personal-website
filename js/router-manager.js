/**
 * 路由管理器
 * 负责页面切换逻辑，支持 SPA 和 MPA 两种模式
 */

class RouterManager {
    constructor(config) {
        this.config = config;
        this.currentPage = config.defaultPage;
        this.init();
    }

    /**
     * 初始化路由管理器
     */
    init() {
        if (this.config.mode === 'spa') {
            this.initSPA();
        } else if (this.config.mode === 'mpa') {
            this.initMPA();
        }
    }

    /**
     * 初始化单页应用（SPA）
     */
    initSPA() {
        // 监听 hash 变化
        window.addEventListener('hashchange', () => this.handleHashChange());
        
        // 为所有导航链接添加事件监听
        document.addEventListener('click', (e) => this.handleNavClick(e));
        
        // 初始化当前页面
        this.handleHashChange();
        
        // 添加 SPA 样式
        this.injectSPAStyles();
    }

    /**
     * 初始化多页应用（MPA）
     */
    initMPA() {
        // MPA 模式下，所有链接都是普通链接，无需特殊处理
        // 但可以在这里添加一些统计或其他功能
        console.log('多页应用模式已启用');
    }

    /**
     * 处理 hash 变化（SPA 模式）
     */
    handleHashChange() {
        const hash = window.location.hash.slice(1) || this.config.defaultPage;
        this.showPage(hash);
    }

    /**
     * 处理导航链接点击（SPA 模式）
     * 包括 Logo 点击和导航菜单点击
     */
    handleNavClick(e) {
        const link = e.target.closest('[data-page]');
        if (!link) return;

        if (this.config.mode === 'spa') {
            e.preventDefault();
            const pageName = link.getAttribute('data-page');
            window.location.hash = pageName;
        }
    }

    /**
     * 显示指定页面（SPA 模式）
     */
    showPage(pageName) {
        // 验证页面是否存在
        if (!this.config.pages[pageName]) {
            console.warn(`页面 "${pageName}" 不存在，显示默认页面`);
            pageName = this.config.defaultPage;
        }

        // 隐藏所有页面
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // 显示目标页面
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageName;

            // 触发页面加载事件
            this.triggerPageLoad(pageName);

            // 滚动到顶部
            window.scrollTo(0, 0);
        }
    }

    /**
     * 触发页面加载事件
     * 用于初始化页面特定的逻辑
     */
    triggerPageLoad(pageName) {
        // 触发自定义事件，让各个模块监听
        const event = new CustomEvent('pageLoad', {
            detail: { page: pageName }
        });
        document.dispatchEvent(event);

        // 特殊页面处理
        if (pageName === 'toolbox') {
            // 工具库页面需要初始化工具列表
            if (typeof renderTools === 'function') {
                renderTools();
                setupFilterButtons();
            }
        }
    }

    /**
     * 注入 SPA 样式
     */
    injectSPAStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .page {
                display: none;
            }
            
            .page.active {
                display: block;
                animation: fadeIn 0.3s ease-in;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * 切换应用模式（SPA <-> MPA）
     */
    switchMode(newMode) {
        if (newMode !== 'spa' && newMode !== 'mpa') {
            console.error('无效的模式，只支持 "spa" 或 "mpa"');
            return;
        }

        this.config.mode = newMode;
        console.log(`已切换到 ${newMode === 'spa' ? '单页' : '多页'}应用模式`);

        // 重新初始化
        this.init();
    }

    /**
     * 获取当前页面
     */
    getCurrentPage() {
        return this.currentPage;
    }

    /**
     * 获取页面配置
     */
    getPageConfig(pageName) {
        return this.config.pages[pageName];
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RouterManager;
}
