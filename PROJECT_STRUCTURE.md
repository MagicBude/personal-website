# 项目结构说明

## 📂 完整目录树

```
personal-website/
├── .git/                   # Git仓库目录
├── .gitignore             # Git忽略文件配置
├── index.html             # 主页入口
├── README.md              # 项目说明
├── PROJECT_STRUCTURE.md   # 本文件
│
├── css/                   # 样式文件目录
│   ├── variables.css      # CSS变量定义（颜色、字体、间距等）
│   ├── common.css         # 公共样式（导航栏、按钮、页脚等）
│   └── home.css           # 主页专用样式
│
├── js/                    # JavaScript脚本目录
│   └── common.js          # 公共脚本（导航、平滑滚动等）
│
└── pages/                 # 页面模块目录
    ├── toolbox/           # 工具库模块
    │   ├── index.html     # 工具库主页
    │   ├── styles.css     # 工具库样式
    │   ├── script.js      # 工具库交互脚本
    │   └── data.js        # 工具数据（26个精选工具）
    │
    ├── blog/              # 博客模块（开发中）
    │   ├── index.html     # 博客主页
    │   └── styles.css     # 博客样式
    │
    └── portfolio/         # 作品集模块（开发中）
        ├── index.html     # 作品集主页
        └── styles.css     # 作品集样式
```

## 🎯 各文件说明

### 根目录文件

| 文件 | 说明 |
|------|------|
| `index.html` | 网站主页，包含导航、Hero区域、模块预览、关于、联系等 |
| `README.md` | 项目说明文档 |
| `PROJECT_STRUCTURE.md` | 项目结构说明（本文件） |
| `.gitignore` | Git忽略配置，排除系统文件、临时文件等 |

### CSS样式文件

| 文件 | 说明 |
|------|------|
| `css/variables.css` | CSS变量定义，包含颜色、字体、间距、阴影等 |
| `css/common.css` | 公共样式，包含导航栏、按钮、页脚等全局样式 |
| `css/home.css` | 主页专用样式，包含Hero、模块卡片、关于等 |

### JavaScript脚本文件

| 文件 | 说明 |
|------|------|
| `js/common.js` | 公共脚本，包含导航初始化、平滑滚动、工具函数等 |

### 工具库模块（pages/toolbox/）

| 文件 | 说明 |
|------|------|
| `pages/toolbox/index.html` | 工具库主页，展示工具卡片 |
| `pages/toolbox/styles.css` | 工具库样式，包含过滤按钮、工具卡片等 |
| `pages/toolbox/script.js` | 工具库交互脚本，实现过滤、搜索等功能 |
| `pages/toolbox/data.js` | 工具数据，包含26个精选工具的信息 |

### 博客模块（pages/blog/）

| 文件 | 说明 |
|------|------|
| `pages/blog/index.html` | 博客主页，目前显示"敬请期待" |
| `pages/blog/styles.css` | 博客样式 |

### 作品集模块（pages/portfolio/）

| 文件 | 说明 |
|------|------|
| `pages/portfolio/index.html` | 作品集主页，目前显示"敬请期待" |
| `pages/portfolio/styles.css` | 作品集样式 |

## 🎨 设计特点

### 模块化架构
- 各模块相对独立，易于维护和扩展
- 公共样式和脚本集中管理
- 新增模块只需创建对应的pages子目录

### CSS变量系统
- 所有颜色、字体、间距等都定义为CSS变量
- 修改`css/variables.css`可以快速改变整体风格
- 支持响应式设计

### 响应式设计
- 所有页面都支持桌面、平板、手机设备
- 使用CSS媒体查询实现自适应布局
- 网格布局自动调整列数

## 🚀 快速开始

### 本地预览
```bash
# 进入项目目录
cd personal-website

# 启动本地服务器（Python 3）
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000

# 访问 http://localhost:8000
```

### 修改内容

#### 1. 修改工具列表
编辑 `pages/toolbox/data.js`：
```javascript
{
    id: 27,
    name: '新工具名称',
    category: 'dev',  // dev, browser, productivity, system, other
    icon: '🔧',
    description: '工具描述',
    downloadUrl: 'https://example.com',
    docUrl: '#'
}
```

#### 2. 修改个人信息
编辑 `index.html`：
- 修改导航栏链接
- 修改Hero区域文本
- 修改联系方式（邮件、GitHub、Gitee）

#### 3. 修改网站风格
编辑 `css/variables.css`：
```css
:root {
    --primary-color: #3b82f6;      /* 主色调 */
    --secondary-color: #10b981;    /* 辅助色 */
    /* ... 其他变量 ... */
}
```

## 📱 页面导航

```
首页 (index.html)
├── 工具库 (pages/toolbox/index.html)
├── 博客 (pages/blog/index.html) [开发中]
├── 作品集 (pages/portfolio/index.html) [开发中]
└── 联系方式
```

## 🔗 导航链接

所有页面都包含统一的导航栏，支持快速跳转：
- 首页：`/`
- 工具库：`/pages/toolbox/`
- 博客：`/pages/blog/`
- 作品集：`/pages/portfolio/`
- 联系：`#contact`

## 📦 部署

### GitHub Pages部署步骤

1. **推送代码**
   ```bash
   git add .
   git commit -m "初始化：个人网站"
   git push origin main
   ```

2. **启用Pages**
   - 访问GitHub仓库
   - 点击 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - 选择分支：`main`
   - 点击 Save

3. **访问网站**
   - 地址：`https://magicbude.github.io/personal-website`

## 🔄 后续扩展

### 添加新模块
1. 在 `pages/` 下创建新目录（如 `pages/new-module/`）
2. 创建 `index.html` 和 `styles.css`
3. 在主导航栏添加链接
4. 参考现有模块的结构

### 添加博客功能
1. 在 `pages/blog/` 下创建 `posts/` 目录
2. 创建博客文章HTML文件
3. 创建博客列表页面
4. 可选：使用JavaScript动态加载文章

### 添加作品集功能
1. 在 `pages/portfolio/` 下创建项目卡片
2. 创建 `projects.js` 数据文件
3. 实现项目过滤和搜索功能
4. 添加项目详情页面

## 📝 编码规范

- HTML：使用语义化标签，保持结构清晰
- CSS：使用变量系统，避免硬编码颜色和尺寸
- JavaScript：使用ES6+语法，保持代码简洁
- 注释：为复杂逻辑添加注释，说明意图

## 🎓 学习资源

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

---

**最后更新**: 2025-12-09
