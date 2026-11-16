/** Language-neutral facts of the CV: names, links and technology badges. Texts live in public/i18n. */

export const PROFILE = {
  name: 'Redouane Chaibi',
  email: 'chaibi.redouane@gmail.com',
  phone: '+33 617 767 740',
  photo: 'images/perso/portrait.jpg',
};

export const EASY_MAT_UI = {
  github: 'https://github.com/chaibiredouane/easy-mat-ui',
  npm: 'https://www.npmjs.com/package/easy-mat-ui',
  demo: 'https://easy-mat-ui.web.app/',
};

export interface SkillGroup {
  key: 'frontend' | 'backend' | 'database' | 'devops';
  icon: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: 'frontend',
    icon: 'layout',
    items: [
      'Angular',
      'Angular Micro Frontends',
      'Native Federation',
      'Angular Material',
      'TypeScript',
      'RxJS',
      'Reusable component libraries',
      'Responsive UI development',
    ],
  },
  {
    key: 'backend',
    icon: 'server',
    items: [
      'Java',
      'Quarkus',
      'REST APIs',
      'Microservices architecture',
      'Authentication and authorization',
      'Keycloak',
    ],
  },
  {
    key: 'database',
    icon: 'database',
    items: ['Microsoft SQL Server', 'Database architecture', 'Data modeling', 'SQL optimization'],
  },
  {
    key: 'devops',
    icon: 'cloud',
    items: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'CI/CD', 'Git and GitHub'],
  },
];

export interface Job {
  company: string;
  logo: string;
  current?: boolean;
  stack: { label: string; items: string[] }[];
}

/** Same order as `content.experience.items`. */
export const JOBS: Job[] = [
  {
    company: 'Luxembourg Institute of Health',
    logo: 'images/logos/logo_0.png',
    current: true,
    stack: [
      {
        label: 'Frontend',
        items: [
          'Angular (v13, v11, v9)',
          'Angular Micro Frontends',
          'Native Federation',
          'Angular Material',
          'Node (v16, v13, v10)',
          'TypeScript (v4, v3)',
          'npm (v8, v6)',
          'ngx-translate',
        ],
      },
      {
        label: 'Backend',
        items: [
          'Quarkus microservices',
          'Spring Boot',
          'Java (11, 13)',
          'Python',
          'Groovy',
          'Apache Maven',
          'Keycloak',
          'Windows PowerShell',
        ],
      },
      { label: 'Database', items: ['SQL Server (2019, 2016) T-SQL', 'Oracle (v18, v11) PL/SQL'] },
      {
        label: 'DevOps',
        items: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'OpenShift', 'Argo CD'],
      },
    ],
  },
  {
    company: 'ADn solutions',
    logo: 'images/logos/logo_1.png',
    stack: [
      {
        label: 'Backend',
        items: [
          'C#',
          'RESTful API',
          '.NET Framework 4.6',
          'ASP.NET (MVC, Web Forms)',
          'CLI.NET',
          'MSI',
          'Web services',
        ],
      },
      { label: 'Frontend', items: ['JavaScript (jQuery)', 'CSS', 'HTML', 'AJAX', 'Bootstrap'] },
      {
        label: 'Tools & data',
        items: [
          'Visual Studio',
          'TFS',
          'Microsoft SQL Server (T-SQL)',
          'DocuSign',
          'Mercanet (BNP Paribas)',
          'IIS',
        ],
      },
    ],
  },
  {
    company: 'Medasys',
    logo: 'images/logos/logo_2.png',
    stack: [
      {
        label: 'Backend',
        items: [
          'C#',
          'RESTful API',
          '.NET Framework 3.5',
          'WCF',
          'WPF',
          'WinForms',
          'ASP.NET',
          'MVP',
          'TFS',
        ],
      },
      {
        label: 'Data & messaging',
        items: ['Oracle', 'PL/SQL', 'XML (CDA)', 'JSON', 'LDAP', 'POP3', 'SMTP'],
      },
      {
        label: 'Tools',
        items: [
          'Talend',
          'Web Intelligence',
          'Business Objects',
          'cURL',
          'Crystal Reports',
          'MSS',
          'APICRYPT',
        ],
      },
    ],
  },
  {
    company: 'Diadeis',
    logo: 'images/logos/logo_3.png',
    stack: [
      {
        label: 'Stack',
        items: ['Java', 'Eclipse', 'JDBC', 'SQL', 'Balise UML', 'ETL', 'PostgreSQL'],
      },
    ],
  },
];

export const SCHOOL_LINKS = [
  'https://www.interopsante.org',
  'https://www.uca.fr/formation/nos-formations/par-ufr-ecoles-et-iut/institut-dinformatique/master/master-info',
  'https://www.uvsq.fr',
  'https://www.usthb.dz',
];

export const NAV_ITEMS = [
  'about',
  'skills',
  'microfrontends',
  'easymat',
  'experience',
  'education',
  'contact',
] as const;
export type NavId = (typeof NAV_ITEMS)[number];
