# Personal Website

A modern personal website platform featuring a toolbox, blog, and portfolio modules.

## 🎯 Features

- **🛠️ Toolbox** - Curated development tools, browsers, and productivity software with detailed descriptions and official download links
- **📝 Blog** - Technical articles and learning notes (Coming soon)
- **🎨 Portfolio** - Project showcase and case studies (Coming soon)

## 📂 Project Structure

```
personal-website/
├── index.html              # Homepage
├── css/
│   ├── common.css          # Common styles
│   ├── variables.css       # CSS variables
│   └── home.css            # Homepage styles
├── js/
│   └── common.js           # Common scripts
├── pages/
│   ├── toolbox/            # Toolbox module
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── script.js
│   │   └── data.js
│   ├── blog/               # Blog module
│   │   ├── index.html
│   │   └── styles.css
│   └── portfolio/          # Portfolio module
│       ├── index.html
│       └── styles.css
└── README.md
```

## 🚀 Quick Start

### Local Preview
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

Then visit `http://localhost:8000`

## 📝 Customization

### Modify Tool List
Edit `pages/toolbox/data.js` and add tools to the `tools` array.

### Modify Personal Information
Edit `index.html`:
- Navigation links
- Hero section text
- Contact information

### Change Website Style
Edit `css/variables.css` to modify CSS variables.

## 🌐 Deploy to Gitee Pages

1. Create a repository on Gitee
2. Clone to local
3. Push code
4. Enable Gitee Pages

## 📚 Documentation

- `QUICK_START.md` - 5-minute quick deployment guide
- `PROJECT_STRUCTURE.md` - Detailed project structure
- `DEPLOYMENT.md` - Complete deployment guide
- `README.md` - Chinese version

## 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

### Summary
- ✅ Free to use, modify, and distribute
- ✅ Can be used for commercial projects
- ✅ Only need to retain copyright notice
- ✅ No warranty provided

---

**Last Updated**: 2025-12-09
