// Main JavaScript for Portfolio Website

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    setupEventListeners() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.translations = {
            en: {
                name: 'Mihir Sampat',
                nav: {
                    home: 'Home',
                    about: 'About',
                    projects: 'Projects',
                    experience: 'Experience',
                    contact: 'Contact'
                },
                hero: {
                    title: 'Mihir Sampat',
                    subtitle: 'Software Engineer & Problem Solver',
                    cta: 'View my work'
                },
                about: {
                    title: 'About Me',
                    bio: {
                        1: "I'm a passionate software engineer with 7 years of experience building scalable solutions and solving complex problems. My journey in technology has taken me from web development to blockchain and cloud infrastructure.",
                        2: "I specialize in Python development, particularly with FastAPI for building high-performance APIs, and have extensive experience with AWS cloud services and PostgreSQL databases.",
                        3: "When I'm not coding, you'll find me tending to my mango grove or exploring new technologies. I believe in writing clean, maintainable code and creating solutions that make a real impact."
                    },
                    facts: {
                        age: 'Age 30',
                        location: 'Mumbai, India',
                        experience: '7 yrs experience',
                        grove: 'Owns a mango grove'
                    }
                },
                projects: {
                    title: 'Featured Projects',
                    demo: 'Live Demo',
                    repo: 'Repo',
                    project1: {
                        title: 'E-Commerce API Platform',
                        description: 'A high-performance REST API built with FastAPI, featuring user authentication, product management, and payment processing with PostgreSQL and Redis caching.'
                    },
                    project2: {
                        title: 'DeFi Yield Farming Protocol',
                        description: 'A decentralized finance protocol for yield farming with smart contracts written in Solidity, featuring liquidity pools and automated market making.'
                    },
                    project3: {
                        title: 'Serverless Data Pipeline',
                        description: 'A serverless data processing pipeline using AWS Lambda, S3, and DynamoDB for real-time analytics and reporting with automated scaling.'
                    }
                },
                experience: {
                    title: 'Experience',
                    job1: {
                        title: 'Senior Software Engineer',
                        company: 'TechCorp Solutions',
                        dates: '2022 - Present',
                        achievement1: 'Led development of microservices architecture serving 1M+ users',
                        achievement2: 'Implemented CI/CD pipelines reducing deployment time by 60%',
                        achievement3: 'Mentored 5 junior developers and conducted code reviews'
                    },
                    job2: {
                        title: 'Full Stack Developer',
                        company: 'StartupXYZ',
                        dates: '2020 - 2022',
                        achievement1: 'Built and deployed 3 major features from concept to production',
                        achievement2: 'Optimized database queries improving performance by 40%',
                        achievement3: 'Collaborated with design team to implement responsive UI/UX'
                    },
                    job3: {
                        title: 'Junior Developer',
                        company: 'Digital Innovations',
                        dates: '2018 - 2020',
                        achievement1: 'Developed REST APIs and frontend components',
                        achievement2: 'Participated in agile development cycles',
                        achievement3: 'Contributed to open source projects'
                    }
                },
                contact: {
                    title: 'Get In Touch',
                    form: {
                        name: 'Name',
                        email: 'Email',
                        message: 'Message',
                        submit: 'Send Message'
                    },
                    resume: 'Download Résumé'
                },
                footer: {
                    copyright: '© 2025 Mihir Sampat'
                }
            },
            hi: {
                name: 'मिहिर संपत',
                nav: {
                    home: 'होम',
                    about: 'मेरे बारे में',
                    projects: 'प्रोजेक्ट्स',
                    experience: 'अनुभव',
                    contact: 'संपर्क'
                },
                hero: {
                    title: 'मिहिर संपत',
                    subtitle: 'सॉफ्टवेयर इंजीनियर और समस्या समाधानकर्ता',
                    cta: 'मेरा काम देखें'
                },
                about: {
                    title: 'मेरे बारे में',
                    bio: {
                        1: "मैं एक जुनूनी सॉफ्टवेयर इंजीनियर हूं जिसे स्केलेबल समाधान बनाने और जटिल समस्याओं को हल करने में 7 साल का अनुभव है। प्रौद्योगिकी में मेरी यात्रा ने मुझे वेब विकास से ब्लॉकचेन और क्लाउड इन्फ्रास्ट्रक्चर तक ले जाया है।",
                        2: "मैं पायथन विकास में विशेषज्ञता रखता हूं, विशेष रूप से उच्च-प्रदर्शन API बनाने के लिए FastAPI के साथ, और AWS क्लाउड सेवाओं और PostgreSQL डेटाबेस के साथ व्यापक अनुभव है।",
                        3: "जब मैं कोडिंग नहीं कर रहा होता, तो आप मुझे अपने आम के बाग की देखभाल करते या नई तकनीकों की खोज करते पाएंगे। मैं स्वच्छ, बनाए रखने योग्य कोड लिखने और वास्तविक प्रभाव डालने वाले समाधान बनाने में विश्वास करता हूं।"
                    },
                    facts: {
                        age: 'उम्र 30',
                        location: 'मुंबई, भारत',
                        experience: '7 साल का अनुभव',
                        grove: 'आम का बाग है'
                    }
                },
                projects: {
                    title: 'प्रमुख प्रोजेक्ट्स',
                    demo: 'लाइव डेमो',
                    repo: 'रिपॉजिटरी',
                    project1: {
                        title: 'ई-कॉमर्स API प्लेटफॉर्म',
                        description: 'FastAPI के साथ बनाया गया एक उच्च-प्रदर्शन REST API, जिसमें PostgreSQL और Redis कैशिंग के साथ उपयोगकर्ता प्रमाणीकरण, उत्पाद प्रबंधन और भुगतान प्रसंस्करण शामिल है।'
                    },
                    project2: {
                        title: 'DeFi यील्ड फार्मिंग प्रोटोकॉल',
                        description: 'Solidity में लिखे गए स्मार्ट कॉन्ट्रैक्ट्स के साथ यील्ड फार्मिंग के लिए एक विकेंद्रीकृत वित्त प्रोटोकॉल, जिसमें तरलता पूल और स्वचालित बाजार निर्माण शामिल है।'
                    },
                    project3: {
                        title: 'सर्वरलेस डेटा पाइपलाइन',
                        description: 'AWS Lambda, S3, और DynamoDB का उपयोग करके रीयल-टाइम एनालिटिक्स और रिपोर्टिंग के लिए एक सर्वरलेस डेटा प्रोसेसिंग पाइपलाइन जिसमें स्वचालित स्केलिंग है।'
                    }
                },
                experience: {
                    title: 'अनुभव',
                    job1: {
                        title: 'सीनियर सॉफ्टवेयर इंजीनियर',
                        company: 'टेककॉर्प सॉल्यूशंस',
                        dates: '2022 - वर्तमान',
                        achievement1: '1M+ उपयोगकर्ताओं की सेवा करने वाले माइक्रोसर्विस आर्किटेक्चर का विकास नेतृत्व किया',
                        achievement2: 'CI/CD पाइपलाइन लागू की जिससे डिप्लॉयमेंट समय 60% कम हो गया',
                        achievement3: '5 जूनियर डेवलपर्स का मार्गदर्शन किया और कोड रिव्यू आयोजित किए'
                    },
                    job2: {
                        title: 'फुल स्टैक डेवलपर',
                        company: 'स्टार्टअपXYZ',
                        dates: '2020 - 2022',
                        achievement1: 'कॉन्सेप्ट से प्रोडक्शन तक 3 प्रमुख फीचर्स बनाए और डिप्लॉय किए',
                        achievement2: 'डेटाबेस क्वेरीज़ को ऑप्टिमाइज़ किया जिससे प्रदर्शन 40% बेहतर हुआ',
                        achievement3: 'रेस्पॉन्सिव UI/UX लागू करने के लिए डिज़ाइन टीम के साथ सहयोग किया'
                    },
                    job3: {
                        title: 'जूनियर डेवलपर',
                        company: 'डिजिटल इनोवेशंस',
                        dates: '2018 - 2020',
                        achievement1: 'REST API और फ्रंटएंड कंपोनेंट्स विकसित किए',
                        achievement2: 'एजाइल डेवलपमेंट साइकल में भाग लिया',
                        achievement3: 'ओपन सोर्स प्रोजेक्ट्स में योगदान दिया'
                    }
                },
                contact: {
                    title: 'संपर्क करें',
                    form: {
                        name: 'नाम',
                        email: 'ईमेल',
                        message: 'संदेश',
                        submit: 'संदेश भेजें'
                    },
                    resume: 'रिज्यूमे डाउनलोड करें'
                },
                footer: {
                    copyright: '© 2025 मिहिर संपत'
                }
            }
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        this.updateContent();
        this.updateLanguageButton();
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }

    updateLanguageButton() {
        const currentLangElement = document.querySelector('.current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = this.currentLang.toUpperCase();
        }
    }

    setupEventListeners() {
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation Active State
function setupNavigationActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Form Handling
class FormHandler {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.setupForm();
    }

    setupForm() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.setupFormValidation();
        }
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        this.clearError(field);

        // Validation rules
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        if (field.required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    showError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    clearError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        // Show loading state
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const formData = new FormData(this.form);
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showToast('Thanks! I\'ll reply soon.', 'success');
                this.form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            this.showToast('Sorry, something went wrong. Please try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }
}

// Toast Notifications
class ToastManager {
    constructor() {
        this.toast = document.getElementById('toast');
    }

    show(message, type = 'info') {
        if (!this.toast) return;

        const messageElement = this.toast.querySelector('.toast-message');
        messageElement.textContent = message;

        // Set type-specific styling
        this.toast.className = `toast ${type}`;
        
        // Show toast
        this.toast.classList.add('show');

        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.hide();
        }, 5000);
    }

    hide() {
        if (this.toast) {
            this.toast.classList.remove('show');
        }
    }
}

// Parallax Effect for Hero Portrait
function setupParallax() {
    const portrait = document.querySelector('.portrait-img');
    if (!portrait) return;

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX - innerWidth / 2) / innerWidth;
        const y = (clientY - innerHeight / 2) / innerHeight;
        
        portrait.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const themeManager = new ThemeManager();
    const languageManager = new LanguageManager();
    const formHandler = new FormHandler();
    const toastManager = new ToastManager();

    // Setup other functionality
    setupSmoothScrolling();
    setupNavigationActiveState();
    setupParallax();
    setupMobileMenu();

    // Make utilities globally available
    window.scrollToSection = scrollToSection;
    window.showToast = (message, type) => toastManager.show(message, type);
});

// Handle page visibility changes for better performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'assets/portrait.jpg',
        'assets/portrait-large.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload function
preloadImages(); 