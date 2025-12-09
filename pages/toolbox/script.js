// 当前活跃的过滤器
let currentFilter = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderTools();
    setupFilterButtons();
});

// 渲染工具卡片
function renderTools(filter = 'all') {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';

    const filteredTools = filter === 'all' 
        ? tools 
        : tools.filter(tool => tool.category === filter);

    filteredTools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });

    // 如果没有工具，显示提示
    if (filteredTools.length === 0) {
        toolsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">暂无工具</p>';
    }
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.setAttribute('data-category', tool.category);

    const categoryName = categoryMap[tool.category] || tool.category;

    // 判断 icon 是否为 SVG 文件路径
    let iconHTML = '';
    if (tool.icon.endsWith('.svg')) {
        iconHTML = `<img src="${tool.icon}" alt="${tool.name}" class="tool-icon-img">`;
    } else {
        iconHTML = `<div class="tool-icon">${tool.icon}</div>`;
    }

    card.innerHTML = `
        <div class="tool-icon">${iconHTML}</div>
        <div class="tool-name">${tool.name}</div>
        <span class="tool-category">${categoryName}</span>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-links">
            <a href="${tool.downloadUrl}" target="_blank" class="tool-link primary">下载</a>
            <a href="${tool.docUrl}" class="tool-link secondary">说明</a>
        </div>
    `;

    return card;
}

// 设置过滤按钮
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加当前按钮的active类
            this.classList.add('active');

            // 获取过滤器值
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;

            // 重新渲染工具
            renderTools(filter);
        });
    });
}
