// 工具数据
const tools = [
    // 开发工具
    {
        id: 1,
        name: 'VSCode',
        category: 'dev',
        icon: '💻',
        description: '轻量级代码编辑器，功能强大，扩展丰富',
        downloadUrl: 'https://code.visualstudio.com/',
        docUrl: '#'
    },
    {
        id: 2,
        name: 'Git',
        category: 'dev',
        icon: '🔀',
        description: '分布式版本控制系统，开发必备',
        downloadUrl: 'https://git-scm.com/',
        docUrl: '#'
    },
    {
        id: 3,
        name: 'Windsurf',
        category: 'dev',
        icon: '🌊',
        description: 'AI代码编辑器，智能编程助手',
        downloadUrl: 'https://codeium.com/windsurf',
        docUrl: '#'
    },
    {
        id: 4,
        name: 'Keil',
        category: 'dev',
        icon: '⚙️',
        description: '嵌入式开发IDE，STM32开发必备',
        downloadUrl: 'https://www.keil.com/',
        docUrl: '#'
    },
    {
        id: 5,
        name: 'STM32CubeMX',
        category: 'dev',
        icon: '🧩',
        description: '图形化配置工具，简化嵌入式开发',
        downloadUrl: 'https://www.st.com/en/development-tools/stm32cubemx.html',
        docUrl: '#'
    },
    {
        id: 6,
        name: 'WinMerge',
        category: 'dev',
        icon: '🔍',
        description: '文件对比工具，代码审查必备',
        downloadUrl: 'https://winmerge.org/',
        docUrl: '#'
    },

    // 浏览器
    {
        id: 7,
        name: 'Chrome',
        category: 'browser',
        icon: '🌐',
        description: '谷歌浏览器，性能优秀，扩展丰富',
        downloadUrl: 'https://www.google.com/chrome/',
        docUrl: '#'
    },
    {
        id: 8,
        name: 'Firefox',
        category: 'browser',
        icon: '🦊',
        description: '开源浏览器，隐私保护能力强',
        downloadUrl: 'https://www.mozilla.org/firefox/',
        docUrl: '#'
    },
    {
        id: 9,
        name: 'Microsoft Edge',
        category: 'browser',
        icon: '🔵',
        description: '微软浏览器，与Windows深度集成',
        downloadUrl: 'https://www.microsoft.com/edge',
        docUrl: '#'
    },
    {
        id: 10,
        name: 'Opera',
        category: 'browser',
        icon: '🎭',
        description: '轻量级浏览器，内置VPN和广告拦截',
        downloadUrl: 'https://www.opera.com/',
        docUrl: '#'
    },
    {
        id: 11,
        name: 'Yandex',
        category: 'browser',
        icon: '🔴',
        description: '俄罗斯浏览器，基于Chromium内核',
        downloadUrl: 'https://browser.yandex.com/',
        docUrl: '#'
    },

    // 生产力工具
    {
        id: 12,
        name: 'Typora',
        category: 'productivity',
        icon: '📝',
        description: '简洁优雅的Markdown编辑器',
        downloadUrl: 'https://typora.io/',
        docUrl: '#'
    },
    {
        id: 13,
        name: 'Obsidian',
        category: 'productivity',
        icon: '🧠',
        description: '强大的笔记管理和知识库工具',
        downloadUrl: 'https://obsidian.md/',
        docUrl: '#'
    },
    {
        id: 14,
        name: 'Notion',
        category: 'productivity',
        icon: '📋',
        description: '一体化工作空间，笔记、数据库、看板',
        downloadUrl: 'https://www.notion.so/',
        docUrl: '#'
    },
    {
        id: 15,
        name: 'WPS Office',
        category: 'productivity',
        icon: '📊',
        description: '国产办公套件，兼容性强',
        downloadUrl: 'https://www.wps.cn/',
        docUrl: '#'
    },
    {
        id: 16,
        name: 'LibreOffice',
        category: 'productivity',
        icon: '📄',
        description: '开源办公套件，功能完整',
        downloadUrl: 'https://www.libreoffice.org/',
        docUrl: '#'
    },

    // 系统工具
    {
        id: 17,
        name: 'Everything',
        category: 'system',
        icon: '🔎',
        description: '极速文件搜索工具',
        downloadUrl: 'https://www.voidtools.com/',
        docUrl: '#'
    },
    {
        id: 18,
        name: 'Listary',
        category: 'system',
        icon: '⚡',
        description: '快速启动和文件搜索工具',
        downloadUrl: 'https://www.listary.com/',
        docUrl: '#'
    },
    {
        id: 19,
        name: 'DISM++',
        category: 'system',
        icon: '🧹',
        description: '系统清理和优化工具',
        downloadUrl: 'https://www.chuyu.me/zh-Hans/',
        docUrl: '#'
    },
    {
        id: 20,
        name: 'Geek Uninstaller',
        category: 'system',
        icon: '🗑️',
        description: '彻底卸载软件，清理残留文件',
        downloadUrl: 'https://geekuninstaller.com/',
        docUrl: '#'
    },
    {
        id: 21,
        name: 'Quicker',
        category: 'system',
        icon: '⏱️',
        description: '效率提升工具，快捷操作',
        downloadUrl: 'https://getquicker.net/',
        docUrl: '#'
    },

    // 其他工具
    {
        id: 22,
        name: 'IDM',
        category: 'other',
        icon: '⬇️',
        description: '强大的下载管理器',
        downloadUrl: 'https://www.internetdownloadmanager.com/',
        docUrl: '#'
    },
    {
        id: 23,
        name: '格式工厂',
        category: 'other',
        icon: '🎬',
        description: '多媒体格式转换工具',
        downloadUrl: 'https://www.formatfactory.cn/',
        docUrl: '#'
    },
    {
        id: 24,
        name: 'Clash',
        category: 'other',
        icon: '🌍',
        description: '网络代理工具',
        downloadUrl: 'https://github.com/Dreamacro/clash',
        docUrl: '#'
    },
    {
        id: 25,
        name: 'Proxifier',
        category: 'other',
        icon: '🔗',
        description: '全局代理工具',
        downloadUrl: 'https://www.proxifier.com/',
        docUrl: '#'
    },
    {
        id: 26,
        name: 'Telegram',
        category: 'other',
        icon: '💬',
        description: '安全的即时通讯应用',
        downloadUrl: 'https://telegram.org/',
        docUrl: '#'
    }
];

// 分类映射
const categoryMap = {
    'dev': '开发工具',
    'browser': '浏览器',
    'productivity': '生产力',
    'system': '系统工具',
    'other': '其他'
};
