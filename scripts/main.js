// Main JavaScript for Portfolio Website

// Utility functions for dynamic calculations
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    console.log(`calculateAge(${birthDate}): today=${today.toDateString()}, birth=${birth.toDateString()}, age=${age}`);
    return age;
}

function calculateExperience(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    let years = today.getFullYear() - start.getFullYear();
    const monthDiff = today.getMonth() - start.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < start.getDate())) {
        years--;
    }
    
    console.log(`calculateExperience(${startDate}): today=${today.toDateString()}, start=${start.toDateString()}, years=${years}`);
    return years;
}

// Skills Data Structure
const skillsData = {
    python: {
        name: 'Python',
        icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>`,
        subSkills: [
            { name: 'Pandas', icon: '📊' },
            { name: 'NumPy', icon: '🔢' },
            { name: 'FastAPI', icon: '⚡' },
            { name: 'Flask', icon: '🍶' },
            { name: 'Matplotlib', icon: '📈' },
            { name: 'IBAPI', icon: '📈' }
        ]
    },
    javascript: {
        name: 'JavaScript',
        icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>`,
        subSkills: [
            { name: 'React', icon: '⚛️' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Next.js', icon: '⚡' }
        ]
    },
    aws: {
        name: 'AWS',
        icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>`,
        subSkills: [
            { name: 'Lambda', icon: 'λ' },
            { name: 'CodePipeline', icon: '🔗' },
            { name: 'CodeBuild', icon: '🔨' },
            { name: 'CodeDeploy', icon: '🚀' },
            { name: 'SES', icon: '📧' },
            { name: 'EC2', icon: '🖥️' },
            { name: 'S3', icon: '🪣' },
            { name: 'RDS', icon: '🗄️' },
            { name: 'DynamoDB', icon: '⚡' },
            { name: 'VPC', icon: '🌐' }
        ]
    },
    docker: {
        name: 'Docker',
        icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>`,
        subSkills: []
    },
    sql: {
        name: 'SQL',
        icon: `<path d="M4 7h16M4 11h16M4 15h16M4 19h16" stroke="currentColor" stroke-width="2" fill="none"/>`,
        subSkills: [
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'MySQL', icon: '🐬' }
        ]
    },
    solidity: {
        name: 'Solidity',
        icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none"/>`,
        subSkills: []
    }
};

// Projects Data Structure
const projectsData = [
  {
    title: 'FastAPI URL Shortener',
    description: 'A robust URL shortener service built with FastAPI, PostgreSQL, and SQLAlchemy. Features JWT authentication, analytics tracking, user management, and comprehensive API documentation with Swagger UI.',
    image: 'assets/projects/project1.jpg',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Alembic'],
    demo: '#',
    repo: 'https://github.com/mihirsampat/fastapi-url-shortener',
    hasDemo: false
  }
];

