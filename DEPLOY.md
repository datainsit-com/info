# Deployment Guide for Blue Weave Consulting

This guide provides step-by-step instructions to deploy your React + TypeScript application to GitHub Pages with a custom domain.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git
- GitHub account
- Custom domain (optional)

## Project Structure

This project is built with:
- **React 18.3.1** with TypeScript
- **Vite 5.4.19** as build tool
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **shadcn/ui** component library

## Quick Deployment

### 1. Install Dependencies

```bash
npm install
```

### 2. Build and Deploy

```bash
npm run deploy
```

This command will:
- Run `npm run build` (predeploy script)
- Build the project using Vite
- Deploy the `dist` folder to the `gh-pages` branch using `gh-pages` package

## Detailed Setup Instructions

### 1. Initial Repository Setup

1. Create a new repository on GitHub named `blue-weave-consulting`
2. Push your code to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/datainsit/blue-weave-consulting.git
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select "Deploy from a branch"
4. Choose the `gh-pages` branch and `/ (root)` folder
5. Click **Save**

### 3. Deploy Your Application

Run the deployment command:

```bash
npm run deploy
```

Your site will be available at: `https://datainsit.github.io/blue-weave-consulting/`

### 4. Custom Domain Setup (Optional)

#### A. Configure GitHub Pages for Custom Domain

1. In your repository, go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain: `datainsit.com`
3. Check **Enforce HTTPS**
4. GitHub will create a `CNAME` file in your repository

#### B. Configure DNS Records

For your custom domain, add these DNS records:

**For Apex Domain (datainsit.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For Subdomain (www.datainsit.com):**
```
Type: CNAME
Name: www
Value: datainsit.github.io
```

#### C. Update package.json (if using custom domain)

If using a custom domain, update the homepage in `package.json`:

```json
{
  "homepage": "https://your-custom-domain.com"
}
```

And update `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run predeploy` | Automatically run before deploy (builds the project) |
| `npm run deploy` | Deploy to GitHub Pages |

## React Router Configuration

This project includes special configuration for React Router to work with GitHub Pages:

1. **404.html**: Redirects all routes to the main app
2. **index.html**: Contains script to handle the redirect back to proper routes
3. **vite.config.ts**: Configured with the correct base path

## Troubleshooting

### Common Issues

1. **Blank page after deployment**
   - Check that the `base` path in `vite.config.ts` matches your GitHub Pages URL
   - Ensure the `homepage` in `package.json` is correct

2. **React Router not working**
   - Verify that `404.html` exists in the `public` folder
   - Check that the redirect script is in `index.html`

3. **Assets not loading**
   - Confirm the base path configuration in `vite.config.ts`
   - Check browser developer tools for 404 errors

4. **Custom domain not working**
   - Verify DNS records are properly configured
   - Check that the `CNAME` file exists in your repository
   - Wait for DNS propagation (can take up to 24 hours)

### Force Refresh Cache

If you see old content after deployment:

```bash
# Clear npm cache
npm cache clean --force

# Force rebuild and redeploy
rm -rf node_modules dist
npm install
npm run deploy
```

## Environment Variables

For environment-specific configurations, you can use:

- `.env.local` - Local development
- `.env.production` - Production build
- `.env.development` - Development build

Example `.env.production`:
```
VITE_API_URL=https://api.yourdomain.com
VITE_APP_TITLE=Blue Weave Consulting
```

## Monitoring and Analytics

Consider adding:
- Google Analytics
- Error monitoring (Sentry)
- Performance monitoring
- SEO optimization

## Security Considerations

- Keep dependencies updated: `npm audit fix`
- Use HTTPS (enforced by GitHub Pages)
- Validate all user inputs
- Implement proper error boundaries

## Support

For issues related to:
- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **React Router**: [React Router Documentation](https://reactrouter.com/)
- **Vite**: [Vite Documentation](https://vitejs.dev/)

## Deployment Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Build successful (`npm run build`)
- [ ] Repository created and code pushed to GitHub
- [ ] GitHub Pages configured in repository settings
- [ ] Deployment successful (`npm run deploy`)
- [ ] Site accessible at GitHub Pages URL
- [ ] Custom domain configured (if applicable)
- [ ] DNS records updated (if using custom domain)
- [ ] HTTPS enforced
- [ ] All routes working properly
- [ ] Contact form functionality tested

---

## Automated Deployment with GitHub Actions (Optional)

For automatic deployment on every push to main:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

This will automatically deploy your site whenever you push changes to the main branch.