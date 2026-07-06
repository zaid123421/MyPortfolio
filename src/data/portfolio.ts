export type Locale = 'en' | 'ar';

export type LocalizedText = Record<Locale, string>;

export interface NavItem {
  id: string;
  label: LocalizedText;
}

export interface Stat {
  label: LocalizedText;
  value: string;
  suffix?: LocalizedText;
  textValue?: LocalizedText;
}

export interface Project {
  id: string;
  name: string;
  tag: LocalizedText;
  description: LocalizedText;
  url: string;
  featured?: boolean;
  gradient: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  highlights: LocalizedText[];
}

export interface VolunteerItem {
  id: string;
  role: LocalizedText;
  organization: LocalizedText;
  period: LocalizedText;
  highlights: LocalizedText[];
}

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  type: 'email' | 'phone' | 'link';
}

export const navItems: NavItem[] = [
  { id: 'about', label: { en: 'About', ar: 'نبذة' } },
  { id: 'projects', label: { en: 'Projects', ar: 'المشاريع' } },
  { id: 'skills', label: { en: 'Skills', ar: 'المهارات' } },
  { id: 'experience', label: { en: 'Experience', ar: 'الخبرة' } },
  { id: 'volunteer', label: { en: 'Volunteer', ar: 'التطوع' } },
  { id: 'contact', label: { en: 'Contact', ar: 'تواصل' } },
];

