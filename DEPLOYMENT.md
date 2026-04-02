# 🚀 GitHub Pages Deployment Guide

## Complete Step-by-Step Instructions

### Prerequisites
- [ ] GitHub account (create at https://github.com)
- [ ] Git installed on your computer (optional, can use GitHub web)

---

## Method 1: Using GitHub Web Interface (Easiest - No Git Required)

### Step 1: Create New Repository

1. Go to https://github.com
2. Log in to your account
3. Click the **+** icon (top right) → **New repository**
4. Fill in:
   - **Repository name**: `longfresh-website` (or any name you prefer)
   - **Description**: "Long Fresh - India's 1st Flavoured Clove Mouth Freshener"
   - **Public** or **Private**: Choose Public (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - **License**: Choose MIT
5. Click **Create repository**

### Step 2: Upload Files

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop ALL these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `.gitignore`
3. Scroll down, add commit message: "Initial website upload"
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (top right)
2. In left sidebar, click **Pages**
3. Under "Source":
   - Branch: Select **main** (or master)
   - Folder: Select **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes
6. Refresh the page
7. You'll see: "Your site is live at https://[username].github.io/[repo-name]/"

### Step 4: Test Your Site

1. Click the live URL
2. Your Long Fresh website should be live! 🎉

---

## Method 2: Using Git Command Line (For Developers)

### Step 1: Initialize Git

```bash
cd /path/to/longfresh-github-repo

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Long Fresh website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository named `longfresh-website`
3. **Don't** initialize with README (we already have files)
4. Click **Create repository**

### Step 3: Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/longfresh-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **main** branch, **/ (root)** folder
3. Click **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/longfresh-website/`

---

## Method 3: Using GitHub Desktop (Visual Tool)

### Step 1: Download GitHub Desktop

1. Download from https://desktop.github.com
2. Install and sign in

### Step 2: Create Repository

1. **File** → **New Repository**
2. Name: `longfresh-website`
3. Local path: Choose where to save
4. Click **Create Repository**

### Step 3: Add Files

1. Copy all files (index.html, style.css, script.js) to the repository folder
2. GitHub Desktop will auto-detect changes
3. Write commit message: "Initial website"
4. Click **Commit to main**

### Step 4: Publish to GitHub

1. Click **Publish repository**
2. Uncheck "Keep this code private" (for free Pages)
3. Click **Publish repository**

### Step 5: Enable Pages

1. Go to your repo on GitHub.com
2. **Settings** → **Pages**
3. Enable Pages on **main** branch
4. Get your live URL!

---

## 🔧 After Deployment

### Configure Forms (Important!)

1. Sign up at https://formspree.io
2. Create a form
3. Get your form ID
4. Edit `index.html` on GitHub:
   - Click on `index.html`
   - Click pencil icon (Edit)
   - Find: `action=\"https://formspree.io/f/YOUR_FORM_ID\"`
   - Replace `YOUR_FORM_ID` with your actual ID
   - Do this for BOTH forms (distributor and contact)
   - Commit changes
5. Wait 1-2 minutes for GitHub Pages to rebuild
6. Forms will now work!

### Custom Domain (Optional)

If you have a domain (e.g., www.longfresh.com):

1. In GitHub repo, create file named `CNAME`
2. Content: `www.longfresh.com`
3. In your domain settings, add CNAME record:
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`
4. Wait for DNS propagation (5-30 minutes)
5. Your site will be at your custom domain!

---

## 📝 Making Updates

### Using GitHub Web:

1. Go to your repository
2. Click on file you want to edit
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, commit changes
6. Wait 1-2 minutes, changes go live!

### Using Git:

```bash
# Make your changes to files
# Then:
git add .
git commit -m "Updated [what you changed]"
git push
```

---

## ✅ Checklist Before Going Live

- [ ] All files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Site loads at GitHub Pages URL
- [ ] All images loading correctly
- [ ] Falling leaves animation working
- [ ] Smooth scrolling working
- [ ] Mobile responsive (test on phone)
- [ ] Formspree forms configured
- [ ] Contact information correct
- [ ] Test both forms submit successfully

---

## 🆘 Troubleshooting

### Site shows 404 error
- Wait 2-3 minutes after enabling Pages
- Check Pages is enabled on correct branch (main)
- Make sure repository is Public

### Styles not loading
- Check `style.css` is in root folder
- Check filename is exactly `style.css` (case-sensitive)
- Clear browser cache

### Forms not working
- Set up Formspree and add your form ID
- Check form action URL is correct
- Test form submission

### Images not showing
- Images load from external URLs
- Check internet connection
- Verify URLs are accessible

---

## 📊 Your Site URLs

After deployment, your site will be at:

**GitHub Pages URL:**
```
https://[YOUR_GITHUB_USERNAME].github.io/[REPO_NAME]/
```

**Example:**
```
https://longfresh.github.io/longfresh-website/
```

---

## 🎉 Success!

Once deployed, share your link:
- Share on social media
- Add to business cards
- Use in marketing materials
- Send to potential distributors

Your Long Fresh website is now live and accessible worldwide! 🌍

---

## 📞 Need Help?

- GitHub Pages Docs: https://pages.github.com
- Formspree Docs: https://help.formspree.io
- Contact: longfresh05@gmail.com

---

**Last Updated**: April 2, 2026  
**Version**: 1.0  
**Platform**: GitHub Pages
