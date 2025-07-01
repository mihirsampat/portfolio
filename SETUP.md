# Portfolio Setup Guide

## 🚀 Quick Setup Instructions

Your portfolio website is now ready! Here's what you need to do to customize it for your needs:

### 1. Replace Placeholder Content

#### Images
Replace the placeholder files in the `assets/` directory with your actual images:

- **`assets/portrait.jpg`** - Your hero portrait (400x400px, 80KB max)
- **`assets/portrait-large.jpg`** - About section portrait (520x520px, 120KB max)
- **`assets/projects/project1.jpg`** - Project screenshots (16:9 ratio, 100KB max each)
- **`assets/companies/company1.png`** - Company logos (80x80px, 20KB max each)
- **`assets/resume.pdf`** - Your resume (2MB max)

#### Personal Information
Update the following files with your information:

1. **`index.html`** - Update name, tagline, and project details
2. **`scripts/main.js`** - Update translations and personal info
3. **`README.md`** - Update links and contact information

### 2. Configure Contact Form

1. Go to [Formspree.io](https://formspree.io) and create an account
2. Create a new form and get your form ID
3. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Update Links

Replace placeholder URLs with your actual profiles:
- GitHub: `https://github.com/mihirsampat`
- LinkedIn: `https://linkedin.com/in/mihirsampat`
- Update domain in `sitemap.xml` and `robots.txt`

### 4. Customize Colors (Optional)

Edit the CSS variables in `styles/main.css`:
```css
:root {
    --accent-primary: #3B82F6;    /* Your primary color */
    --accent-secondary: #EC4899;  /* Your secondary color */
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch" > main branch
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the entire folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Option 3: Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Automatic deployments on every push
3. Custom domain support included

### Option 4: Traditional Hosting
1. Upload files via FTP/SFTP to your web server
2. Ensure all files are in the root directory
3. Configure your domain to point to the hosting

## 🎨 Customization Guide

### Adding New Projects
1. Add project image to `assets/projects/`
2. Copy and modify a project card in `index.html`
3. Update the `data-tech` attribute for filtering

### Adding New Languages
1. Add translations to the `translations` object in `scripts/main.js`
2. Add language option to the dropdown in `index.html`
3. Test the language switching functionality

### Modifying Animations
- Edit AOS (Animate On Scroll) attributes in HTML
- Customize animation timing in `scripts/main.js`
- Modify CSS transitions in `styles/main.css`

## 🔧 Performance Optimization

### Before Deployment
1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Minify CSS/JS**: Use online minifiers or build tools
3. **Enable Gzip**: Configure your server for compression
4. **Set Cache Headers**: Configure browser caching

### Testing Performance
1. Use Google PageSpeed Insights
2. Test with Lighthouse in Chrome DevTools
3. Aim for 95+ Performance score

## 📱 Mobile Testing

Test your site on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes using browser dev tools

## 🐛 Troubleshooting

### Common Issues

**Images not loading**
- Check file paths and names
- Ensure images are in the correct directories
- Verify file permissions

**Theme not switching**
- Check browser console for JavaScript errors
- Verify localStorage is enabled
- Test in incognito mode

**Contact form not working**
- Verify Formspree form ID is correct
- Check browser console for errors
- Test form validation

**Animations not working**
- Ensure AOS library is loaded
- Check if JavaScript is enabled
- Verify scroll triggers are correct

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Review the README.md for detailed documentation
3. Create an issue on GitHub
4. Contact: mihir@example.com

## 🎉 Success!

Once deployed, your portfolio will feature:
- ✅ Responsive design for all devices
- ✅ Dark/light theme switching
- ✅ Multi-language support (EN/HI)
- ✅ Smooth animations and transitions
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Fast loading times
- ✅ Accessibility compliant

Your portfolio is now ready to impress potential employers and clients! 