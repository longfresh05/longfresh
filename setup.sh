#!/bin/bash

# Long Fresh - Quick Git Setup Script
# Run this script to initialize and push to GitHub

echo "======================================"
echo "Long Fresh - GitHub Setup"
echo "======================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed."
    echo "Please install Git first: https://git-scm.com"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Initialize git if not already
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""

# Check if files exist
if [ ! -f "index.html" ]; then
    echo "❌ index.html not found!"
    echo "Make sure you're in the longfresh-github-repo directory"
    exit 1
fi

echo "✅ Files found"
echo ""

# Add all files
echo "📝 Adding files to Git..."
git add .
echo "✅ Files added"
echo ""

# Commit
echo "💾 Creating commit..."
git commit -m "Initial commit: Long Fresh website"
echo "✅ Commit created"
echo ""

# Get GitHub username
echo "Please enter your GitHub username:"
read github_username

# Get repository name
echo ""
echo "Please enter your repository name (e.g., longfresh-website):"
read repo_name

echo ""
echo "======================================"
echo "Next Steps:"
echo "======================================"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Name it: $repo_name"
echo "   Make sure it's PUBLIC (for free GitHub Pages)"
echo "   DON'T initialize with README"
echo ""
echo "3. After creating, run these commands:"
echo ""
echo "   git remote add origin https://github.com/$github_username/$repo_name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Enable GitHub Pages:"
echo "   Go to: https://github.com/$github_username/$repo_name/settings/pages"
echo "   Set source to: main branch, / (root)"
echo ""
echo "5. Your site will be live at:"
echo "   https://$github_username.github.io/$repo_name/"
echo ""
echo "======================================"
echo "✅ Setup Complete!"
echo "======================================"
