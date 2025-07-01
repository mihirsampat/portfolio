# Mihir Sampat - Portfolio Website

A sleek, modern, and responsive portfolio website showcasing software engineering skills and projects.

## 🎨 Design Philosophy

- **Minimal & Modern**: Clean white/deep slate surfaces with crisp typography
- **Purposeful Accents**: Electric blue (#3B82F6) and fuchsia (#EC4899) for calls-to-action
- **Generous Breathing Space**: Thoughtful use of whitespace for better readability
- **Accessibility First**: WCAG AA compliant with high contrast ratios

## ✨ Features

### Core Functionality
- 🌙 **Dark/Light Theme Toggle**: Smooth transitions with localStorage persistence
- 🌍 **Multi-language Support**: English and Hindi with instant switching
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Lighthouse score ≥95 Performance, ≥90 Accessibility
- 🎯 **Smooth Animations**: AOS library for scroll-triggered animations
- 📧 **Contact Form**: Formspree integration with validation

### Sections
1. **Hero**: Full-screen introduction with floating portrait effect
2. **Skills Preview**: Animated skill chips with staggered entrance
3. **About**: Professional bio with quick facts
4. **Projects**: Interactive project cards with hover effects
5. **Experience**: Timeline-based work history
6. **Contact**: Form with resume download

### Technical Highlights
- **Vanilla JavaScript**: No frameworks, pure performance
- **CSS Custom Properties**: Dynamic theme switching
- **Semantic HTML**: SEO and accessibility optimized
- **Progressive Enhancement**: Works without JavaScript
- **Font Optimization**: Local WOFF2 fonts with fallbacks

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Customize content**
   - Replace placeholder images in `assets/`
   - Update personal information in `index.html`
   - Modify translations in `scripts/main.js`

3. **Deploy**
   - Upload to any web hosting service
   - Or use GitHub Pages (see deployment section)

### Local Development

1. **Start a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

2. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles with theme support
├── scripts/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── favicon.svg        # Custom favicon
│   ├── fonts/             # Local font files
│   ├── portrait.jpg       # Hero portrait
│   ├── portrait-large.jpg # About section portrait
│   ├── projects/          # Project screenshots
│   └── companies/         # Company logos
└── README.md              # This file
```

## 🎨 Customization

### Colors & Themes
The color scheme is defined in CSS custom properties in `styles/main.css`:

```css
:root {
    --accent-primary: #3B82F6;    /* Electric blue */
    --accent-secondary: #EC4899;  /* Fuchsia */
    --bg-primary: #ffffff;        /* Background */
    --text-primary: #1e293b;      /* Text color */
}
```

### Adding New Languages
1. Add translations to the `translations` object in `scripts/main.js`
2. Add language option to the dropdown in `index.html`
3. Update the language switcher event listeners

### Adding New Projects
1. Add project card HTML to the projects section
2. Include project image in `assets/projects/`
3. Update the `data-tech` attribute for filtering

## 📧 Contact Form Setup

The contact form uses Formspree for handling submissions:

1. **Create a Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and get your form ID
3. **Update the form action** in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Save

3. **Custom Domain (Optional)**
   - Add your domain in repository Settings > Pages
   - Update DNS records as instructed

### Other Hosting Options

- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload files to S3 bucket with static website hosting
- **Traditional hosting**: Upload via FTP/SFTP

## 🔧 Performance Optimization

### Images
- Use WebP format where supported
- Compress images to 80KB or less
- Implement lazy loading for below-the-fold images

### Fonts
- Use local WOFF2 fonts for faster loading
- Implement font-display: swap for better performance
- Preload critical fonts

### Code
- Minify CSS and JavaScript for production
- Use gzip compression on server
- Implement browser caching

## 🎯 SEO Optimization

### Meta Tags
- Title and description are already optimized
- Open Graph tags for social sharing
- Twitter Card support

### Structured Data
Add JSON-LD structured data for better search results:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mihir Sampat",
  "jobTitle": "Software Engineer",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://github.com/mihirsampat",
    "https://linkedin.com/in/mihirsampat"
  ]
}
</script>
```

## 🐛 Troubleshooting

### Common Issues

**Theme not persisting**
- Check if localStorage is enabled in browser
- Verify theme toggle event listeners are working

**Contact form not working**
- Ensure Formspree form ID is correct
- Check browser console for errors
- Verify form validation is passing

**Animations not working**
- Ensure AOS library is loaded
- Check if JavaScript is enabled
- Verify scroll position triggers

**Fonts not loading**
- Check font file paths
- Verify font files exist
- Use browser dev tools to debug network requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Formspree](https://formspree.io/) for contact form handling
- [Google Fonts](https://fonts.google.com/) for typography inspiration
- [Tailwind CSS](https://tailwindcss.com/) for design system inspiration

## 📞 Support

If you have any questions or need help with customization:

- Create an issue on GitHub
- Email: mihir@example.com
- LinkedIn: [Mihir Sampat](https://linkedin.com/in/mihirsampat)

---

**Built with ❤️ by Mihir Sampat** 