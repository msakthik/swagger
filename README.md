# eslint 
npm install -D eslint

# initiaizing eslint
npx eslint --init

## ✅ 1. Initialize git in your project

Inside your project folder:

```bash
cd d/swagger
git init
```

Check:

```bash
git status
```

---

## ✅ 2. Create `.gitignore`

Very important 🚫

```bash
touch .gitignore
```

Add this:

```gitignore
node_modules/
.env
.DS_Store
```

---

## ✅ 3. Add files to git

```bash
git add .
```

Commit:

```bash
git commit -m "Initial commit"
```

---

## ✅ 4. Add remote repository

Replace with your repo URL:

```bash
git remote add origin https://github.com/your-username/swagger-node-api.git
```

Verify:

```bash
git remote -v
```

---

## ✅ 5. Push to GitHub

If your branch is **main**:

```bash
git branch -M main
git push -u origin main
```

If it’s **master**:

```bash
git push -u origin master
```

---

## 🎉 Done!

Refresh GitHub → your code is there 🚀

---

# ✔ No dirty state:

git status -z -uall