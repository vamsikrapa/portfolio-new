// Google Sheets Form URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMj8fOYIVE9WP7qFFiRho-ip2d7PBhGKAlD4a2Wz2eI_O1oZuHuqz15L1B57T_3tA/exec';

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  }
});

// Contact Form Submission to Google Sheets
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    subject: contactForm.subject.value,
    message: contactForm.message.value
  };
  
  formStatus.textContent = 'Sending...';
  formStatus.className = '';
  
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    formStatus.textContent = '✓ Message sent successfully!';
    formStatus.className = 'success';
    contactForm.reset();
    
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = '';
    }, 5000);
    
  } catch (error) {
    formStatus.textContent = '✗ Error sending message. Please try again.';
    formStatus.className = 'error';
    console.error('Error:', error);
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.style.padding = '15px 5%';
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '20px 5%';
    navbar.style.boxShadow = 'none';
  }
});

// Add animation on scroll for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.right = '5%';
      navLinks.style.background = body.classList.contains('dark-mode') 
        ? 'rgba(10, 14, 39, 0.95)' 
        : 'rgba(242, 229, 179, 0.95)';
      navLinks.style.padding = '20px';
      navLinks.style.borderRadius = '10px';
      navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    }
  });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  if (hero && scrolled < 800) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - scrolled / 600;
  }
});

// Add hover tilt effect to cards
const cards = document.querySelectorAll('.experience-card, .cert-card, .testimonial-card, .publication-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

console.log('🚀 Portfolio loaded successfully!');
console.log('📊 Contact form connected to Google Sheets');