// Experience Data Structure
const experienceData = [
  {
    title: 'Director of Software Engineering',
    company: 'Adaptive Investment Solutions',
    location: 'Boston, Massachusetts, United States · Remote',
    dates: 'Nov 2023 - Present',
    duration: '1 yr 9 mos',
    logo: 'assets/companies/company1.jpeg',
    achievements: [
      'Lead a 12-person, pan-India/Boston engineering org (design, FE, BE, infra, data)',
      'Slashed cloud spend from USD 200k → 80k by migrating monolith to Docker-based microservices & AWS Lambda',
      'Own 99%+ uptime SLA; platform ingests 1TB data/day with < 250ms P95 latency',
      'Productised research team\'s option-hedging logic into Market Shield—drove new ARR (confidential)',
      'Raised hiring bar: instituted code-review rubric; attrition held below 5%'
    ],
    skills: ['Python', 'AWS', 'Docker', 'Microservices', 'Team Leadership', 'Jira', 'CI/CD']
  },
  {
    title: 'Senior Software Developer',
    company: 'Adaptive Investment Solutions',
    location: 'Boston, Massachusetts, United States · Remote',
    dates: 'Apr 2022 - Nov 2023',
    duration: '1 yr 8 mos',
    logo: 'assets/companies/company1.jpeg',
    achievements: [
      'Built Market Shield (Python, AWS): protects client equity portfolios; cut API response from 20s → 3s',
      'Deployed on-the-fly beta/volatility calc via linear regression on streaming data',
      'Mentored two juniors; one promoted to Software Developer II within nine months',
      'Leveraged Next.JS and React to create responsive frontend for data visualization and decision support',
      'Collaborated with data scientists to develop and deploy ML models for market trend prediction',
      'Utilized py_vollib library in algorithms to hedge user portfolios and optimized lambda functions'
    ],
    skills: ['Python', 'Next.js', 'React', 'PostgreSQL', 'AWS', 'Jira', 'Machine Learning', 'py_vollib']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Adaptive Investment Solutions',
    location: 'Boston, Massachusetts, United States · Remote',
    dates: 'Aug 2021 - Apr 2022',
    duration: '9 mos',
    logo: 'assets/companies/company1.jpeg',
    achievements: [
      'Delivered CI/CD pipelines, API Gateway, five internal Python libraries, and 100GB/day data-scraping service',
      'Collaborated with UX to improve dashboard load time by 30% (A/B test, n=1k users)',
      'Designed and developed entire backend stack using Python for real-time analysis of massive market data',
      'Implemented multi-account AWS infrastructure and development pipeline',
      'Managed PostgreSQL databases, optimizing performance and ensuring data consistency'
    ],
    skills: ['Python', 'AWS', 'React', 'PostgreSQL', 'SQL', 'CI/CD', 'API Gateway']
  },
  {
    title: 'Consultant',
    company: 'Adaptive Investment Solutions',
    location: 'Remote',
    dates: 'Nov 2020 - Aug 2021',
    duration: '10 mos',
    logo: 'assets/companies/company1.jpeg',
    achievements: [
      'Provided technical consulting and development services for fintech solutions',
      'Collaborated on Python-based data processing and AWS infrastructure projects'
    ],
    skills: ['Python', 'AWS', 'React', 'Process Improvement']
  },
  {
    title: 'Data Engineer',
    company: 'CRG Solutions Pvt. Ltd',
    location: 'Mumbai, Maharashtra, India · On-site',
    dates: 'Jan 2021 - Jul 2021',
    duration: '7 mos',
    logo: 'assets/companies/company2.png',
    achievements: [
      'Processed 2TB/day marketing data in PySpark for targeted-ads pipeline; boosted campaign CTR by ~8%',
      'Developed and maintained PySpark jobs for processing large volumes of user data',
      'Designed and implemented ETL processes to extract, transform, and load data into centralized data lake on AWS',
      'Optimized performance of big data processing tasks, ensuring timely completion and efficient resource utilization',
      'Ensured data security and compliance with data protection regulations'
    ],
    skills: ['PySpark', 'Python', 'AWS', 'SQL', 'Tableau', 'ETL', 'Big Data']
  },
  {
    title: 'Project Trainee',
    company: 'CRG Solutions Pvt. Ltd',
    location: 'Mumbai, Maharashtra, India',
    dates: 'Jul 2020 - Jan 2021',
    duration: '7 mos',
    logo: 'assets/companies/company2.png',
    achievements: [
      'Assisted in data processing and analysis tasks',
      'Learned PySpark and big data technologies',
      'Supported the data engineering team in various projects'
    ],
    skills: ['Python', 'AWS', 'React', 'Process Improvement']
  },
  {
    title: 'Software Engineer',
    company: 'Autosys Industrial Solutions Pvt. Ltd.',
    location: 'Mumbai Area, India · On-site',
    dates: 'Dec 2016 - Sep 2018',
    duration: '1 yr 10 mos',
    logo: 'assets/companies/company3.png',
    achievements: [
      'Developed sensor-data acquisition for manufacturing vertical; integrated with SCADA to cut downtime 12%',
      'Developed statistical solutions for analyzing raw industrial current data using Python and statistical packages',
      'Implemented data ingestion pipelines, ensuring data integrity and quality',
      'Designed and developed backend services using Python and React for data visualization and analysis',
      'Implemented and maintained database structures using MySQL, optimizing performance and ensuring data security',
      'Deployed and managed applications on AWS, leveraging cloud services for scalability and cost optimization'
    ],
    skills: ['Python', 'MySQL', 'AWS', 'React', 'SCADA', 'Data Analysis', 'Industrial Systems']
  }
];

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
        console.log('LanguageManager constructor called');
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
                skills: {
                    title: 'Skills & Technologies',
                    subtitle: 'Technologies I work with to build scalable solutions'
                },
                about: {
                    title: 'About Me',
                    bio: {
                        1: "I'm <strong>Mihir R. Sampat</strong>, a <strong>Mumbai-based Director of Software Engineering</strong> with <strong>8+ years</strong> turning <strong>fintech concepts</strong> into <strong>production-ready, cloud-native platforms</strong>.",
                        2: "My expertise blends deep <strong>Python</strong>, <strong>Kubernetes</strong>, <strong>serverless</strong>, and <strong>AWS/GCP architecture</strong> to build <strong>event-driven microservices</strong> that ingest <strong>terabytes</strong>, sustain <strong>sub-second latencies</strong>, and stay <strong>fault-tolerant</strong> during market turbulence.",
                        3: "I define <strong>technical vision</strong>, <strong>mentor teams</strong>, and embed <strong>automation</strong>—from <strong>infrastructure-as-code</strong> to <strong>CI/CD</strong>—so every release is <strong>secure</strong>, <strong>auditable</strong>, and <strong>on schedule</strong>.",
                        4: "If your organisation values <strong>reliability</strong>, <strong>speed</strong>, and <strong>disciplined engineering</strong>, let's explore how I can help drive your next stage of scale."
                    },
                    facts: {
                        age: 'Age 30',
                        location: 'Mumbai, India',
                        experience: '8 yrs experience'
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
                skills: {
                    title: 'कौशल और तकनीकें',
                    subtitle: 'मैं स्केलेबल समाधान बनाने के लिए जिन तकनीकों के साथ काम करता हूं'
                },
                about: {
                    title: 'मेरे बारे में',
                    bio: {
                        1: "मैं <strong>मिहिर आर. संपत</strong> हूं, <strong>मुंबई स्थित सॉफ्टवेयर इंजीनियरिंग के निदेशक</strong>, जिन्हें <strong>फिनटेक अवधारणाओं</strong> को <strong>उत्पादन-तैयार, क्लाउड-नेटिव प्लेटफॉर्म</strong> में बदलने में <strong>8+ वर्षों</strong> का अनुभव है।",
                        2: "मेरी विशेषज्ञता गहरे <strong>पायथन</strong>, <strong>कुबेरनेट्स</strong>, <strong>सर्वरलेस</strong> और <strong>AWS/GCP आर्किटेक्चर</strong> को मिलाकर <strong>ईवेंट-संचालित माइक्रोसर्विस</strong> बनाती है जो <strong>टेराबाइट्स</strong> को संसाधित करते हैं, <strong>उप-सेकंड लेटेंसी</strong> बनाए रखते हैं, और बाजार की अस्थिरता के दौरान <strong>दोष-सहिष्णु</strong> रहते हैं।",
                        3: "मैं <strong>तकनीकी दृष्टि</strong> को परिभाषित करता हूं, <strong>टीमों का मार्गदर्शन</strong> करता हूं, और <strong>स्वचालन</strong> को एम्बेड करता हूं—<strong>इन्फ्रास्ट्रक्चर-एज़-कोड</strong> से <strong>CI/CD</strong> तक—ताकि हर रिलीज़ <strong>सुरक्षित</strong>, <strong>ऑडिटेबल</strong> और <strong>समय पर</strong> हो।",
                        4: "यदि आपकी संगठन <strong>विश्वसनीयता</strong>, <strong>गति</strong> और <strong>अनुशासित इंजीनियरिंग</strong> को महत्व देती है, तो आइए देखें कि मैं आपके अगले स्तर के स्केल को कैसे चला सकता हूं।"
                    },
                    facts: {
                        age: 'उम्र 30',
                        location: 'मुंबई, भारत',
                        experience: '8 साल का अनुभव'
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
        console.log('LanguageManager init() called');
        this.updateContent();
        this.setupEventListeners();
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        this.updateContent();
        this.updateLanguageButton();
    }

    updateContent() {
        console.log('updateContent() called');
        const elements = document.querySelectorAll('[data-i18n]');
        console.log(`Found ${elements.length} elements with data-i18n`);
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            console.log(`Processing key: ${key}`);
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (key && key.startsWith('about.bio.')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
                console.log(`Updated ${key} to: ${translation}`);
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
        
        // Handle dynamic calculations for age and experience
        if (key === 'about.facts.age') {
            const age = calculateAge('1995-04-13');
            console.log(`Calculating age for key ${key}: ${age}`);
            return `Age ${age}`;
        }
        if (key === 'about.facts.experience') {
            const exp = calculateExperience('2016-12-01');
            console.log(`Calculating experience for key ${key}: ${exp}`);
            return `${exp} yrs experience`;
        }
        if (key === 'about.facts.age' && this.currentLang === 'hi') {
            const age = calculateAge('1995-04-13');
            console.log(`Calculating Hindi age for key ${key}: ${age}`);
            return `उम्र ${age}`;
        }
        if (key === 'about.facts.experience' && this.currentLang === 'hi') {
            const exp = calculateExperience('2016-12-01');
            console.log(`Calculating Hindi experience for key ${key}: ${exp}`);
            return `${exp} साल का अनुभव`;
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

// Navigation Active State (Scroll Spy: highlight section most visible in viewport)
function setupNavigationActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function getVisibleHeight(rect) {
        const vh = window.innerHeight;
        const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        return visible;
    }

    function updateActiveNav() {
        let maxVisible = 0;
        let currentSection = sections[0];

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visible = getVisibleHeight(rect);
            if (visible > maxVisible) {
                maxVisible = visible;
                currentSection = section;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection.id}`);
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('resize', updateActiveNav);
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

// Skills Management
class SkillsManager {
    constructor() {
        this.currentExpanded = null;
        this.init();
    }

    init() {
        this.toPlainSkills(skillsData);
        this.renderSkills();
        this.setupEventListeners();
    }

    toPlainSkills(skillsData) {
        for (const key in skillsData) {
            if (skillsData[key].subSkills) {
                skillsData[key].subSkills = skillsData[key].subSkills.map(sub => ({ name: sub.name, icon: '' }));
            }
        }
    }

    renderSkills() {
        const container = document.getElementById('skillsContainer');
        if (!container) return;

        container.innerHTML = '';
        
        Object.entries(skillsData).forEach(([key, skill], index) => {
            const skillElement = this.createSkillElement(key, skill, index);
            container.appendChild(skillElement);
        });
    }

    createSkillElement(key, skill, index) {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-category';
        skillDiv.setAttribute('data-skill', key);
        skillDiv.setAttribute('data-aos', 'fade-up');
        skillDiv.setAttribute('data-aos-delay', (index + 1) * 100);

        const mainSkill = document.createElement('div');
        mainSkill.className = 'main-skill';
        mainSkill.innerHTML = `
            <svg class="main-skill-icon" width="28" height="28" viewBox="0 0 24 24">
                ${skill.icon}
            </svg>
            <span>${skill.name}</span>
        `;

        const subSkills = document.createElement('div');
        subSkills.className = 'sub-skills';
        
        if (skill.subSkills.length > 0) {
            const subSkillsGrid = document.createElement('div');
            subSkillsGrid.className = 'sub-skills-grid';
            
            skill.subSkills.forEach(subSkill => {
                const subSkillChip = document.createElement('div');
                subSkillChip.className = 'sub-skill-chip';
                subSkillChip.innerHTML =
                    (subSkill.icon ? `<span class="sub-skill-icon">${subSkill.icon}</span>` : '') +
                    `<span>${subSkill.name}</span>`;
                subSkillsGrid.appendChild(subSkillChip);
            });
            
            subSkills.appendChild(subSkillsGrid);
        }

        skillDiv.appendChild(mainSkill);
        skillDiv.appendChild(subSkills);

        return skillDiv;
    }

    setupEventListeners() {
        const container = document.getElementById('skillsContainer');
        if (!container) return;
        container.addEventListener('click', (e) => {
            const skillCategory = e.target.closest('.skill-category');
            if (skillCategory && container.contains(skillCategory)) {
                this.toggleSkill(skillCategory);
            }
        });
    }

    toggleSkill(skillCategory) {
        const subSkills = skillCategory.querySelector('.sub-skills');
        // If clicking the same category, collapse it only
        if (skillCategory.classList.contains('expanded')) {
            skillCategory.classList.remove('expanded');
            subSkills.classList.remove('expanded');
            this.currentExpanded = null;
        } else {
            // Collapse previously expanded category (if any)
            if (this.currentExpanded && this.currentExpanded !== skillCategory) {
                this.currentExpanded.classList.remove('expanded');
                this.currentExpanded.querySelector('.sub-skills').classList.remove('expanded');
            }
            // Expand current category
            skillCategory.classList.add('expanded');
            subSkills.classList.add('expanded');
            this.currentExpanded = skillCategory;
        }
    }
}

// Parallax hover effect for About Me card
function setupAboutCardParallax() {
    const card = document.querySelector('.about-image .about-card');
    if (!card) return;

    function handleMouseMove(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
        const rotateY = ((x - centerX) / centerX) * -10;
        card.style.transform = `perspective(600px) scale(1.04) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function resetParallax() {
        card.style.transform = 'perspective(600px) scale(1)';
    }

    function enableParallax() {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', resetParallax);
    }
    function disableParallax() {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', resetParallax);
        resetParallax();
    }

    function checkParallax() {
        if (window.innerWidth > 768) {
            enableParallax();
        } else {
            disableParallax();
        }
    }

    checkParallax();
    window.addEventListener('resize', checkParallax);
    // Reset on load
    resetParallax();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projectsData.forEach((project, idx) => {
    const article = document.createElement('article');
    article.className = 'project-card';
    article.setAttribute('data-aos', 'fade-up');
    article.setAttribute('data-aos-delay', `${100 + idx * 100}`);
    article.setAttribute('data-tech', project.tech.join(','));
    
    const demoButton = project.hasDemo ? `<a href="${project.demo}" class="btn btn-primary">Live Demo</a>` : '';
    
    article.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(t => `<span class='tech-tag'>${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${demoButton}
          <a href="${project.repo}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Repo</a>
        </div>
      </div>
    `;
    
    grid.appendChild(article);
  });
}

function renderExperience() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;
  
  // Clear existing timeline items (keep the line)
  const existingItems = timeline.querySelectorAll('.timeline-item');
  existingItems.forEach(item => item.remove());
  
  experienceData.forEach((job, idx) => {
    console.log(`Rendering job ${idx + 1}: ${job.title} at ${job.company} with logo: ${job.logo}`);
    
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-aos', 'fade-left');
    timelineItem.setAttribute('data-aos-delay', `${100 + idx * 100}`);
    
    const timelineNode = document.createElement('div');
    timelineNode.className = 'timeline-node';
    
    const timelineContent = document.createElement('div');
    timelineContent.className = 'timeline-content';
    
    const jobHeader = document.createElement('div');
    jobHeader.className = 'job-header';
    jobHeader.innerHTML = `
      <img src="${job.logo}" alt="${job.company}" class="company-logo" onerror="this.style.display='none'; this.nextElementSibling.style.marginLeft='0'; console.error('Failed to load logo:', this.src);">
      <div class="job-info">
        <h3 class="job-title">${job.title}</h3>
        <p class="company-name">${job.company}</p>
        <p class="job-location">${job.location}</p>
        <p class="job-dates">${job.dates} · ${job.duration}</p>
      </div>
    `;
    
    const achievementsList = document.createElement('ul');
    achievementsList.className = 'job-achievements';
    job.achievements.forEach(achievement => {
      const li = document.createElement('li');
      li.textContent = achievement;
      achievementsList.appendChild(li);
    });
    
    const skillsDiv = document.createElement('div');
    skillsDiv.className = 'job-skills';
    skillsDiv.innerHTML = `
      <div class="skills-tags">
        ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    `;
    
    timelineContent.appendChild(jobHeader);
    timelineContent.appendChild(achievementsList);
    timelineContent.appendChild(skillsDiv);
    
    timelineItem.appendChild(timelineNode);
    timelineItem.appendChild(timelineContent);
    
    timeline.appendChild(timelineItem);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const themeManager = new ThemeManager();
    const languageManager = new LanguageManager();
    const formHandler = new FormHandler();
    const toastManager = new ToastManager();
    const skillsManager = new SkillsManager();

    // Setup other functionality
    setupSmoothScrolling();
    setupNavigationActiveState();
    setupParallax();
    setupMobileMenu();
    setupAboutCardParallax();
    renderProjects();
    renderExperience();

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