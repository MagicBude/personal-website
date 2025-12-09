# 个人网站

一个现代化的个人网站平台，集工具库、博客、作品集于一身。

## 🎯 功能模块

- **🛠️ 工具库** - 精选开发工具、浏览器、生产力工具等资源
- **📝 博客** - 技术文章和学习笔记（开发中）
- **🎨 作品集** - 项目展示和案例分享（开发中）

## 📂 项目结构

```
personal-website/
├── index.html              # 主页
├── css/
│   ├── common.css          # 公共样式
│   ├── variables.css       # CSS变量
│   └── home.css            # 主页样式
├── js/
│   └── common.js           # 公共脚本
├── pages/
│   ├── toolbox/            # 工具库模块
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── script.js
│   │   └── data.js
│   ├── blog/               # 博客模块
│   │   ├── index.html
│   │   └── styles.css
│   └── portfolio/          # 作品集模块
│       ├── index.html
│       └── styles.css
└── README.md
```

## 🚀 快速开始

### 本地预览
```bash
# 使用Python 3
python -m http.server 8000

# 使用Node.js
npx http-server -p 8000
```

然后访问 `http://localhost:8000`

## 📝 自定义内容

### 修改工具列表
编辑 `pages/toolbox/data.js`，在 `tools` 数组中添加或修改工具。

### 修改个人信息
编辑 `index.html` 中的以下部分：
- 导航栏链接
- Hero区域文本
- 联系方式

### 修改样式
编辑 `css/variables.css` 中的CSS变量来改变网站风格。

## 🌐 部署到Gitee Pages

1. 在Gitee上创建仓库
2. 克隆到本地
3. 推送代码
4. 启用Gitee Pages

## 📄 许可证

本项目采用 **MIT License** 开源协议。

详见 [LICENSE](LICENSE) 文件。

### 简要说明
- ✅ 可自由使用、修改和分发
- ✅ 可用于商业项目
- ✅ 只需保留版权声明
- ✅ 无任何担保

---

**最后更新**: 2025-12-09
