# Vamsi Krapa - Portfolio Website

Modern, animated portfolio with dark/light mode toggle and Google Sheets contact form integration.

## 🎨 Features

- ✨ **Dark/Light Mode Toggle** - Smooth theme switching with persistent preference
- 🎭 **Rich Animations** - Gradient animations, hover effects, 3D card transforms
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 📊 **Google Analytics** - GTM + GA4 tracking integrated
- 📧 **Google Sheets Contact Form** - Contact submissions go directly to your Google Sheet
- 📄 **Resume Download** - Direct PDF download button
- 🎨 **Custom Color Scheme**:
  - Dark mode: Deep navy (#0a0e27)
  - Light mode: Warm cream (#f2e5b3)
  - Accent: Teal gradient (#00bfa6)

## 📁 File Structure

```
portfolio-new/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with dark/light mode
├── script.js           # JavaScript for interactions and form
├── assets/             # Folder for resume PDF
│   └── README.md
└── README.md
```

## 🚀 Setup Instructions

### 1. Add Your Resume
- Upload your `resume.pdf` to the `/assets/` folder
- The download button will automatically work

### 2. Test Contact Form
- Fill out the contact form on your site
- Check your Google Sheet "Portfolio Contacts"
- Data should appear: Name | Email | Subject | Message | Timestamp

### 3. Enable GitHub Pages
1. Go to repository **Settings**
2. Navigate to **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Click **Save**

### 4. View Your Site
- GitHub Pages URL: `https://vamsikrapa.github.io/portfolio-new/`
- Give it 2-3 minutes to deploy

## 🎯 What's Included

### Sections:
- **Hero** - Eye-catching intro with stats and CTAs
- **About** - Your professional background
- **Experience** - Three key projects with cards
- **Certifications** - All 7 certifications (6 completed + PMP in progress)
- **Testimonials** - Three detailed testimonials
- **Publications** - WhatsApp encryption paper
- **Contact** - Info display + working Google Sheets form

### Buttons:
- ✅ Download Resume (links to `/assets/resume.pdf`)
- ✅ LinkedIn Profile (links to your LinkedIn)
- ✅ Theme Toggle (top-right corner)

### Animations:
- Gradient text animations
- Hover tilt effects on cards
- Smooth scroll behavior
- Fade-in on scroll for sections
- Parallax hero effect
- Button transformations

## 🔧 Customization

### Update Content
- Edit `index.html` to change text, add projects, update info

### Change Colors
- Edit CSS variables in `styles.css` (lines 1-17)

### Add More Sections
- Copy a section block in `index.html`
- Add corresponding styles in `styles.css`

## 🌐 Custom Domain Setup (Later)

When ready to use `new.vamsikrapa.in`:

### 1. Add CNAME File
Create `CNAME` file in repo root with:
```
new.vamsikrapa.in
```

### 2. Update DNS
In your domain provider:
- Type: CNAME
- Name: new
- Value: vamsikrapa.github.io
- TTL: 3600

### 3. Enable in GitHub Pages
- Go to Settings > Pages
- Custom domain: `new.vamsikrapa.in`
- Save

Wait 10-15 minutes for DNS propagation.

## 📊 Google Sheets Integration

Your contact form is connected to:
- **Script URL**: `https://script.google.com/macros/s/AKfycbyMj8fOYIVE9WP7qFFiRho-ip2d7PBhGKAlD4a2Wz2eI_O1oZuHuqz15L1B57T_3tA/exec`
- **Sheet**: "Portfolio Contacts"

All form submissions are automatically logged with timestamp.

## 🎨 Theme Toggle

- **Default**: Dark mode
- **Storage**: User preference saved in localStorage
- **Icon**: Sun (light mode) / Moon (dark mode)
- **Position**: Top-right corner, fixed

## 📱 Mobile Responsive

- Hamburger menu for mobile
- Stacked layouts on small screens
- Touch-friendly buttons
- Optimized font sizes

## ✅ Checklist

- [x] HTML structure complete
- [x] CSS with dark/light mode
- [x] JavaScript with animations
- [x] Google Sheets form integration
- [x] Google Analytics (GTM + GA4)
- [x] Assets folder created
- [ ] **Upload resume.pdf to /assets/**
- [ ] **Enable GitHub Pages**
- [ ] **Test contact form**
- [ ] **Test on mobile**

## 🚀 Next Steps

1. Upload your resume to `/assets/resume.pdf`
2. Enable GitHub Pages (Settings > Pages)
3. Test the site at `https://vamsikrapa.github.io/portfolio-new/`
4. Fill out contact form to test Google Sheets integration
5. Check responsiveness on mobile
6. When happy, add CNAME for custom domain

---

Built with ❤️ by Vamsi Krapa

**Tech Stack**: HTML, CSS, JavaScript, Google Sheets API, GitHub Pages