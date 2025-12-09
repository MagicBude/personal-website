# 图标文件夹

这个文件夹用于存放工具库和其他页面的 SVG 图标。

## 使用说明

### 1. 下载图标
- 访问 https://www.iconfont.cn/
- 搜索需要的图标
- 下载 SVG 格式

### 2. 保存图标
将下载的 SVG 文件保存到此文件夹，命名规则：
- `toolname.svg` （工具名称的英文小写）

例如：
- `vscode.svg` - VSCode 编辑器
- `git.svg` - Git 版本控制
- `chrome.svg` - Chrome 浏览器
- `typora.svg` - Typora 编辑器
- 等等

### 3. 更新代码
将 `data.js` 中的 emoji 图标改为 SVG 路径：

**之前：**
```javascript
{
    id: 1,
    name: 'VSCode',
    category: 'dev',
    icon: '💻',  // emoji
    ...
}
```

**之后：**
```javascript
{
    id: 1,
    name: 'VSCode',
    category: 'dev',
    icon: '/assets/icons/vscode.svg',  // SVG 路径
    ...
}
```

## 工具列表

### 开发工具 (dev)
- [ ] vscode.svg - VSCode
- [ ] git.svg - Git
- [ ] windsurf.svg - Windsurf
- [ ] keil.svg - Keil
- [ ] stm32cubemx.svg - STM32CubeMX
- [ ] winmerge.svg - WinMerge

### 浏览器 (browser)
- [ ] chrome.svg - Chrome
- [ ] firefox.svg - Firefox
- [ ] edge.svg - Microsoft Edge
- [ ] opera.svg - Opera
- [ ] yandex.svg - Yandex

### 生产力 (productivity)
- [ ] typora.svg - Typora
- [ ] obsidian.svg - Obsidian
- [ ] notion.svg - Notion
- [ ] wps.svg - WPS Office
- [ ] libreoffice.svg - LibreOffice

### 系统工具 (system)
- [ ] everything.svg - Everything
- [ ] listary.svg - Listary
- [ ] dism.svg - DISM++
- [ ] geek-uninstaller.svg - Geek Uninstaller
- [ ] quicker.svg - Quicker

### 其他 (other)
- [ ] idm.svg - IDM
- [ ] formatfactory.svg - 格式工厂
- [ ] clash.svg - Clash
- [ ] proxifier.svg - Proxifier
- [ ] telegram.svg - Telegram

## 注意事项

1. SVG 文件应该是纯净的，不包含过多的 metadata
2. 建议图标大小在 64x64 或 128x128 像素
3. 文件名使用小写英文，用连字符分隔（如 `my-icon.svg`）
4. 确保 SVG 能正确显示在网页上
