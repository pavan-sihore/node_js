## 🚀 Getting Started with Git

### 📦 Clone the Repository

```bash
git clone https://github.com/pavan-sihore/node_js.git
cd node_js
```

### 📁 Initialize Git (If Starting from Scratch)

If you already have the project locally but Git is not initialized:

```bash
git init
git remote add origin https://github.com/pavan-sihore/node_js.git
```

### 🔄 Sync with Remote Repository

#### Pull the Latest Code (if starting with an empty local repo):

```bash
git pull origin main
```

Or with rebase (optional, for linear history):

```bash
git pull --rebase origin main
```

### 💾 Stage and Commit Changes

```bash
git add .
git commit -m "Initial commit"
git status
```

### 📤 Push to Remote

> Use `main` or `master` depending on your branch name.

```bash
git push -u origin main
```

### 🔁 Change Remote URL (if needed)

```bash
git remote set-url origin <new-URL>
```
