# 快速开始指南

## ⚡ 5分钟快速部署

### 1️⃣ 推送代码（1分钟）
```bash
cd d:\personal-website
git add .
git commit -m "初始化：个人网站"
git push
```

### 2️⃣ 启用Pages（2分钟）
1. 访问 https://gitee.com/MagicBude/personal-website
2. 点击 **服务** → **Gitee Pages**
3. 选择分支：`master`，目录：`/`
4. 点击 **启动**

### 3️⃣ 访问网站（1分钟）
```
https://magicbude.gitee.io/personal-website
```

### 4️⃣ 本地预览（1分钟）
```bash
# Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

---

## 📂 文件清单

### ✅ 已创建的文件（16个）

**根目录**
- ✅ `index.html` - 主页
- ✅ `README.md` - 项目说明
- ✅ `PROJECT_STRUCTURE.md` - 项目结构
- ✅ `DEPLOYMENT.md` - 部署指南
- ✅ `QUICK_START.md` - 本文件
- ✅ `.gitignore` - Git配置

**CSS样式**
- ✅ `css/variables.css` - CSS变量
- ✅ `css/common.css` - 公共样式
- ✅ `css/home.css` - 主页样式

**JavaScript脚本**
- ✅ `js/common.js` - 公共脚本

**工具库模块**
- ✅ `pages/toolbox/index.html` - 工具库主页
- ✅ `pages/toolbox/styles.css` - 工具库样式
- ✅ `pages/toolbox/script.js` - 工具库脚本
- ✅ `pages/toolbox/data.js` - 工具数据（26个工具）

**博客模块**
- ✅ `pages/blog/index.html` - 博客主页
- ✅ `pages/blog/styles.css` - 博客样式

**作品集模块**
- ✅ `pages/portfolio/index.html` - 作品集主页
- ✅ `pages/portfolio/styles.css` - 作品集样式

---

## 🎯 网站功能

### 已实现
- ✅ 响应式设计（桌面、平板、手机）
- ✅ 工具库模块（26个精选工具）
- ✅ 工具分类过滤
- ✅ 统一导航栏
- ✅ 现代化UI设计
- ✅ 平滑滚动
- ✅ CSS变量系统

### 开发中
- 📝 博客模块
- 🎨 作品集模块

---

## 🔧 常用命令

### Git操作
```bash
# 查看状态
git status

# 添加文件
git add .

# 提交
git commit -m "描述"

# 推送
git push

# 查看日志
git log --oneline
```

### 本地开发
```bash
# 启动服务器
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000

# 访问
http://localhost:8000
```

---

## 📝 修改指南

### 修改工具列表
编辑 `pages/toolbox/data.js`，添加新工具：
```javascript
{
    id: 27,
    name: '工具名',
    category: 'dev',
    icon: '🔧',
    description: '描述',
    downloadUrl: 'https://...',
    docUrl: '#'
}
```

### 修改个人信息
编辑 `index.html`：
- 第27行：修改邮箱
- 第28行：修改GitHub链接
- 第29行：修改Gitee链接

### 修改网站颜色
编辑 `css/variables.css`：
```css
--primary-color: #3b82f6;      /* 主色 */
--secondary-color: #10b981;    /* 辅助色 */
```

---

## 🌐 网站结构

```
首页 (/)
├── 工具库 (/pages/toolbox/)
│   └── 26个精选工具
├── 博客 (/pages/blog/) [开发中]
├── 作品集 (/pages/portfolio/) [开发中]
└── 联系方式
```

---

## ✨ 特色功能

### 工具库
- 🔍 按分类过滤（开发工具、浏览器、生产力、系统、其他）
- 📱 响应式卡片布局
- 🔗 直接下载链接
- 💾 26个精选工具

### 设计
- 🎨 现代化UI
- 🌈 渐变色背景
- ✨ 悬停动画效果
- 📱 完全响应式

### 技术
- 🚀 无框架依赖
- ⚡ 轻量级高效
- 🎯 模块化架构
- 🔧 易于扩展

---

## 📊 项目统计

| 项目 | 数量 |
|------|------|
| HTML文件 | 7个 |
| CSS文件 | 5个 |
| JavaScript文件 | 2个 |
| 精选工具 | 26个 |
| 总代码行数 | ~1500行 |

---

## 🚀 后续计划

### 短期（1-2周）
- [ ] 完善博客模块
- [ ] 添加项目卡片
- [ ] 优化移动端体验

### 中期（1个月）
- [ ] 实现博客文章列表
- [ ] 添加项目详情页
- [ ] 实现搜索功能

### 长期（3个月）
- [ ] 添加深色模式
- [ ] 多语言支持
- [ ] SEO优化
- [ ] 评论系统

---

## 💡 提示

1. **本地测试很重要** - 修改前先在本地测试
2. **定期提交** - 每次修改后都提交到Git
3. **保持备份** - 重要修改前创建备份分支
4. **查看日志** - 用 `git log` 查看修改历史

---

## 📞 需要帮助？

- 查看 `PROJECT_STRUCTURE.md` - 了解项目结构
- 查看 `DEPLOYMENT.md` - 部署相关问题
- 查看 `README.md` - 项目概览

---

**网站地址**: https://magicbude.gitee.io/personal-website

**仓库地址**: https://gitee.com/MagicBude/personal-website

**最后更新**: 2025-12-09