export const portfolio = {
  name: 'Zaid Alshamaa',
  title: {
    en: 'Frontend Developer // Software Engineer',
    ar: 'مطور واجهات أمامية // مهندس برمجيات',
  },
  heroCaption: {
    en: 'Volunteer @ DCPC 2026',
    ar: 'متطوع — مسابقة دمشق الجامعية للبرمجة 2026',
  },
  stats: [
    {
      label: { en: 'Experience', ar: 'الخبرة' },
      value: '3',
      suffix: { en: '+ Years', ar: '+ سنوات' },
    },
    {
      label: { en: 'Education', ar: 'التعليم' },
      value: '5',
      suffix: { en: 'th Year', ar: ' سنة' },
    },
    {
      label: { en: 'Location', ar: 'الموقع' },
      value: '0',
      textValue: { en: 'Damascus', ar: 'دمشق' },
    },
  ] satisfies Stat[],
  cta: {
    projects: { en: 'View Projects', ar: 'عرض المشاريع' },
    cv: { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  },
  about: {
    title: { en: 'About Me', ar: 'نبذة عني' },
    summary: {
      en: 'A dedicated Software Engineering student (Final Year) at Damascus University and a Frontend Developer with over 3 years of technical experience. Alongside a strong proficiency in building secure and responsive web applications using React.js, I have demonstrated exceptional leadership and civic responsibility through my role as a Student Representative. Proven ability to manage full project lifecycles, optimize digital presence, and implement innovative solutions like AI-driven assistants. Committed to applying engineering principles and professional communication skills to support institutional goals and digital transformation initiatives.',
      ar: 'طالب هندسة برمجيات (السنة الأخيرة) في جامعة دمشق ومطور واجهات أمامية بخبرة تقنية تتجاوز 3 سنوات. أتمتع بكفاءة عالية في بناء تطبيقات ويب آمنة ومتجاوبة باستخدام React.js، مع قيادة ومسؤولية مجتمعية متميزة من خلال دوري كممثل للطلاب. أثبتت قدرتي على إدارة دورة حياة المشاريع كاملة، وتحسين الحضور الرقمي، وتطبيق حلول مبتكرة مثل المساعدين الذكيين. ملتزم بتطبيق مبادئ الهندسة ومهارات التواصل المهني لدعم أهداف المؤسسات ومبادرات التحول الرقمي.',
    },
  },
  projects: {
    title: { en: 'Featured Projects', ar: 'المشاريع المميزة' },
    subtitle: {
      en: 'Real-world applications built with modern frontend architecture',
      ar: 'تطبيقات حقيقية مبنية بمعمارية واجهات أمامية حديثة',
    },
    items: [
      {
        id: 'sweetspot',
        name: 'SweetSpot',
        tag: { en: 'Digital Agency', ar: 'وكالة رقمية' },
        description: {
          en: 'SweetSpot aims to deliver innovative, high-performing, high-quality, and efficient services for an exceptional user experience.',
          ar: 'يهدف SweetSpot إلى تقديم خدمات مبتكرة وعالية الأداء والجودة والكفاءة لتجربة مستخدم استثنائية.',
        },
        url: 'https://sweetspot-self.vercel.app/en',
        featured: true,
        gradient: 'from-sky-500/20 via-blue-500/10 to-indigo-500/20',
      },
      {
        id: 'sham-mall',
        name: 'Sham Mall',
        tag: { en: 'E-Commerce', ar: 'تجارة إلكترونية' },
        description: {
          en: 'A landing page for an e-commerce mobile application, showcasing products, features, and the brand experience.',
          ar: 'Landing page لتطبيق تجارة إلكترونية، تعرض المنتجات والميزات وتجربة العلامة التجارية.',
        },
        url: 'https://sham-store.shop/',
        featured: true,
        gradient: 'from-indigo-500/20 via-blue-500/10 to-cyan-500/20',
      },
      {
        id: 'complaints',
        name: 'Complaints System',
        tag: { en: 'Admin Platform', ar: 'منصة إدارية' },
        description: {
          en: 'Multi-role complaints management platform with admin, supervisor, and viewer dashboards.',
          ar: 'منصة إدارة شكاوى متعددة الأدوار مع لوحات للمدير والمشرف والمشاهد.',
        },
        url: 'https://complaints-system.vercel.app/',
        gradient: 'from-amber-500/20 via-orange-500/10 to-red-500/20',
      },
      {
        id: 'roznama',
        name: 'Roznama',
        tag: { en: 'Dashboard', ar: 'لوحة تحكم' },
        description: {
          en: 'Admin dashboard for the Roznama scheduling system, built for a client in Norway.',
          ar: 'لوحة تحكم لنظام روزنامة، مطوّرة لعميل في النرويج.',
        },
        url: 'https://roznama-six.vercel.app/',
        gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
      },
      {
        id: 'voyago',
        name: 'Voyago',
        tag: { en: 'Travel Platform', ar: 'منصة سفر' },
        description: {
          en: 'Admin dashboard for adding and managing trips, with full control over bookings and transactions.',
          ar: 'لوحة تحكم لإضافة الرحلات وإدارتها، مع التحكم الكامل بالحجوزات والمعاملات.',
        },
        url: 'https://voyago-dashboard.vercel.app/',
        gradient: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
      },
      {
        id: 'teriaq',
        name: 'Teriaq',
        tag: { en: 'Food & Restaurants', ar: 'أكل ومطاعم' },
        description: {
          en: 'A test project focused on food and restaurants — menus, listings, and dining experiences.',
          ar: 'مشروع تجريبي عن الأكل والمطاعم — قوائم، عروض، وتجارب طعام.',
        },
        url: 'https://teriaq-test.vercel.app/',
        featured: true,
        gradient: 'from-rose-500/20 via-pink-500/10 to-amber-500/20',
      },
    ] satisfies Project[],
  },
  skills: {
    title: { en: 'Skills', ar: 'المهارات' },
    technicalTitle: { en: 'Technical Skills', ar: 'المهارات التقنية' },
    softTitle: { en: 'Soft Skills', ar: 'المهارات الشخصية' },
    marquee: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git', 'SDLC', 'AI Tools'],
    technical: [
      {
        en: 'Solid foundation in Software Engineering principles, including SDLC and project structuring.',
        ar: 'أساس قوي في مبادئ هندسة البرمجيات، بما في ذلك SDLC وهيكلة المشاريع.',
      },
      {
        en: 'Strong understanding of frontend technologies: HTML, CSS, and JavaScript.',
        ar: 'فهم قوي لتقنيات الواجهات الأمامية: HTML و CSS و JavaScript.',
      },
      {
        en: '3 years of experience in Frontend Development (React.js & Next.js).',
        ar: '3 سنوات خبرة في تطوير الواجهات الأمامية (React.js و Next.js).',
      },
      {
        en: 'Implement UI designs with precision using Tailwind CSS.',
        ar: 'تنفيذ تصاميم UI بدقة باستخدام Tailwind CSS.',
      },
      {
        en: 'Develop responsive designs that work across various devices.',
        ar: 'بناء تصاميم متجاوبة تعمل على مختلف الأجهزة.',
      },
      {
        en: 'Experience integrating RESTful APIs with frontend applications.',
        ar: 'خبرة في ربط RESTful APIs مع تطبيقات الواجهة الأمامية.',
      },
      {
        en: 'Familiar with Git and version control workflows.',
        ar: 'إلمام بـ Git وسير عمل التحكم بالإصدارات.',
      },
      {
        en: 'Leverage AI tools to enhance productivity and problem-solving.',
        ar: 'استخدام أدوات الذكاء الاصطناعي لتعزيز الإنتاجية وحل المشكلات.',
      },
    ] satisfies LocalizedText[],
    soft: [
      {
        en: 'Strong Communication & Teamwork',
        ar: 'تواصل قوي وعمل جماعي',
      },
      {
        en: 'Leadership & Team Management',
        ar: 'قيادة وإدارة فرق',
      },
      {
        en: 'Problem-Solving & Research',
        ar: 'حل مشكلات وبحث',
      },
      {
        en: 'Organization & Time Management',
        ar: 'تنظيم وإدارة وقت',
      },
    ] satisfies LocalizedText[],
  },
  experience: {
    title: { en: 'Experience', ar: 'الخبرة العملية' },
    items: [
      {
        id: 'sweetspot',
        role: { en: 'Frontend Developer', ar: 'مطور واجهات أمامية' },
        company: 'SweetSpot Tech',
        period: { en: 'Mar 2025 – Apr 2026', ar: 'مارس 2025 – أبريل 2026' },
        highlights: [
          {
            en: 'Managed full deployment lifecycle including shared hosting and VPS configuration for Shammall.',
            ar: 'إدارة دورة النشر الكاملة بما في ذلك الاستضافة المشتركة وإعداد VPS لمشروع Shammall.',
          },
          {
            en: 'Optimized web applications for SEO, improving Google search rankings and visibility.',
            ar: 'تحسين تطبيقات الويب لمحركات البحث، مما رفع الترتيب والظهور على Google.',
          },
          {
            en: 'Implemented responsive UI designs with Tailwind CSS across devices.',
            ar: 'تنفيذ واجهات متجاوبة بدقة باستخدام Tailwind CSS على مختلف الأجهزة.',
          },
          {
            en: 'Integrated an AI Assistant with RAG architecture for real-time, data-driven responses.',
            ar: 'دمج مساعد ذكي بمعمارية RAG لاستجابات فورية مبنية على البيانات.',
          },
        ],
      },
      {
        id: 'freelance',
        role: { en: 'Frontend Developer', ar: 'مطور واجهات أمامية' },
        company: 'Freelance & Personal Projects',
        period: { en: 'Ongoing', ar: 'مستمر' },
        highlights: [
          {
            en: 'Built dynamic SPAs with React.js focusing on component architecture and UX.',
            ar: 'بناء SPAs ديناميكية بـ React.js مع التركيز على معمارية المكونات وتجربة المستخدم.',
          },
          {
            en: 'Delivered a real-world admin dashboard for a client in Norway.',
            ar: 'تسليم لوحة تحكم إدارية حقيقية لعميل في النرويج.',
          },
        ],
      },
    ] satisfies ExperienceItem[],
  },
  volunteer: {
    title: { en: 'Volunteer Experience', ar: 'الخبرة التطوعية' },
    items: [
      {
        id: 'student-rep',
        role: { en: 'Student Representative', ar: 'ممثل الطلاب' },
        organization: {
          en: 'Student Union — Faculty of IT Engineering, Damascus University',
          ar: 'اتحاد الطلبة — كلية هندسة تقانة المعلومات، جامعة دمشق',
        },
        period: { en: 'Apr 2025 – Present', ar: 'أبريل 2025 – حتى الآن' },
        highlights: [
          {
            en: 'Listened to student concerns and provided direct academic guidance.',
            ar: 'الاستماع لمشاكل الطلاب وتقديم إرشاد أكاديمي مباشر.',
          },
          {
            en: 'Served as liaison between students and faculty administration.',
            ar: 'العمل كحلقة وصل بين الطلاب وإدارة الكلية.',
          },
          {
            en: 'Organized college events, workshops, and student activities.',
            ar: 'تنظيم فعاليات الكلية وورش العمل والأنشطة الطلابية.',
          },
        ],
      },
      {
        id: 'book-fair',
        role: { en: 'Volunteer Organizer', ar: 'منظم متطوع' },
        organization: {
          en: 'Damascus International Book Fair — Student Union Pavilion',
          ar: 'معرض دمشق الدولي للكتاب — جناح اتحاد الطلبة',
        },
        period: { en: 'Feb 2026', ar: 'فبراير 2026' },
        highlights: [
          {
            en: 'Supervised daily pavilion operations and resource organization.',
            ar: 'الإشراف على العمليات اليومية للجناح وتنظيم الموارد.',
          },
          {
            en: 'Welcomed guests and answered inquiries about faculty programs.',
            ar: 'استقبال الزوار والإجابة عن استفسارات برامج الكلية.',
          },
        ],
      },
      {
        id: 'dcpc',
        role: { en: 'Logistics Committee Member', ar: 'عضو لجنة اللوجستيات' },
        organization: {
          en: 'Damascus Collegiate Programming Contest (DCPC)',
          ar: 'مسابقة دمشق الجامعية للبرمجة (DCPC)',
        },
        period: { en: 'Jun 2026', ar: 'يونيو 2026' },
        highlights: [
          {
            en: 'Managed on-site logistics, team seating, and schedule flow.',
            ar: 'إدارة اللوجستيات الميدانية وترتيب جلوس الفرق وسير الجدول.',
          },
          {
            en: 'Handled registrations and supported competing teams and judges.',
            ar: 'التعامل مع التسجيلات ودعم الفرق المتنافسة والحكام.',
          },
        ],
      },
    ] satisfies VolunteerItem[],
  },
  education: {
    title: { en: 'Education', ar: 'التعليم' },
    degree: {
      en: 'Information Technology Engineering',
      ar: 'هندسة تقانة المعلومات',
    },
    school: { en: 'Damascus University', ar: 'جامعة دمشق' },
    period: { en: '2020 – Present', ar: '2020 – حتى الآن' },
    specialization: {
      en: '5th Year — Software Engineering Specialization',
      ar: 'السنة الخامسة — تخصص هندسة البرمجيات',
    },
    description: {
      en: 'Bridging academic theory with real-world deployment and software engineering practice.',
      ar: 'ربط النظرية الأكاديمية بالنشر الفعلي وممارسة هندسة البرمجيات.',
    },
  },
  languages: {
    title: { en: 'Languages', ar: 'اللغات' },
    items: [
      { name: { en: 'Arabic', ar: 'العربية' }, level: { en: 'Native', ar: 'لغة أم' } },
      { name: { en: 'English', ar: 'الإنجليزية' }, level: { en: 'Proficient', ar: 'متقدم' } },
    ],
  },
  contact: {
    title: { en: 'Get In Touch', ar: 'تواصل معي' },
    subtitle: {
      en: "Let's build the next big thing together.",
      ar: 'لنبني الشيء الكبير التالي معاً.',
    },
    copySuccess: { en: 'Email copied!', ar: 'تم نسخ البريد!' },
    links: [
      { id: 'email', label: 'zshamaa20@gmail.com', href: 'mailto:zshamaa20@gmail.com', type: 'email' },
      { id: 'phone', label: '+963-936293119', href: 'tel:+963936293119', type: 'phone' },
      { id: 'github', label: 'GitHub', href: 'https://github.com/zaid123421', type: 'link' },
      { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaid-alshamaa/', type: 'link' },
    ] satisfies ContactLink[],
  },
  footer: {
    tagline: {
      en: 'Engineering modern interfaces with logic, scalability, and user-centric design.',
      ar: 'بناء واجهات حديثة بالمنطق والقابلية للتوسع وتصميم يركز على المستخدم.',
    },
    rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  },
};

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
